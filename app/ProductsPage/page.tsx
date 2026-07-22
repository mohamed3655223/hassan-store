"use client"
import products from "../products.json"
import Link from "next/link"
import { useState } from "react";
interface productType {
	id: number;
	title: string;
	price: number;
	image: string;
}
export default function ProductsPage() {
	const [productName , setProductName] = useState("")
	const filteredProducts =
		productName.trim() === ""
			? products
			: products.filter((product: productType) =>
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
				{filteredProducts.map((product: productType) => {
					return (
						<div
							key={product.id}
							className="text-xl bg-emerald-50 text-gray-600 rounded-lg
							border-3 border-emerald-100 hover:border-emerald-500 transition-colors
							duration-200">
							<Link href={`/ProductDetailPage/${product.id}`}>
								<img
									src={product.image}
									alt="product-image"
									className="w-auto sm:w-full lg:w-full"
								/>
								<div className="p-2 sm:p-4">
									<h2 className="overflow-hidden truncate font-bold">{product.title}</h2>
									<h3 className="mt-2">{`السعر : ${product.price} جنيه`}</h3>
								</div>
							</Link>
							<div className="flex justify-center mb-1">
								<button className="bg-gray-600 text-amber-50 p-2 sm:p-3 cursor-pointer
								rounded-lg hover:bg-emerald-500">
									اضف الى سلة المشتريات
								</button>
							</div>
						</div>
					);
				})}
			</div>
			{/* == The Products == */}
		</div>
	);
}


