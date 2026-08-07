"use client";
import products from "../products.json";
import ProductCard from "../components/ProductCard";
export default function Discounts() {
	const discountProducts = products.filter((product) => product.old_price);
	return (
		<div className="p-6 mt-10 bg-[#070d0a]">
			<div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-8 mt-9">
				{discountProducts.map((product) => {
					return (
						<ProductCard
							key={product.id}
							product={product}
							showOldPrice
						/>
					);
				})}
			</div>
		</div>
	);
}
