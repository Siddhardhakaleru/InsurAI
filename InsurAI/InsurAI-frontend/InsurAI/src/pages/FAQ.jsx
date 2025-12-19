export default function FAQ() {
  const faqs = [
    {
      q: "What is InsurAI?",
      a: "An AI-powered insurance platform to compare, manage, and book appointments.",
    },
    {
      q: "How does AI recommend plans?",
      a: "It analyzes your age, income, city, and preferences.",
    },
    {
      q: "Is my data secure?",
      a: "Yes, we follow strict encryption and security standards.",
    },
  ];

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">FAQ</h1>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <h3 className="font-semibold">{f.q}</h3>
            <p className="text-gray-600">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
