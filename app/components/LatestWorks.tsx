"use client";
import { useEffect, useState } from "react";
import productsData from "../products.json";
import Link from "next/link";

export default function LatestWorks() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const latestWorksImgs = productsData.slice(0, 5);

	useEffect(() => {
		if (latestWorksImgs.length <= 1) return;

		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => {
				if (prevIndex === latestWorksImgs.length - 1) {
					return 0;
				} else {
					return prevIndex + 1;
				}
			});
		}, 3000);
		return () => clearInterval(timer);
	}, [latestWorksImgs.length]);

	return (
		<section className="bg-[#070d0a] py-12 sm:py-16 overflow-hidden">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-right mb-10 border-r-4 border-emerald-500 pr-4">
					<h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
						آخر أعمالنا وتنفيذنا
					</h2>
					<p className="mt-2 text-sm text-gray-400">
						أحدث المنتجات المتاحة في المتجر.
					</p>
				</div>
				<div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 p-2 shadow-2xl">
					<div
						className="flex transition-transform duration-700 ease-in-out"
						style={{ transform: `translateX(${currentIndex * 100}%)` }}>
						{latestWorksImgs.map((product: any) => (
							<div
								key={product.id}
								className="w-full shrink-0 relative aspect-5/3 sm:aspect-6/4">
								<Link href={`/ProductDetailPage/${product.id}`}>
									<img
										src={product.image}
										alt={product.name}
										className="w-full h-full object-cover rounded-xl"
									/>
									<div className="absolute inset-0 bg-gradient-t from-black/80 via-black/20 to-transparent flex items-end justify-right p-6 sm:p-10 text-right">
										<div>
											<span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-full font-bold border border-emerald-500/30 mb-2">
												منتج متميز
											</span>
											<h3 className="text-lg sm:text-2xl font-black text-white">
												{product.title}
											</h3>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>

					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
						{latestWorksImgs.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
									currentIndex === index
										? "w-6 bg-emerald-500"
										: "w-2 bg-gray-600"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
