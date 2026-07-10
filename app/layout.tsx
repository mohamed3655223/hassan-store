import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";

const cairo = Cairo({
	subsets: ["arabic"],
	weight: ["300", "400", "500", "700", "900"],
	variable: "--font-cairo",
});

export const metadata: Metadata = {
	title: "Hassan Store",
	description: " Hassan Store For 3D Printing Products",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ar" dir="rtl" data-theme="emerald">
			<body className={`min-h-screen flex flex-col ${cairo.className}`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
