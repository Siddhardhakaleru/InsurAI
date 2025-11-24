function Features() {
const features = [
'Instant quotes',
'AI-backed plan matching',
'Easy claims process',
'Secure payments',
];
return (
<section id="how" className="bg-indigo-50 py-12">
<div className="container mx-auto px-6">
<h2 className="text-2xl font-semibold">Why choose InsurAI?</h2>
<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
{features.map((f) => (
<div key={f} className="bg-white border rounded-lg p-5 text-center">
<div className="font-semibold">{f}</div>
<div className="text-sm text-gray-600 mt-2">Brief explanation about {f.toLowerCase()}.</div>
</div>
))}
</div>
</div>
</section>
);
}
export default Features;