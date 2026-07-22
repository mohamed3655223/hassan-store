import Link from "next/link";

const categories = [
	{
		name: "Gym Keychains",
		href: "/ProductsPage?category=gym-keychains",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-8">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.75 9h16.5m-16.5 6h16.5M2.25 12h19.5M4.5 12a7.5 7.5 0 0 1 15 0H4.5Z"
				/>
			</svg>
		),
	},
	{
		name: "Butterfly Knife",
		href: "/ProductsPage?category=butterfly-knife",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-8">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
				/>
			</svg>
		),
	},
	{
		name: "Packages",
		href: "/ProductsPage?category=package",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-8">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
				/>
			</svg>
		),
	},
	{
		name: "حامل المفاتيح",
		href: "/ProductsPage?category=key-holders",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-8">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 5.25v13.5m-7.5-13.5v13.5M3 9h18M3 15h18"
				/>
			</svg>
		),
	},
	{
		name: "حامل مفاتيح مضيء",
		href: "/ProductsPage?category=glowing-key-holders",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-8 animate-pulse text-amber-400">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 18v-3m0 0a3 3 0 1 0-3-3h6a3 3 0 0 0-3 3Zm0-3h.008v.008H12V12Zm0 6h.008v.008H12V18Zm-.625 2.25h1.25M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z"
				/>
			</svg>
		),
	},
	{
		name: "سبنر (Spinner)",
		href: "/ProductsPage?category=spinner",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-8">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
				/>
			</svg>
		),
	},
	{
		name: "Keychain / ميداليات",
		href: "/ProductsPage?category=keychain",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-8">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H3.75v-2.25A2.25 2.25 0 0 1 6 17.25V15h2.25v-2.25h1.243c.404 0 .8-.162 1.082-.445l1.01-1.01A2.25 2.25 0 0 0 12 9.75V9"
				/>
			</svg>
		),
	},
	{
		name: "سبنر مضيء",
		href: "/ProductsPage?category=glowing-spinner",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-8 text-cyan-400">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9.813 15.904L9 21l8.982-8.997M14.187 8.096L15 3L6.018 11.997"
				/>
			</svg>
		),
	},
	{
		name: "Minions",
		href: "/ProductsPage?category=minions",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-8 text-yellow-500">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M12 18.75V21m-4.5-3.75V21m9-3.75V21M9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75ZM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z"
				/>
			</svg>
		),
	},
];

export default function Categories() {
	return (
		<section className="bg-[#070d0a] py-12 sm:py-16 mt-8">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-right mb-10 border-r-4 border-emerald-500 pr-4">
					<h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
						أقسام المنتجات
					</h2>
					<p className="mt-2 text-sm text-gray-400">
						استكشف تصاميم الـ 3D المتاحة.
					</p>
				</div>
				<div className="w-full mx-auto grid grid-cols-2 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
					{categories.map((category) => (
						<Link
							key={category.name}
							href={category.href}
							className="group relative w-full max-w-[320px] sm:max-w-none
                                flex flex-col items-center justify-center text-center
                                sm:flex-row sm:items-center sm:text-right sm:gap-5
                                overflow-hidden rounded-xl bg-gray-800/60 p-4 border
                                border-gray-800 hover:border-emerald-500/50 hover:bg-gray-800 
                                transition-all duration-300 shadow-md cursor-pointer">
							<div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-emerald-400 border border-gray-700/60 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:scale-110 transition-all duration-300">
								{category.icon}
							</div>
							<div className="flex-1 min-w-0 w-full">
								<h3 className="text-sm sm:text-lg font-black mt-1 text-gray-200 group-hover:text-white transition-colors truncate">
									{category.name}
								</h3>
								<p className="text-xs text-gray-500 font-bold mt-2 group-hover:text-emerald-400 transition-colors">
									تصفح المنتجات ←
								</p>
							</div>
							<div className="absolute -bottom-2 -left-2 size-12 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all duration-300" />
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
