export default function Contact() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        We’re here to help. Reach out with your questions!
      </p>

      <form className="space-y-4 bg-white p-6 shadow rounded-lg">
        <input type="text" placeholder="Your Name"
          className="border w-full px-3 py-2 rounded-md" />

        <input type="email" placeholder="Your Email"
          className="border w-full px-3 py-2 rounded-md" />

        <textarea placeholder="Your Message"
          className="border w-full px-3 py-2 rounded-md h-32"></textarea>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
