import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    location: "South Campus",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirm_password) {
      alert("Passwords do not match.");
      return;
    }

    // Prepare data to match Joi schema
    const payload = {
      username: form.username,
      email: form.email,
      password: form.password,
      phone_number: form.phone_number,
      location: form.location,
    };

    try {
      const res = await fetch("http://localhost:3002/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert("Signup failed: " + (data.error || data.message));
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: 500 }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              required
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              required
              value={form.confirm_password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label>Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone_number"
              required
              value={form.phone_number}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Campus Location</label>
            <select
              className="form-control"
              name="location"
              value={form.location}
              onChange={handleChange}
            >
              <option value="South Campus">South Campus</option>
              <option value="Main Campus">Main Campus</option>
              <option value="Emalahleni Campus">Emalahleni Campus</option>
              <option value="Arcadia Campus">Arcadia Campus</option>
              <option value="Art Campus">Art Campus</option>
            </select>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </div>

          <div className="text-center mt-3">
            Already registered? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
