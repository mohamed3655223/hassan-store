"use client";
import products from "../products.json";
import Link from "next/link";
import { useCart } from "../Contexts/cartContext";
export default function Discounts() {
	const { addToCart, cartItems } = useCart();
	const discountProducts = products.filter(
		(product) => product.old_price,
	);
	const cartIds = new Set(cartItems.map((item) => item.id));
	return (
		<div className="p-6 mt-10 bg-[#070d0a]">
			<div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 gap-8 mt-9">
				{discountProducts.map((product) => {
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
									alt={product.title}
									className="w-auto sm:w-full lg:w-full"
								/>
								<div className="p-2 sm:p-4">
									<h2 className="overflow-hidden truncate font-bold">
										{product.title}
									</h2>
								</div>
								<div className="p-2 sm:p-4 flex items-center gap-10">
									<span className="text-xl font-bold text-emerald-600">
										{product.price} جنيه
									</span>

									{product.old_price && (
										<span className="font-light text-gray-400 line-through">
											{product.old_price} جنيه
										</span>
									)}
								</div>
							</Link>
							<div className="flex justify-center mb-1 mt-1">
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
