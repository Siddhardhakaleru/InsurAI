export default function Careers() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">Careers at InsurAI</h1>
      <p className="text-gray-700 mb-6">
        Join our mission to revolutionize the insurance industry using AI and modern technology.
      </p>

      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Current Openings</h2>

        <ul className="mt-4 space-y-4">
          <li className="border p-4 rounded-md">
            <h3 className="font-bold">Frontend Developer</h3>
            <p className="text-gray-700 text-sm mt-1">React, Tailwind, UI/UX</p>
          </li>

          <li className="border p-4 rounded-md">
            <h3 className="font-bold">Backend Engineer</h3>
            <p className="text-gray-700 text-sm mt-1">Spring Boot, APIs</p>
          </li>

          <li className="border p-4 rounded-md">
            <h3 className="font-bold">AI Engineer</h3>
            <p className="text-gray-700 text-sm mt-1">
              NLP, ML models, chatbots
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
