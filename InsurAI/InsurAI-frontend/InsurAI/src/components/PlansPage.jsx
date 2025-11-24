import { useParams, useNavigate } from "react-router-dom";

export default function PlansPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const formattedType = type.charAt(0).toUpperCase() + type.slice(1);

  // Sample dynamic plans by category
  const allPlans = {
    health: [
      { name: "Health Shield", coverage: "₹5 Lakh", premium: "₹599/month", features: ["Cashless hospitals", "No medical test till 45"] },
      { name: "Family Health Plus", coverage: "₹10 Lakh", premium: "₹899/month", features: ["Family coverage", "Free annual check-up"] }
    ],
    life: [
      { name: "Life Secure Plan", coverage: "₹50 Lakh", premium: "₹499/month", features: ["20-year term", "Tax benefits"] },
      { name: "Premium Life Shield", coverage: "₹1 Crore", premium: "₹799/month", features: ["Accidental cover", "Flexible payout"] }
    ],
    car: [
      { name: "Motor Protect", coverage: "Damage + 3rd party", premium: "₹699/month", features: ["Cashless repair", "24/7 roadside help"] },
      { name: "Motor Elite", coverage: "Own damage + theft", premium: "₹999/month", features: ["Zero dep cover", "Fast claims"] }
    ],
    home: [
      { name: "Home Shield", coverage: "₹20 Lakh", premium: "₹299/month", features: ["Fire insurance", "Natural disaster cover"] },
      { name: "Home Premium", coverage: "₹50 Lakh", premium: "₹499/month", features: ["Burglary cover", "Appliance protection"] }
    ],
  };

  const plans = allPlans[type] || [];

  return (
    <div className="container mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-4 text-indigo-700">
        {formattedType} Insurance Plans
      </h1>

      <p className="text-gray-600 mb-8">
        Best hand-picked {formattedType.toLowerCase()} insurance plans for you.
      </p>

      {/* Plans Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {plans.map((plan, i) => (
          <div key={i} className="border rounded-xl p-6 shadow hover:shadow-lg transition">
            
            <h3 className="text-xl font-semibold text-indigo-700">{plan.name}</h3>
            <p className="text-gray-700 mt-1">{plan.coverage} Coverage</p>
            <p className="text-indigo-600 text-lg font-bold mt-2">{plan.premium}</p>

            <ul className="mt-4 text-sm text-gray-600 space-y-1">
              {plan.features.map((f, index) => (
                <li key={index}>• {f}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mt-5 flex flex-col gap-2">
              <button
                className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
                onClick={() => navigate("/book-appointment")}
              >
                Book Appointment
              </button>

              <button
                className="border py-2 rounded-md hover:bg-gray-100"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* Back Button */}
      <button
        className="mt-8 text-indigo-600 underline"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

    </div>
  );
}
