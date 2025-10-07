import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

const API_BASE = "https://hotel-backend-qon3.onrender.com";

export default function AdminModule() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminForm, setAdminForm] = useState({
    username: "",
    password: "",
    name: "",
    role: "manager",
    photo: null,
  });

  const [selectedBooking, setSelectedBooking] = useState(null);

  // --- FETCH FUNCTIONS ---
  const fetchAdmins = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE}/alladmins`);
      setAdmins(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load admins");
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE}/alluser`);
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const fetchBookings = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE}/bookshow`);
      setBookings(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE}/reviewsget`);
      setReviews(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  // --- USE EFFECTS ---
  useEffect(() => {
    fetchAdmins();
    fetchUsers();
    fetchBookings();
    fetchReviews();
  }, []);

  useEffect(() => {
    if (activeTab === "admins") fetchAdmins();
    if (activeTab === "users") fetchUsers();
    if (activeTab === "bookings") fetchBookings();
    if (activeTab === "reviews") fetchReviews();
  }, [activeTab]);

  // --- HELPERS ---
  const imgUrl = (p) => (p ? (p.startsWith("http") ? p : `${API_BASE}${p}`) : null);
  const formatDate = (d) => (d ? new Date(d).toLocaleString("en-IN") : "-");
  const extractBookingPeriod = (b) => {
    const bp = b?.bookingPeriod || b?.period || b?.booking || {};
    const start = bp.startDate || bp.from || bp.checkIn || bp.check_in || bp.start;
    const end = bp.endDate || bp.to || bp.checkOut || bp.check_out || bp.end;
    return { start: start || "-", end: end || "-" };
  };

  // --- CREATE ADMIN ---
  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    if (!adminForm.username || !adminForm.password || !adminForm.name || !adminForm.role) {
      alert("Please fill all required fields");
      return;
    }

    const fd = new FormData();
    fd.append("username", adminForm.username);
    fd.append("email", `${adminForm.username}@admin.com`);
    fd.append("password", adminForm.password);
    fd.append("name", adminForm.name);
    fd.append("role", adminForm.role);
    if (adminForm.photo) fd.append("photo", adminForm.photo);

    try {
      const res = await axios.post(`${API_BASE}/admin/create`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data?.message || "Admin created successfully!");
      setShowAdminModal(false);
      setAdminForm({ username: "", password: "", name: "", role: "manager", photo: null });
      fetchAdmins();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to create admin");
    }
  };

  return (
    <div className="am-root">
      {/* SIDEBAR */}
      <aside className="am-sidebar">
        <div className="am-brand">Hotel Admin</div>
        <nav>
          {["dashboard", "admins", "users", "bookings", "reviews"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
        <div className="am-sidebar-footer">
          <button
            className="btn-ghost"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
          <button 
            className="btn-primary" 
            onClick={() => {
              console.log("Create Admin clicked");
              setShowAdminModal(true);
            }}
          >
            + Create Admin
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="am-main">
        {loading && <div className="am-loading">Loading...</div>}
        {error && <div className="am-error">{error}</div>}
        {/* Debug indicator */}
        {showAdminModal && <div style={{position: 'fixed', top: 0, left: 0, background: 'red', color: 'white', padding: '5px', zIndex: 100000}}>Modal State: OPEN</div>}

        {activeTab === "dashboard" && (
          <section className="am-dashboard">
            <h1>Welcome back, Admin</h1>
            <div className="am-stats">
              <div className="stat">
                <div className="stat-value">{users.length}</div>
                <div className="stat-label">Users</div>
              </div>
              <div className="stat">
                <div className="stat-value">{admins.length}</div>
                <div className="stat-label">Admins</div>
              </div>
              <div className="stat">
                <div className="stat-value">{bookings.length}</div>
                <div className="stat-label">Bookings</div>
              </div>
              <div className="stat">
                <div className="stat-value">{reviews.length}</div>
                <div className="stat-label">Reviews</div>
              </div>
            </div>
          </section>
        )}

        {/* ADMINS TABLE */}
        {activeTab === "admins" && (
          <section>
            <h2>Admins</h2>
            <div className="table-wrap">
              <table className="am-table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((a) => (
                    <tr key={a._id}>
                      <td>
                        {a.photo ? (
                          <img src={imgUrl(a.photo)} alt={a.name} className="avatar" />
                        ) : (
                          <div className="avatar avatar-empty">{(a.name || "")[0]}</div>
                        )}
                      </td>
                      <td>{a.name || "-"}</td>
                      <td>{a.email || "-"}</td>
                      <td>{a.role || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* USERS TABLE */}
        {activeTab === "users" && (
          <section>
            <h2>Users</h2>
            <div className="table-wrap">
              <table className="am-table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u._id}>
                      <td>
                        {u.photo ? (
                          <img src={imgUrl(u.photo)} alt={u.name} className="avatar" />
                        ) : (
                          <div className="avatar avatar-empty">{(u.name || "")[0]}</div>
                        )}
                      </td>
                      <td>{u.name || "-"}</td>
                      <td>{u.email || "-"}</td>
                      <td>{u.phone || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* BOOKINGS TABLE */}
        {activeTab === "bookings" && (
          <section>
            <h2>Bookings</h2>
            <div className="table-wrap">
              <table className="am-table clickable">
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Owner</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Room Type</th>
                    <th>Rooms</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => {
                    const bp = extractBookingPeriod(b);
                    return (
                      <tr key={b._id} onClick={() => setSelectedBooking(b)}>
                        <td>{b.bookingId || b._id || "-"}</td>
                        <td>{b.ownerName || b.name || "-"}</td>
                        <td>{b.email || "-"}</td>
                        <td>{b.phone || "-"}</td>
                        <td>{b.roomType || "-"}</td>
                        <td>{b.numberOfRooms ?? (b.rooms || "-")}</td>
                        <td>{bp.start}</td>
                        <td>{bp.end}</td>
                        <td>{formatDate(b.createdAt)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* REVIEWS TABLE */}
        {activeTab === "reviews" && (
          <section>
            <h2>Reviews</h2>
            <div className="table-wrap">
              <table className="am-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Room</th>
                    <th>Review</th>
                    <th>Photos</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((r) => (
                    <tr key={r._id}>
                      <td>{r.user || r.userId || "-"}</td>
                      <td>{r.room || r.roomId || "-"}</td>
                      <td>{r.review || r.comment || "-"}</td>
                      <td>
                        {Array.isArray(r.photos) && r.photos.length > 0
                          ? r.photos.map((p, i) => (
                              <img key={i} src={imgUrl(p)} alt={`photo-${i}`} className="thumb" />
                            ))
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>

      {/* CREATE ADMIN MODAL */}
      {showAdminModal && (
        <div 
          className="modal-root" 
          onClick={(e) => {
            if (e.target.className === 'modal-root') {
              console.log("Closing modal");
              setShowAdminModal(false);
            }
          }}
          style={{ display: 'flex' }}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Create Admin</h3>
            <form onSubmit={handleAdminSubmit} className="modal-form">
              <div>
                <label>Username</label>
                <input
                  type="text"
                  value={adminForm.username}
                  onChange={(e) => setAdminForm({ ...adminForm, username: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  value={adminForm.name}
                  onChange={(e) => setAdminForm({ ...adminForm, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  value={adminForm.password}
                  onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Role</label>
                <select
                  value={adminForm.role}
                  onChange={(e) => setAdminForm({ ...adminForm, role: e.target.value })}
                >
                  <option value="manager">Manager</option>
                  <option value="SuperAdmin">SuperAdmin</option>
                  <option value="Staff">Staff</option>
                </select>
              </div>
              <div>
                <label>Photo (optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setAdminForm({ ...adminForm, photo: e.target.files[0] })}
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn-primary">Create</button>
                <button type="button" className="btn-ghost" onClick={() => setShowAdminModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
