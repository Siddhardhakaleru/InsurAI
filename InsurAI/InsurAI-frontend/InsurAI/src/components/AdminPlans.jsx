import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios.js";

export default function AdminPlans() {
  const [plans, setPlans] = useState([]);

  const loadPlans = () => {
    api
      .get("/admin/plans")
      .then((res) => setPlans(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadPlans();
  }, []);

  const deletePlan = (id) => {
    if (window.confirm("Are you sure you want to delete this plan?")) {
      api.delete(`/admin/plans/${id}`).then(() => loadPlans());
    }
  };

  return (
    <div className="p-6 w-full">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">Insurance Plans</h1>

        <Link to="/admin/plans/edit/new">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow text-sm">
            ➕ Create New Plan
          </button>
        </Link>
      </div>

      {/* Table Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-indigo-600 text-white text-left">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Plan Name</th>
              <th className="py-3 px-4">Premium</th>
              <th className="py-3 px-4">Coverage</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {plans.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500 text-sm"
                >
                  No plans found
                </td>
              </tr>
            ) : (
              plans.map((p) => (
                <tr
                  key={p.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{p.id}</td>
                  <td className="px-4 py-3">{p.planName}</td>
                  <td className="px-4 py-3">₹{p.premium}</td>
                  <td className="px-4 py-3">{p.coverageAmount}</td>
                  <td className="px-4 py-3">{p.type}</td>

                  <td className="px-4 py-3 text-center">
                    <Link to={`/admin/plans/edit/${p.id}`}>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm mr-2 shadow">
                        ✏ Edit
                      </button>
                    </Link>

                    <button
                      onClick={() => deletePlan(p.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm shadow"
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
