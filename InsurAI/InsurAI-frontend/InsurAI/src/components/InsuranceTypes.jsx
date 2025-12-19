import { useNavigate } from "react-router-dom";

function InsuranceTypes() {
  const navigate = useNavigate();

  const types = [
    { title: "Health", desc: "Covers hospitalisation & medical expenses." },
    { title: "Life", desc: "Secure your family’s financial future." },
    { title: "Car", desc: "Comprehensive & third-party plans." },
    { title: "Home", desc: "Protect your property & valuables." },
  ];

  return (
    <section id="plans" className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold">Popular Insurance Types</h2>
      <p className="text-gray-600 mt-2">Choose a category to see curated plans</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {types.map((t) => (
          <div
            key={t.title}
            className="border rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="text-indigo-600 font-bold mb-2">{t.title}</div>
            <div className="text-gray-600 text-sm">{t.desc}</div>

            <div className="mt-4 flex flex-col gap-2">
              {/* View Plans Button */}
              <button
                onClick={() => navigate(`/plans/${t.title.toLowerCase()}`)}
                className="text-sm px-3 py-2 border rounded-md hover:bg-gray-100"
              >
                View Plans
              </button>

              {/* ⭐ Book Appointment Button */}
              <button
                onClick={() => navigate("/book-appointment")}
                className="text-sm px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InsuranceTypes;
