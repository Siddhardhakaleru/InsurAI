export default function HelpCenter() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">Help Center</h1>

      <p className="text-gray-700 mb-6">
        Find answers to commonly asked questions and learn how to use InsurAI.
      </p>

      <ul className="space-y-4">
        <li className="p-4 border rounded-md">
          <h3 className="font-semibold">How do I compare plans?</h3>
          <p className="text-gray-600">Go to the Plans page and select a category.</p>
        </li>

        <li className="p-4 border rounded-md">
          <h3 className="font-semibold">How do I book an appointment?</h3>
          <p className="text-gray-600">Click “Book Appointment” anywhere on the site.</p>
        </li>
      </ul>
    </div>
  );
}
