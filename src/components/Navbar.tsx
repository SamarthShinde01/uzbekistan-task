"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	const navItems = [
		{ href: "#", label: "Home", isActive: true },
		{ href: "#", label: "About" },
		{ href: "#", label: "MBBS in Uzbekistan" },
		{ href: "#", label: "Universities" },
		{ href: "#", label: "Blogs" },
		{ href: "#", label: "Gallery" },
		{ href: "#", label: "Contact Us" },
	];

	return (
		<nav className="bg-[#081D18] text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<h2 className="text-xl font-bold">Uzbekistan Medi</h2>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{navItems.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									className={`px-3 py-2 rounded-md text-sm font-medium ${
										item.isActive
											? "text-[#16A8AF]"
											: "hover:bg-[#16A8AF] hover:text-white"
									}`}
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#16A8AF] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<X className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navItems.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className={`block px-3 py-2 rounded-md text-base font-medium ${
									item.isActive
										? "text-[#16A8AF]"
										: "hover:bg-[#16A8AF] hover:text-white"
								}`}
								onClick={toggleMenu}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
