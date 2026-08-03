"use client";

import { useCart } from "../Contexts/cartContext";
import Link from "next/link";

export default function Cart() {
	const { cartItems, incrementQuantity, decrementQuantity, totalPrice } =
		useCart();

	return (
		<div className="bg-gray-600 mt-18 w-full text-white">
			{cartItems.length === 0 ? (
				<div className="flex flex-col items-center justify-center py-20">
					<h2 className="text-3xl font-bold mb-5">🛒 سلة المشتريات فارغة</h2>

					<Link
						href="/ProductsPage"
						className="
									bg-emerald-600
									hover:bg-emerald-700
									text-white
									font-bold
									px-8
									py-3
									rounded-xl
									transition-all
									duration-200
									shadow-md
									hover:shadow-xl
								">
						ابدأ التسوق
					</Link>
				</div>
			) : (
				<>
					{/* Header */}
					<div
						className="grid grid-cols-[3fr_1fr_1fr] items-center border-b border-gray-400 
					px-3 sm:px-5 lg:px-7 py-4 font-bold">
						<h1>المنتجات المطلوبة</h1>
						<h1 className="text-center">السعر</h1>
						<h1 className="text-center">الكمية</h1>
					</div>

					{/* Cart Items */}
					{cartItems.map((item) => (
						<div
							key={item.id}
							className="grid grid-cols-[3fr_1fr_1fr] items-center border-b
							border-gray-500 px-3 sm:px-5 lg:px-7 py-4">
							{/* Product */}
							<div className="flex items-center gap-4">
								<img
									src={item.image}
									alt={item.title}
									className="size-20 sm:size-26 lg:size-36 object-cover rounded"
								/>

								<h2>{item.title}</h2>
							</div>

							{/* Price */}
							<h2 className="text-center">{item.price} جنيه</h2>

							{/* Quantity */}
							<div className="flex justify-center items-center gap-1 sm:gap-2 lg:gap-3">
								<button
									onClick={() => incrementQuantity(item.id)}
									className="bg-green-600 px-2 sm:px-3 sm:py-1 lg:px-4 lg:py-2 rounded font-bold cursor-pointer">
									+
								</button>

								<span>{item.quantity}</span>

								<button
									onClick={() => decrementQuantity(item.id)}
									className="bg-red-600 px-2 sm:px-3 sm:py-1 lg:px-4 lg:py-2 rounded font-bold cursor-pointer">
									-
								</button>
							</div>
						</div>
					))}
					<div className="flex flex-col items-center justify-center p-10">
						<h1 className="mb-8 text-2xl font-bold">
							الإجمالي&nbsp;:&nbsp;
							<span className="text-emerald-300">{totalPrice} جنيه</span>
						</h1>
						<Link
							href="/Checkout"
							className="cursor-pointer font-bold bg-emerald-500 p-4 hover:bg-emerald-950 rounded-md">
							إتمام الشراء
						</Link>
					</div>
				</>
			)}
		</div>
	);
}
