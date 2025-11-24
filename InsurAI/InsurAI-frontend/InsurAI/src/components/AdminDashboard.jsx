export default function AdminDashboard() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-indigo-700 mb-6">
        Admin Dashboard
      </h1>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Total Users */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-indigo-600">
          <h2 className="text-gray-500 text-sm font-medium">Total Users</h2>
          <p className="text-3xl font-bold mt-2">128</p>
        </div>

        {/* Total Plans */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-600">
          <h2 className="text-gray-500 text-sm font-medium">Total Plans</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        {/* Total Appointments */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-yellow-500">
          <h2 className="text-gray-500 text-sm font-medium">Pending Claims</h2>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>

      </div>

      {/* RECENT ACTIVITY SECTION */}
      <div className="mt-10 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-700 text-sm">
          <li>• New plan added: <b>Health Shield</b></li>
          <li>• Admin approved a claim request</li>
          <li>• 2 new users registered today</li>
          <li>• Premium updated for <b>Life Secure Plan</b></li>
        </ul>
      </div>
    </div>
  );
}
