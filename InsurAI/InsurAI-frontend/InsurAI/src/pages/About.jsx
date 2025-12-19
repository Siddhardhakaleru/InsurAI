export default function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">About InsurAI</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        InsurAI is a next-generation insurance platform powered by Artificial
        Intelligence. We simplify insurance by helping users compare plans,
        get instant quotes, book appointments, and manage their policies
        — all in one place.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p className="text-gray-700">
        To make insurance transparent, accessible, and tailored using AI-driven personalization.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Us</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>AI-powered plan recommendations</li>
        <li>Instant premium calculation</li>
        <li>Book insurance advisor appointments</li>
        <li>Secure & fast digital onboarding</li>
      </ul>
    </div>
  );
}
