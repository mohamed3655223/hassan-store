"use client";
import Allproducts from "../products.json";
import { useSearchParams } from "next/navigation";
import ProductCard from "../components/ProductCard";

export default function CategoryProducts() {
	const searchParams = useSearchParams();
	const selectedCategory = searchParams.get("category");
	if (!selectedCategory) {
		return (<div>No category selected.</div>);
	}

	const normalizedCategory = selectedCategory.trim().toLowerCase();

	const filteredProducts = Allproducts.filter(
		(product) => product.category.trim().toLowerCase() === normalizedCategory,
	);
	if(filteredProducts.length === 0){
		return (
			<div>No products Found In This Category</div>
		)
	}
	return (
		<div className="p-6 bg-[#070d0a] mt-18 min-h-screen">
			<div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-8 ">
				{filteredProducts.map((product) => {
					return (
						<ProductCard
							key={product.id}
							product={product}
						/>
					);
				})}
			</div>
		</div>
	);
}
