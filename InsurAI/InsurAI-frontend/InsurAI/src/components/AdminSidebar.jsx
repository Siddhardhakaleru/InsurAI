import { Link, NavLink} from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#111827",
        color: "white",
        height: "100vh",
        padding: "25px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>INSURAI ADMIN</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Link to="/admin/dashboard" style={{ color: "white" }}>Dashboard</Link>
        <Link to="/admin/plans" style={{ color: "white" }}>Plans</Link>
        <li>
  <NavLink to="/admin/appointments" className="block p-2 hover:bg-indigo-700 rounded">
    Appointments
  </NavLink>
</li>

      </nav>
    </div>
  );
}
