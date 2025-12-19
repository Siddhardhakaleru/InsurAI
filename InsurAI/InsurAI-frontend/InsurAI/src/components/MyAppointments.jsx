import { useEffect, useState } from "react";
import axios from "axios";

export default function MyAppointments() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/appointments/user/${user.email}`)
      .then((res) => setAppointments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">
        My Appointments
      </h1>

      {appointments.length === 0 ? (
        <p className="text-gray-700">No appointments booked yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appointments.map((a) => (
            <div
              key={a.id}
              className="border rounded-lg shadow p-5 bg-white hover:shadow-lg transition"
            >
              <h2 className="font-semibold text-lg text-indigo-600">
                Appointment with {a.agentName}
              </h2>
              <p className="text-gray-700 mt-2">
                <strong>Date:</strong> {a.date}
              </p>
              <p className="text-gray-700">
                <strong>Time:</strong> {a.time}
              </p>
              <p className="text-gray-700">
                <strong>Status:</strong>{" "}
                <span
                  className={
                    a.status === "APPROVED"
                      ? "text-green-600"
                      : a.status === "REJECTED"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }
                >
                  {a.status}
                </span>
              </p>
              {a.notes && (
                <p className="text-gray-600 mt-1">
                  <strong>Notes:</strong> {a.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
