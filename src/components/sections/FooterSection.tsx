export default function FooterSection() {
	return (
		<footer className="bg-[#008080] text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Company Info */}
					<div className="space-y-4">
						<h2 className="text-lg font-semibold">Uzbekistan Medi</h2>
						<p className="text-sm leading-relaxed opacity-90">
							Uzbekistan Medi is your trusted guide to pursuing MBBS in
							Uzbekistan. We connect aspiring doctors with top universities,
							offering affordable education and globally recognized degrees.
							Start your medical journey with us today!
						</p>
					</div>

					{/* Services */}
					<div className="space-y-4">
						<h2 className="text-lg font-semibold">Services</h2>
						<nav className="flex flex-col space-y-2">
							<a
								href="/"
								className="text-sm opacity-90 hover:opacity-100 transition-opacity"
							>
								Home
							</a>
							<a
								href="/universities"
								className="text-sm opacity-90 hover:opacity-100 transition-opacity"
							>
								Universities
							</a>
							<a
								href="/mbbs-in-uzbekistan"
								className="text-sm opacity-90 hover:opacity-100 transition-opacity"
							>
								MBBS in Uzbekistan
							</a>
						</nav>
					</div>

					{/* Company */}
					<div className="space-y-4">
						<h2 className="text-lg font-semibold">Company</h2>
						<nav className="flex flex-col space-y-2">
							<a
								href="/about-us"
								className="text-sm opacity-90 hover:opacity-100 transition-opacity"
							>
								About Us
							</a>
							<a
								href="/blogs"
								className="text-sm opacity-90 hover:opacity-100 transition-opacity"
							>
								Blogs
							</a>
							<a
								href="/gallery"
								className="text-sm opacity-90 hover:opacity-100 transition-opacity"
							>
								Gallery
							</a>
						</nav>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<h2 className="text-lg font-semibold">Contact us</h2>
						<div className="space-y-2 text-sm">
							<p className="flex items-center opacity-90">
								<span className="mr-2">📞</span>
								343455645
							</p>
							<p className="flex items-center opacity-90">
								<span className="mr-2">✉️</span>
								mangcoding123@gmail.com
							</p>
							<p className="flex items-center opacity-90">
								<span className="mr-2">📍</span>
								2972 Westheimer Rd. Santa Ana, Illinois 85486
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="border-t border-white/10">
				<div className="container mx-auto px-4 py-4">
					<p className="text-center text-sm opacity-90">
						Uzbekistan Medi © 2025 All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
