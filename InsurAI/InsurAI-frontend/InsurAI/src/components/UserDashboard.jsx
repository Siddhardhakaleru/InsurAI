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

  const cancelAppointment = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this appointment?")) return;

    try {
      await axios.put(`http://localhost:8080/api/appointments/cancel/${id}`);
      alert("Appointment cancelled");
      loadAppointments();
    } catch (err) {
      console.error(err);
      alert("Failed to cancel appointment");
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>

      <h2 className="text-xl font-semibold mb-3">My Appointments</h2>

      {appointments.length === 0 ? (
        <p className="text-gray-600">You have no appointments.</p>
      ) : (
        <table className="w-full border mt-3">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Date</th>
              <th className="p-2">Time</th>
              <th className="p-2">Type</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-b">
                <td className="p-2">{a.id}</td>
                <td className="p-2">{a.date}</td>
                <td className="p-2">{a.time}</td>
                <td className="p-2">{a.insuranceType}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      a.status === "CANCELLED"
                        ? "bg-red-200 text-red-700"
                        : a.status === "APPROVED"
                        ? "bg-green-200 text-green-700"
                        : "bg-yellow-200 text-yellow-700"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>

                <td className="p-2">
                  {/* Disable cancel if already cancelled */}
                  {a.status !== "CANCELLED" && a.status !== "APPROVED" ? (
                    <button
                      onClick={() => cancelAppointment(a.id)}
                      className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  ) : (
                    <span className="text-gray-400 text-sm">No Action</span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
