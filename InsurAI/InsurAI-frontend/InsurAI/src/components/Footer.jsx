function Footer() {
return (
<footer id="contact" className="bg-gray-100 mt-12">
<div className="container mx-auto px-6 py-8 grid gap-6 md:grid-cols-3">
<div>
<div className="font-bold">InsurAI</div>
<div className="text-sm text-gray-600 mt-2">AI-powered insurance comparison & management</div>
</div>
<div>
<div className="font-semibold">Company</div>
<ul className="mt-2 text-sm text-gray-600">
<li>About</li>
<li>Careers</li>
<li>Blog</li>
</ul>
</div>
<div>
<div className="font-semibold">Support</div>
<ul className="mt-2 text-sm text-gray-600">
<li>Help Center</li>
<li>Contact</li>
<li>Privacy</li>
</ul>
</div>
</div>
<div className="border-t py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} InsurAI — All rights reserved.</div>
</footer>
);
}
export default Footer;