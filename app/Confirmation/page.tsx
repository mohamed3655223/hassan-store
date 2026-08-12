"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Confirmation() {
	const searchParams = useSearchParams();
	const orderId = searchParams.get("orderId");

	return (
		<div className="min-h-screen bg-[#070d0a] flex items-center justify-center px-6 mt-10">
			<div className="w-full max-w-2xl bg-[#0d1511] border border-emerald-900 rounded-2xl shadow-xl p-10 text-center">
				<div className="flex justify-center mb-6">
					<div className="w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center text-4xl text-white">
						✓
					</div>
				</div>

				<h1 className="text-3xl font-extrabold text-[#fef3c7] mb-6">
					تم استلام طلبك بنجاح
				</h1>

				<p className="text-gray-300 leading-8 mb-3">
					سيتم مراجعة الطلب والتواصل معك في أقرب وقت لتأكيده.
				</p>

				<p className="text-gray-300 leading-8">
					مدة التوصيل المتوقعة:
					<span className="text-emerald-300 font-bold"> 24 - 48 ساعة</span>
				</p>

				<div className="mt-8 border border-emerald-900 rounded-xl p-5 bg-[#111a15]">
					<span className="font-bold text-gray-400">رقم الطلب</span>
					{!orderId || orderId.length !== 6 ? (
						<h2 className="mt-4 text-sm text-gray-400">
							you should have an order , first
						</h2>
					) : (
						<p className="text-2xl tracking-widest mt-4 font-bold text-emerald-300">
							#{orderId}
						</p>
					)}
				</div>
				<Link
					href="/"
					className="inline-block mt-10 bg-emerald-600 hover:bg-emerald-700 transition-colors text-amber-50 font-bold px-8 py-3 rounded-lg">
					العودة للرئيسية
				</Link>
			</div>
		</div>
	);
}
