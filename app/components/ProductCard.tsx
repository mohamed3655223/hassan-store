import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/app/types/product";
import { useCart } from "../Contexts/cartContext";
type ProductCardProps = {
	product: Product;
	showOldPrice?: boolean;
};
export default function ProductCard({
	product,
	showOldPrice,
}: ProductCardProps) {
	const { addToCart, cartItems } = useCart();
	const cartIds = new Set(cartItems.map((item) => item.id));
	const isInCart = cartIds.has(product.id);
	return (
		<div
			className="text-xl bg-emerald-50 text-gray-600 rounded-lg
							border-3 border-emerald-100 hover:border-emerald-500 transition-colors
							duration-200">
			<Link href={`/ProductDetailPage/${product.id}`}>
				<Image
					src={product.image}
					alt={product.title}
					width={300}
					height={300}
					className="w-auto sm:w-full lg:w-full"
				/>
				<div className="pt-2 pr-2">
					<h2 className="overflow-hidden truncate font-bold">
						{product.title}
					</h2>
				</div>
				<div className="p-2 sm:p-4 flex items-center gap-10">
					<span className="text-xl font-bold text-emerald-600">
						{product.price} جنيه
					</span>

					{showOldPrice && product.old_price && (
						<span className="font-light text-gray-400 line-through">
							{product.old_price} جنيه
						</span>
					)}
				</div>
			</Link>
			<div className="flex justify-center mb-2">
				<button
					className={`${isInCart ? "bg-green-600" : "bg-gray-600"} text-amber-50 p-2 sm:p-3 cursor-pointer
									rounded-lg ${isInCart ? "" : "hover:bg-emerald-500"}`}
					onClick={() => addToCart(product.id)}>
					{isInCart ? "✔ موجود في السلة" : "أضف إلى سلة المشتريات"}
				</button>
			</div>
		</div>
	);
}
