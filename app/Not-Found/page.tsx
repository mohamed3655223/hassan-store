// app/not-found.tsx
import Link from "next/link";

export default function GlobalNotFound() {
	return (
		<main className="min-h-screen bg-[#070d0a] text-white flex flex-col items-center justify-center p-4 text-center">
			<div className="border border-gray-800 bg-gray-900/40 p-8 rounded-2xl shadow-2xl max-w-md border-t-4 border-t-emerald-500">
				<span className="text-6xl animate-bounce inline-block mb-4">🔍</span>
				<h1 className="text-4xl font-black text-emerald-400 mb-2">404</h1>
				<h2 className="text-xl font-bold mb-4">المنتج أو الصفحة غير موجودة!</h2>
				<p className="text-gray-400 text-sm mb-6 leading-relaxed">
					يبدو أنك دخلت برابط غير صحيح أو أن هذا المنتج لم يعد
					متوفراً في المتجر حالياً.
				</p>
				<Link
					href="/"
					className="inline-block bg-emerald-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-all cursor-pointer w-full">
					العودة للرئيسية
				</Link>
			</div>
		</main>
	);
}
