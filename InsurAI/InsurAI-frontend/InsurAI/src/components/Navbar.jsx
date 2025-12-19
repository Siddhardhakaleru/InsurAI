import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ name: "", email: "", phone: "" });

  // Load user from storage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) setUser(stored);
  }, []);

  // Handle input
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // LOGIN / SIGNUP
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = isSignup
      ? "http://localhost:8080/api/users/signup"
      : "http://localhost:8080/api/users/login";

    try {
      const res = await axios.post(apiUrl, formData);
      const userData = res.data;

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      setShowDropdown(false);

      setFormData({ name: "", email: "", password: "", phone: "" });

      if (userData.role === "ADMIN") navigate("/admin/dashboard");
      else navigate("/user/dashboard");

    } catch (err) {
      alert(err.response?.data || "Invalid credentials!");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowProfile(false);
    navigate("/");
  };

  // Edit Profile
  const handleEditClick = () => {
    setEditData({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || ""
    });
    setIsEditing(true);
  };

  const handleEditChange = (e) =>
    setEditData({ ...editData, [e.target.name]: e.target.value });

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "http://localhost:8080/api/users/update",
        editData
      );

      const updated = response.data;
      localStorage.setItem("user", JSON.stringify(updated));
      setUser(updated);
      setIsEditing(false);
      alert("Profile updated!");
    } catch (err) {
      alert("Failed to update profile");
    }
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            IA
          </div>
          <div className="text-lg font-semibold">InsurAI</div>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#plans" className="hover:text-indigo-600 font-semibold">Plans</a>
          <a href="#how" className="hover:text-indigo-600 font-semibold">How it Works</a>
          <a href="#testimonials" className="hover:text-indigo-600 font-semibold">Testimonials</a>
          <a href="#contact" className="hover:text-indigo-600 font-semibold">Contact</a>
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3 relative">

          {/* IF USER LOGGED IN */}
          {user ? (
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowProfile(!showProfile)}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                  {user.name ? user.name[0].toUpperCase() : user.email[0].toUpperCase()}
                </div>
                <span className="text-sm font-semibold">{user.name || user.email}</span>
              </div>

              {/* PROFILE DROPDOWN */}
              {showProfile && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-72 z-20">

                  {/* DASHBOARD BUTTON */}
                  {!isEditing && user.role === "ADMIN" && (
                    <button
                      onClick={() => {
                        setShowProfile(false);
                        navigate("/admin/dashboard");
                      }}
                      className="w-full px-3 py-2 mb-3 bg-indigo-600 text-white rounded-md text-sm"
                    >
                      Admin Dashboard
                    </button>
                  )}

                  {!isEditing && user.role !== "ADMIN" && (
                    <button
                      onClick={() => {
                        setShowProfile(false);
                        navigate("/user/dashboard");
                      }}
                      className="w-full px-3 py-2 mb-3 bg-green-600 text-white rounded-md text-sm"
                    >
                      User Dashboard
                    </button>
                  )}

                  {/* VIEW PROFILE */}
                  {!isEditing ? (
                    <>
                      <h3 className="text-lg font-semibold text-center text-indigo-600 mb-3">
                        Profile
                      </h3>

                      <div className="text-sm text-gray-700 space-y-1">
                        <p><strong>Name:</strong> {user.name || "—"}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone || "—"}</p>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={handleEditClick}
                          className="w-1/2 bg-yellow-500 text-white py-2 rounded-md text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-1/2 bg-red-500 text-white py-2 rounded-md text-sm"
                        >
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    /* EDIT PROFILE FORM */
                    <form onSubmit={handleSaveChanges} className="flex flex-col gap-3">
                      <h3 className="text-lg font-semibold text-center text-indigo-600">Edit Profile</h3>

                      <input
                        name="name"
                        value={editData.name}
                        onChange={handleEditChange}
                        className="border rounded px-3 py-2 text-sm"
                      />

                      <input
                        name="email"
                        value={editData.email}
                        disabled
                        className="border rounded px-3 py-2 text-sm"
                      />

                      <input
                        name="phone"
                        value={editData.phone}
                        onChange={handleEditChange}
                        className="border rounded px-3 py-2 text-sm"
                      />

                      <div className="flex gap-2">
                        <button type="submit" className="w-1/2 bg-green-600 text-white py-2 rounded-md text-sm">
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="w-1/2 bg-gray-300 py-2 rounded-md text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}

                </div>
              )}
            </div>
          ) : (
            <>
              <button
                className="text-sm px-4 py-2 font-semibold"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Log in
              </button>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm"
                onClick={() => navigate("/book-appointment")}
              >
                Get a Quote
              </button>
            </>
          )}

          {/* LOGIN / SIGNUP DROPDOWN */}
          {!user && showDropdown && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-72 z-20">
              <h3 className="text-lg font-semibold mb-3 text-center">
                {isSignup ? "Sign Up" : "Log In"}
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {isSignup && (
                  <>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border rounded px-3 py-2 text-sm"
                      placeholder="Name"
                      required
                    />

                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border rounded px-3 py-2 text-sm"
                      placeholder="Phone"
                    />
                  </>
                )}

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 text-sm"
                  placeholder="Email"
                  required
                />

                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 text-sm"
                  placeholder="Password"
                  required
                />

                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-2 rounded-md text-sm"
                >
                  {isSignup ? "Sign Up" : "Log In"}
                </button>
              </form>

              <p className="text-xs text-center mt-3">
                {isSignup ? "Already have an account?" : "New user?"}{" "}
                <span
                  className="text-indigo-600 cursor-pointer font-semibold"
                  onClick={() => setIsSignup(!isSignup)}
                >
                  {isSignup ? "Log In" : "Sign Up"}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
