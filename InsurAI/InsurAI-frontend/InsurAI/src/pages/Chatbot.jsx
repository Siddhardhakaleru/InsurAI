import React, { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm InsurAI Assistant. How can I help you today? 😊" }
  ]);
  const [input, setInput] = useState("");

  // Dummy local FAQ responses
  const FAQ = {
    "plan": "We offer Health, Life, Car, and Home insurance plans.",
    "health": "Health insurance starts from ₹499/month with ₹2–10 lakh coverage.",
    "life": "Life insurance helps protect your family's financial future.",
    "appointment": "You can book an appointment from the 'Book Appointment' page.",
    "contact": "Visit the Contact page at the bottom of the site.",
    "premium": "Premium varies based on age, city, and insurance type.",
    "hello": "Hi there! How can I help you today? 😊"
  };

  // Chatbot reply finder
  const getBotReply = (text) => {
    text = text.toLowerCase();

    for (let key in FAQ) {
      if (text.includes(key)) return FAQ[key];
    }

    return "Sorry, I didn’t understand. Try asking about plans, premiums, or appointments!";
  };

  // Send message locally
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getBotReply(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating Chatbot Button (Minimal Version) */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-indigo-600 text-white 
                   w-12 h-12 rounded-full shadow-md flex items-center 
                   justify-center text-2xl hover:bg-indigo-700 transition z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white shadow-xl rounded-xl border p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-indigo-600">InsurAI Chatbot</h2>
            <button className="text-red-500 font-bold" onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-2 border rounded-md bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 my-1 rounded-md text-sm ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white ml-auto max-w-[80%]"
                    : "bg-gray-200 text-gray-800 mr-auto max-w-[80%]"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex mt-3">
            <input
              className="border px-2 py-1 flex-1 rounded-l-md"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button
              className="bg-indigo-600 text-white px-3 rounded-r-md"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
