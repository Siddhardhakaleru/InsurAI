import { useNavigate } from "react-router-dom";

export default function AdminHeader({ admin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">

      {/* Left Side */}
      <button
        onClick={() => navigate("/")}
        className="text-sm text-indigo-600 font-semibold hover:underline"
      >
        ← Back to Home
      </button>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
          {admin?.name?.[0]?.toUpperCase() || "A"}
        </div>

        <span className="font-semibold text-gray-700">
          {admin?.name || admin?.email}
        </span>

        <button
          onClick={handleLogout}
          className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
        >
          Logout
        </button>
      </div>

    </div>
  );
}
