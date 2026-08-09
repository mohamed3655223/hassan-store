"use client";
import { useState, useMemo, useContext } from "react";
import AllProducts from "../products.json";
import type { CartItem } from "@/app/types/product";
import { createContext } from "react";

interface CartContextType {
	cartItems: CartItem[];
	totalPrice: number;
	cartIds: Set<number>;
	hasItems: boolean
	addToCart: (wantedProductId: number) => void;
	removeFromCart: (unWantedProductId: number) => void;
	incrementQuantity: (itemId: number) => void;
	decrementQuantity: (itemId: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const cartIds = new Set(cartItems.map((item) => item.id));
	const hasItems = cartItems.length > 0; 

	// Get The Total Price For All Products in The Cart
	const totalPrice = useMemo(
		() =>
			cartItems.reduce(
				(accumulator, item) => accumulator + item.price * item.quantity,
				0,
			),
		[cartItems],
	);

	function addToCart(productId: number) {
		const wantedProduct = AllProducts.find(
			(product) => product.id === productId,
		);
		if (!wantedProduct) return;
		setCartItems((prevCartItems) => {
			const repeatedProduct = prevCartItems.find(
				(product) => product.id === productId,
			);

			if (repeatedProduct) {
				return prevCartItems.map((item) =>
					item.id === productId
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}
			// turning from product in json data to cartItem
			const cartItem: CartItem = {
				...wantedProduct,
				quantity: 1,
			};
			return [...prevCartItems, cartItem];
		});
	}

	function removeFromCart(productId: number) {
		setCartItems((prevCartItems) =>
			prevCartItems.filter((product) => product.id !== productId),
		);
	}

	function incrementQuantity(itemId: number) {
		setCartItems((prevCartItems) =>
			prevCartItems.map((item) =>
				item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
			),
		);
	}

	function decrementQuantity(itemId: number) {
		setCartItems((prevCartItems) =>
			prevCartItems
				.map((item) =>
					item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item,
				)
				.filter((item) => item.quantity > 0),
		);
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				totalPrice,
				hasItems,
				addToCart,
				removeFromCart,
				incrementQuantity,
				decrementQuantity,
				cartIds,
			}}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error("useCart must be used within CartProvider");
	}

	return context;
}
