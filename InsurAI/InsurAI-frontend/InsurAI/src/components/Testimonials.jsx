function Testimonials() {
const items = [
{ name: 'Anita', text: 'Great service — claim settled quickly.' },
{ name: 'Ravi', text: 'Found a cheaper plan easily.' },
{ name: 'Meera', text: 'Support team was very helpful.' },
];
return (
<section id="testimonials" className="container mx-auto px-6 py-12">
<h2 className="text-2xl font-semibold">What customers say</h2>
<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{items.map((it) => (
<div key={it.name} className="border rounded-lg p-5">
<div className="font-medium">{it.name}</div>
<p className="text-sm text-gray-600 mt-2">"{it.text}"</p>
</div>
))}
</div>
</section>
);
}
export default Testimonials;