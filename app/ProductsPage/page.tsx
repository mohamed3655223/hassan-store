"use client";
import products from "../products.json";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
export default function ProductsPage() {
	const [productName, setProductName] = useState("");
	const filteredProducts =
		productName.trim() === ""
			? products
			: products.filter((product) =>
					product.title.includes(productName),
				);
	return (
		<div className="p-6 bg-[#070d0a]">
			{/* Search Bar */}
			<div className="flex justify-center mt-16">
				<input
					value={productName}
					onChange={(e) => setProductName(e.target.value)}
					type="text"
					placeholder="ما المنتج الذى تريده"
					className="flex-1 sm:max-w-2xl px-4 py-4 rounded-lg focus:ring-emerald-600
						focus:outline-none focus:ring-3  bg-lime-50 text-lg"
				/>
			</div>
			{/* ==Search Bar== */}
			{/* The Products */}
			<div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-8 mt-9">
				{filteredProducts.map((product) => {
					return (
						<ProductCard
							key={product.id}
							product={product}
						/>
					);
				})}
			</div>
			{/* == The Products == */}
		</div>
	);
}
