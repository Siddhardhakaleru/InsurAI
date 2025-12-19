export default function Blog() {
  const posts = [
    {
      title: "AI in Insurance: The Future is Here",
      date: "January 5, 2025",
      summary:
        "Learn how AI is transforming insurance with faster claims, predictions & smart suggestions.",
    },
    {
      title: "Top 5 Health Plans You Should Know",
      date: "December 20, 2024",
      summary:
        "We analyzed 50+ plans using AI. Here are the top recommendations.",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Blog</h1>

      <div className="space-y-6">
        {posts.map((p, i) => (
          <div key={i} className="p-6 border rounded-lg hover:shadow-md transition">
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-500">{p.date}</p>
            <p className="text-gray-700 mt-2">{p.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
