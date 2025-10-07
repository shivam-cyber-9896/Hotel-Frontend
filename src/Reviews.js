import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Reviews.css";

const API_BASE = "https://hotel-backend-qon3.onrender.com";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Form state
  const [form, setForm] = useState({
    userId: "",
    rating: "",
    comment: "",
    photos: [],
  });

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE}/reviewsget`);
      setReviews(Array.isArray(res.data) ? res.data : []);
    } catch (e) {
      console.error("reviews fetch error", e);
      setError("Failed to load reviews. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userId, rating, comment } = form;

    if (!userId || !rating || !comment) {
      alert("All fields are required");
      return;
    }

    setSubmitting(true);
    const fd = new FormData();
    fd.append("userId", userId);
    fd.append("rating", rating);
    fd.append("comment", comment);

    if (form.photos.length > 0) {
      for (let i = 0; i < form.photos.length; i++) {
        fd.append("photos", form.photos[i]);
      }
    }

    try {
      const res = await axios.post(`${API_BASE}/reviews`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data?.message || "Review submitted successfully!");
      setForm({ userId: "", rating: "", comment: "", photos: [] });
      loadReviews();
    } catch (err) {
      console.error("review submit error", err);
      alert(err.response?.data?.message || "Failed to submit review");
    } finally {
      setSubmitting(false);
    }
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert("Maximum 5 photos are allowed.");
      setForm({ ...form, photos: files.slice(0, 5) });
    } else {
      setForm({ ...form, photos: files });
    }
  };

  const imgUrl = (p) => {
    if (!p) return null;
    return p.startsWith("http") ? p : `${API_BASE}${p}`;
  };

  return (
    <div className="reviews-page">
      <div className="reviews-header">
        <h2>Guest Reviews</h2>
        <p>See what our guests are saying about their stay. Share your experience!</p>
      </div>

      {/* Review Form */}
      <div className="review-form-section">
        <h3>Share Your Experience</h3>
        <form onSubmit={handleSubmit} className="review-form">
          <div>
            <label>Your User ID *</label>
            <input
              type="text"
              value={form.userId}
              onChange={(e) => setForm({ ...form, userId: e.target.value })}
              placeholder="Enter your user ID"
              required
            />
          </div>

          <div>
            <label>Rating (1-5) *</label>
            <input
              type="number"
              min="1"
              max="5"
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
              placeholder="Enter your rating"
              required
            />
          </div>

          <div>
            <label>Comment *</label>
            <textarea
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              placeholder="Tell us about your experience..."
              required
            />
          </div>

          <div>
            <label>Photos (Optional, Max 5)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
            />
            {form.photos.length > 0 && (
              <div className="photo-preview">
                {form.photos.map((photo, idx) => (
                  <img
                    key={idx}
                    src={URL.createObjectURL(photo)}
                    alt={`preview-${idx}`}
                    className="preview-img"
                  />
                ))}
                <p>{form.photos.length}/5 photos selected</p>
              </div>
            )}
          </div>

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>

      {/* Reviews List */}
      {loading && <div className="loading-state">Loading reviews...</div>}
      {error && <div className="error-state">{error}</div>}
      {!loading && !error && (
        <div className="reviews-grid">
          {reviews.length === 0 && <div className="empty-state">No reviews yet.</div>}
          {reviews.map((r) => (
            <div key={r._id || Math.random()} className="review-card">
              <div className="review-header">
                <div className="review-avatar">
                  {(r.userId?.[0] || "G").toUpperCase()}
                </div>
                <div className="review-user-info">
                  <div className="review-user-name">{r.userId || "Guest"}</div>
                  <div className="review-room-info">Rating: {r.rating || "-"}</div>
                </div>
              </div>
              <p className="review-text">{r.comment || "No comment provided."}</p>
              {Array.isArray(r.photos) && r.photos.length > 0 && (
                <div className="review-photos">
                  {r.photos.map((p, idx) => (
                    <img
                      key={idx}
                      src={imgUrl(p)}
                      alt={`review-${idx}`}
                      className="review-photo"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
