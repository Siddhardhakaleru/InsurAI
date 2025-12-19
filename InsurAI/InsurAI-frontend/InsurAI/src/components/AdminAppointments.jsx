import { useEffect, useState } from "react";
import api from "../api/axios.js";

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = () => {
    api.get("/appointments/all")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const updateStatus = (id, status) => {
    api
      .put(`/appointments/status/${id}?status=${status}`)
      .then(() => loadAppointments());
  };

  const deleteAppointment = (id) => {
    if (window.confirm("Delete this appointment?")) {
      api.delete(`/appointments/${id}`).then(() => loadAppointments());
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Appointments</h1>

      <table className="w-full border-collapse shadow-md">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="p-3 text-left">User Email</th>
            <th className="p-3 text-left">Agent</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Notes</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{a.userEmail}</td>
              <td className="p-3">{a.agentName}</td>
              <td className="p-3">{a.date}</td>
              <td className="p-3">{a.time}</td>

              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    a.status === "APPROVED"
                      ? "bg-green-100 text-green-600"
                      : a.status === "REJECTED"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {a.status}
                </span>
              </td>

              <td className="p-3 text-sm text-gray-700 max-w-xs">
                {a.notes || "—"}
              </td>

              <td className="p-3 space-x-2">
                <button
                  onClick={() => updateStatus(a.id, "APPROVED")}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Approve
                </button>

                <button
                  onClick={() => updateStatus(a.id, "REJECTED")}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Reject
                </button>

                <button
                  onClick={() => deleteAppointment(a.id)}
                  className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
