import { useState } from "react";

function Hero() {
  const [insuranceType, setInsuranceType] = useState("Health Insurance");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [showPlans, setShowPlans] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPlans(true); // show plans after clicking
  };

  const plans = [
    { name: "Basic Plan", price: "₹499/month", coverage: "₹2 Lakh coverage" },
    { name: "Smart Plan", price: "₹799/month", coverage: "₹5 Lakh coverage" },
    { name: "Premium Plan", price: "₹1,299/month", coverage: "₹10 Lakh coverage" },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white">
      <div className="container mx-auto px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Insurance made simple with <span className="text-indigo-600">AI-driven</span> recommendations
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            Compare plans, calculate premiums, and manage policies all in one place. Fast quotes — transparent coverage.
          </p>

          <div className="mt-6 flex gap-3">
            <button
  onClick={() => {
    document.getElementById("quote-box")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  }}
  className="bg-indigo-600 text-white px-5 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
>
  Get a Quote
</button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-gray-500">
            <div>Trusted by 20k+ customers</div>
            <div>Instant claims assistance</div>
            <div>24/7 support</div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end">
          <div id="quote-box" className="w-full md:w-4/5 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold">Quick Quote</h3>

            {!showPlans ? (
              <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
                <select
                  value={insuranceType}
                  onChange={(e) => setInsuranceType(e.target.value)}
                  className="border rounded-md px-3 py-2"
                >
                  <option>Health Insurance</option>
                  <option>Life Insurance</option>
                  <option>Car Insurance</option>
                  <option>Home Insurance</option>
                </select>
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="border rounded-md px-3 py-2"
                  placeholder="Your age"
                />
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border rounded-md px-3 py-2"
                  placeholder="City / Pincode"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Show Plans
                </button>
              </form>
            ) : (
              <div className="mt-4">
                <h4 className="font-medium mb-3 text-gray-700">
                  {insuranceType} options for you:
                </h4>
                <div className="space-y-3">
                  {plans.map((plan, idx) => (
                    <div key={idx} className="border rounded-md p-3 hover:shadow-md transition">
                      <h5 className="font-semibold">{plan.name}</h5>
                      <p className="text-sm text-gray-600">{plan.coverage}</p>
                      <p className="text-indigo-600 font-medium">{plan.price}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowPlans(false)}
                  className="mt-4 text-sm text-indigo-600 underline"
                >
                  Back to form
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
