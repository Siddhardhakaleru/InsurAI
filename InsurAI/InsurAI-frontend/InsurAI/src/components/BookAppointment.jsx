import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BookAppointment() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [agentName, setAgentName] = useState("Agent Rahul");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [confirmed, setConfirmed] = useState(null); // store confirmed appt data

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      userEmail: user.email,
      agentName,
      date,
      time,
      notes,
    };

    await axios.post("http://localhost:8080/api/appointments/book", data);

    setConfirmed(data); // show confirmation screen instead of alert

    // Clear form
    setDate("");
    setTime("");
    setNotes("");
  };

  // ⭐ If booking is done → show real confirmation card
  if (confirmed) {
    return (
      <div className="flex justify-center mt-20 px-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">

          {/* Animated Success Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white text-3xl">✓</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-green-600">Appointment Confirmed!</h2>

          <p className="text-gray-600 mt-2">
            Your meeting with <span className="font-semibold">{confirmed.agentName}</span>  
            has been scheduled.
          </p>

          {/* Appointment Details */}
          <div className="mt-6 text-left bg-gray-50 p-4 rounded-md">
            <p><strong>Date:</strong> {confirmed.date}</p>
            <p><strong>Time:</strong> {confirmed.time}</p>
            <p><strong>Agent:</strong> {confirmed.agentName}</p>
            {confirmed.notes && <p><strong>Notes:</strong> {confirmed.notes}</p>}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => navigate("/")}
              className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
            >
              Go to Home
            </button>

            <button
              onClick={() => navigate("/appointments")}
              className="border py-3 rounded-md hover:bg-gray-100"
            >
              View My Appointments
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ⭐ Regular form screen
  return (
    <div className="max-w-lg mx-auto mt-20 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Book Appointment</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          className="w-full border p-3 rounded"
          value={agentName}
          onChange={(e) => setAgentName(e.target.value)}
        >
          <option>Agent Rahul</option>
          <option>Agent Priya</option>
          <option>Agent Sameer</option>
        </select>

        <input
          type="date"
          className="w-full border p-3 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          type="time"
          className="w-full border p-3 rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <textarea
          placeholder="Notes (optional)"
          className="w-full border p-3 rounded"
          rows="3"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}
