import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserDashboard() {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const loadAppointments = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/appointments/user/${user.email}`
      );
      setAppointments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">User Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back, {user.name || user.email} 👋
        </p>
      </div>

      {/* Appointments Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          My Appointments
        </h2>

        {appointments.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p>No appointments booked yet.</p>
            <p className="text-sm mt-1">Book one to get started!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mt-2">
              <thead>
                <tr className="bg-indigo-50 text-indigo-700">
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((a) => (
                  <tr
                    key={a.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{a.id}</td>
                    <td className="p-3">{a.date}</td>
                    <td className="p-3">{a.time}</td>
                    <td className="p-3">{a.insuranceType}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
                          ${
                            a.status === "PENDING"
                              ? "bg-yellow-100 text-yellow-700"
                              : a.status === "APPROVED"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
