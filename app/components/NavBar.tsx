"use client";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import logo from "../Assets/1764454192.webp";
import { usePathname } from "next/navigation";
const navigation = [
	{ name: "الرئيسية", href: "/" },
	{ name: "جميع منتجاتنا", href: "/ProductsPage" },
	{ name: "خصومات", href: "/Discounts" },
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
	return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
	const pathName = usePathname();
	return (
		<Disclosure
			as="nav"
			className="bg-gray-800 fixed top-0 left-0 right-0 z-50">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className=" flex h-18 justify-between items-center ">
					{/* Tabs Button in Mobile Burger Icon */}
					<div className="flex items-center sm:hidden">
						<DisclosureButton className=" cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
							<svg
								className="block size-7"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</DisclosureButton>
					</div>
					<Link href="/" className="flex items-center">
						<img alt="img" src={logo.src} className="h-10 w-10" />
					</Link>
					{/* Parent For Tabs (DeskTop)*/}
					<div className="hidden sm:flex flex-1 items-center justify-center">
						<div className="flex justify-center items-center gap-6">
							{navigation.map((item) => {
								const isCurrent = pathName === item.href;

								return (
									<Link
										key={item.name}
										href={item.href}
										aria-current={isCurrent ? "page" : undefined}
										className={classNames(
											isCurrent
												? "bg-gray-900 text-white"
												: "text-gray-300 hover:bg-white/5 hover:text-white",
											"rounded-md px-3 py-2 text-sm font-extrabold",
										)}>
										{item.name}
									</Link>
								);
							})}
						</div>
					</div>
					{/* Cart Shop Button */}
					<div className="flex items-center">
						<Link
							href="/Cart"
							className=" cursor-pointer relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-9">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
								/>
							</svg>
							<span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-emerald-500" />
						</Link>
					</div>
				</div>
			</div>
			{/* Mobile Tabs Menue */}
			<DisclosurePanel className="sm:hidden bg-gray-700 border-b border-gray-600 absolute left-0 right-0 z-50 shadow-xl">
				<div className="space-y-1 px-4 pt-2 pb-4 flex flex-col items-center">
					{navigation.map((item) => {
						const isCurrent = pathName === item.href;
						return (
							<Link
								key={item.name}
								href={item.href}
								aria-current={isCurrent ? "page" : undefined}
								className={classNames(
									isCurrent
										? "bg-gray-900 text-white"
										: "text-gray-300 hover:bg-white/5 hover:text-white",
									"rounded-md px-3 py-2 text-sm font-extrabold",
								)}>
								{item.name}
							</Link>
						);
					})}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
}
