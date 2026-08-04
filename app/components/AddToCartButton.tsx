"use client";

import { useCart } from "../Contexts/cartContext";

export default function AddToCartButton({ productId }: { productId: number }) {
	const { addToCart, cartItems } = useCart();
	const isInCart = cartItems.some((item) => item.id === productId);

	return (
		<button
			className="bg-emerald-500 text-black
                font-bold py-4 px-10 sm:px-20 rounded-xl
            hover:bg-emerald-400 transition-all cursor-pointer"
			onClick={() => addToCart(productId)}>
            
			{isInCart ? "✔ موجود في السلة" : "أضف إلى سلة المشتريات"}
		</button>
	);
}
