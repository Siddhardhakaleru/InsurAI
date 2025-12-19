import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPlans: 0,
    totalAppointments: 0,
  });
  const [recentAppointments, setRecentAppointments] = useState([]);
  const [recentPlans, setRecentPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load all dashboard data
  const loadData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Stats endpoint (recommended: /api/admin/stats returns { totalUsers, totalPlans, totalAppointments })
      const statsReq = axios.get("http://localhost:8080/api/admin/stats");

      // Recent appointments
      const apptReq = axios.get("http://localhost:8080/api/appointments/all");

      // Recent plans
      const plansReq = axios.get("http://localhost:8080/api/admin/plans");

      const [statsRes, apptRes, plansRes] = await Promise.allSettled([
        statsReq,
        apptReq,
        plansReq,
      ]);

      if (statsRes.status === "fulfilled") {
        const data = statsRes.value.data;
        // handle both { totalUsers:.. } and simple primitive responses
        setStats({
          totalUsers: data.totalUsers ?? data.users ?? data.count ?? 0,
          totalPlans: data.totalPlans ?? data.plans ?? data.count ?? 0,
          totalAppointments: data.totalAppointments ?? data.appointments ?? data.count ?? 0,
        });
      } else {
        console.warn("Failed to load stats:", statsRes.reason);
        // don't setError yet — try to still show other data
      }

      if (apptRes.status === "fulfilled") {
        // expecting an array of appointment objects
        setRecentAppointments(Array.isArray(apptRes.value.data) ? apptRes.value.data : []);
      } else {
        console.warn("Failed to load appointments:", apptRes.reason);
      }

      if (plansRes.status === "fulfilled") {
        setRecentPlans(Array.isArray(plansRes.value.data) ? plansRes.value.data : []);
      } else {
        console.warn("Failed to load plans:", plansRes.reason);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard data. See console for details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Helper to build a combined recent activity list
  const buildRecentActivity = () => {
    const activities = [];

    // from plans: new plan added
    recentPlans.slice(0, 5).forEach((p) => {
      activities.push({
        type: "plan",
        text: `New plan added: ${p.planName ?? p.name ?? "Untitled Plan"}`,
        when: p.createdAt ?? p.createdDate ?? p.id ?? "",
      });
    });

    // from appointments: actions like booked / status
    recentAppointments.slice(0, 8).forEach((a) => {
      const user = a.userEmail ?? a.user?.email ?? "Unknown user";
      activities.push({
        type: "appointment",
        text: `Appointment booked by ${user} — ${a.insuranceType ?? "General"}`,
        when: a.date ?? a.createdAt ?? a.id ?? "",
        meta: a.status ? `Status: ${a.status}` : null,
      });
    });

    // sort by 'when' if possible (best-effort)
    const withTimestamps = activities.map((act) => {
      // try to convert when to timestamp, otherwise 0
      const t = Date.parse(act.when) || 0;
      return { ...act, ts: t };
    });

    withTimestamps.sort((a, b) => b.ts - a.ts);

    // return top 8
    return withTimestamps.slice(0, 8);
  };

  const recent = buildRecentActivity();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={loadData}
            className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
            aria-label="Refresh dashboard"
          >
            Refresh
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-10 text-center text-gray-600">Loading dashboard...</div>
      ) : error ? (
        <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-700 rounded">
          {error}
        </div>
      ) : (
        <>
          {/* STAT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-indigo-600">
              <h2 className="text-gray-500 text-sm font-medium">Total Users</h2>
              <p className="text-3xl font-bold mt-2">{stats.totalUsers}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-600">
              <h2 className="text-gray-500 text-sm font-medium">Total Plans</h2>
              <p className="text-3xl font-bold mt-2">{stats.totalPlans}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-yellow-500">
              <h2 className="text-gray-500 text-sm font-medium">Total Appointments</h2>
              <p className="text-3xl font-bold mt-2">{stats.totalAppointments}</p>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="mt-10 bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-indigo-700">Recent Activity</h2>
              <p className="text-sm text-gray-500">
                Showing latest {recent.length} events
              </p>
            </div>

            {recent.length === 0 ? (
              <p className="text-gray-600">No recent activity available.</p>
            ) : (
              <ul className="space-y-3 text-gray-700 text-sm">
                {recent.map((act, idx) => (
                  <li key={idx} className="flex justify-between items-start">
                    <div>
                      <span className="inline-block w-3 h-3 mr-3 rounded-full"
                        style={{
                          background:
                            act.type === "plan" ? "#10b981" : act.type === "appointment" ? "#f59e0b" : "#93c5fd",
                        }}
                      />
                      <span dangerouslySetInnerHTML={{ __html: act.text }} />
                      {act.meta && (
                        <div className="text-xs text-gray-500 mt-1">{act.meta}</div>
                      )}
                    </div>

                    <div className="text-xs text-gray-400">
                      {act.when ? new Date(act.when).toLocaleString() : ""}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* OPTIONAL: quick lists (Recent Plans + Appointments preview) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Recent Plans</h3>
              {recentPlans.length === 0 ? (
                <p className="text-gray-600">No plans yet.</p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {recentPlans.slice(0, 6).map((p) => (
                    <li key={p.id} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{p.planName ?? p.name ?? "Untitled Plan"}</div>
                        <div className="text-xs text-gray-500">{p.type ?? p.category ?? ""}</div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {p.createdAt ? new Date(p.createdAt).toLocaleDateString() : ""}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Recent Appointments</h3>
              {recentAppointments.length === 0 ? (
                <p className="text-gray-600">No appointments yet.</p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {recentAppointments.slice(0, 6).map((a) => (
                    <li key={a.id} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{a.userEmail ?? a.user?.email ?? "Unknown"}</div>
                        <div className="text-xs text-gray-500">{a.insuranceType ?? "General"}</div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {a.date ? new Date(a.date).toLocaleDateString() : ""}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
