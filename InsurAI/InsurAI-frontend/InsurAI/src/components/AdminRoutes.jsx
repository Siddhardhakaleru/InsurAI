import { Routes, Route } from "react-router-dom";
import AdminSidebar from "./AdminSidebar.jsx";
import AdminPlans from "./AdminPlans.jsx";
import EditPlan from "./EditPlan.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
import AdminHeader from "./AdminHeader.jsx";
import AdminAppointments from "./AdminAppointments.jsx";


export default function AdminRoutes() {
  const admin = JSON.parse(localStorage.getItem("user")); // Get logged-in admin

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* ⭐ Add Admin Header */}
        <AdminHeader admin={admin} />

        {/* Pages */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="plans" element={<AdminPlans />} />
            <Route path="plans/edit/:id" element={<EditPlan />} />
            <Route path="appointments" element={<AdminAppointments />} />
          </Routes>
        </div>

      </div>

    </div>
  );
}

