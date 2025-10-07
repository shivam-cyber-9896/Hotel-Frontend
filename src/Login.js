import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [mode, setMode] = useState("customer"); // customer | admin | signup
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    promo: "",
    corporateId: "",
    username: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let url = "";
      let payload = {};

      if (mode === "signup") {
        url = "https://hotel-backend-qon3.onrender.com/signup";
        payload = {
          name: form.name,
          email: form.email,
          password: form.password,
          phone: form.phone,
          promo: form.promo,
          corporateId: form.corporateId,
        };
      } else if (mode === "customer") {
        url = "https://hotel-backend-qon3.onrender.com/login";
        payload = { email: form.email, password: form.password };
      } else if (mode === "admin") {
        url = "https://hotel-backend-qon3.onrender.com/admin/login";
        payload = { username: form.username, password: form.password };
      }

      const res = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("✅ API Response:", res.data);

      if (mode === "signup") {
        alert("✅ Signup successful! Please login.");
        setMode("customer");
      } else {
        const token = res.data.token || "dummy-token";
        localStorage.setItem("token", token);
        localStorage.setItem("role", mode);

        alert("✅ Successfully logged in!");
        if (mode === "admin") navigate("/admin");
        else navigate("/booking");
      }
    } catch (err) {
      if (err.response) {
        console.error("❌ Server error:", err.response.data);
        alert(`❌ ${err.response.data.message || JSON.stringify(err.response.data)}`);
      } else if (err.request) {
        console.error("❌ No response from server:", err.request);
        alert("❌ No response from server. Please retry.");
      } else {
        console.error("❌ Request setup error:", err.message);
        alert("❌ Request error: " + err.message);
      }
    }
  };

  return (
    <div className="login-container">
      {/* Background video */}
      <video autoPlay muted loop className="video-bg">
        <source src="/videos/about.mp4" type="video/mp4" />
      </video>
      <div className="black-overlay"></div>

      <div className="login-content">
        {/* Left Section */}
        <div className="login-left">
          <h1>Welcome to Radisson Login</h1>
          <p>
            Experience world-class hospitality at Radisson Chandigarh Zirakpur.
            <br />
            Sign in to manage bookings, unlock exclusive member rates, and earn
            rewards.
            <br />
            Join now to explore unforgettable stays and global benefits across
            our hotel family.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="login-form-box">
          <h2>
            {mode === "signup"
              ? "Create Account"
              : mode === "admin"
              ? "Admin Login"
              : "Member Login"}
          </h2>

          <form onSubmit={handleSubmit}>
            {mode === "signup" && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="promo"
                  placeholder="Promotional Code (Optional)"
                  value={form.promo}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="corporateId"
                  placeholder="Corporate Account ID (Optional)"
                  value={form.corporateId}
                  onChange={handleChange}
                />
              </>
            )}

            {/* Customer Login */}
            {mode === "customer" && (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            {/* Admin Login */}
            {mode === "admin" && (
              <>
                <input
                  type="text"
                  name="username"
                  placeholder="Admin Username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            <button type="submit">
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>

          <p className="toggle-link">
            {mode === "signup" ? (
              <>
                Already a member? <span onClick={() => setMode("customer")}>Login</span>
              </>
            ) : mode === "customer" ? (
              <>
                Don’t have an account? <span onClick={() => setMode("signup")}>Sign Up</span>
                <br />
                Are you an Admin? <span onClick={() => setMode("admin")}>Admin Login</span>
              </>
            ) : (
              <>
                Not an Admin? <span onClick={() => setMode("customer")}>Customer Login</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
