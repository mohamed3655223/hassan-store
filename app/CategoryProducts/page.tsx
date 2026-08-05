"use client";
import Allproducts from "../products.json";
import { useCart } from "../Contexts/cartContext";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CategoryProducts() {
	const { addToCart, cartItems } = useCart();

	const searchParams = useSearchParams();
	const selectedCategory = searchParams.get("category");
	const filterdProducts = Allproducts.filter(
		(product) => product.category === selectedCategory,
	);
	const cartIds = new Set(cartItems.map((item) => item.id));

	return (
		<div className="p-6 bg-[#070d0a] mt-18 min-h-screen">
			<div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-8 ">
				{filterdProducts.map((product) => {
					const isInCart = cartIds.has(product.id);
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
									<h2 className="overflow-hidden truncate font-bold">
										{product.title}
									</h2>
									<h3 className="mt-2">{`السعر : ${product.price} جنيه`}</h3>
								</div>
							</Link>
							<div className="flex justify-center mb-1">
								<button
									className={`${isInCart ? "bg-green-600" : "bg-gray-600"} text-amber-50 p-2 sm:p-3 cursor-pointer
									rounded-lg ${isInCart ? "" : "hover:bg-emerald-500"}`}
									onClick={() => addToCart(product.id)}>
									{isInCart ? "✔ موجود في السلة" : "أضف إلى سلة المشتريات"}
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
