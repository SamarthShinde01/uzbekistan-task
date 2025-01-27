import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
	title: "Uzbekistan Medi",
	description: "Pursue MBBS in Uzbekistan Top Universities",
	openGraph: {
		title: "Uzbekistan Medi",
		description: "Pursue MBBS in Uzbekistan Top Universities",
		type: "website",
		url: "https://your-website-url.com", // Replace with your actual website URL
	},
	twitter: {
		card: "summary_large_image", //for Twitter cards
		site: "@twitter-handle", //Twitter handle
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" />
			</head>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
