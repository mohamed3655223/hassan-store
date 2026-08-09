import Link from "next/link";
export default function EmptyCart() {
    return (
	<div className="flex flex-col items-center justify-center py-20">
		<h2 className="mb-5 text-3xl font-bold">🛒 سلة المشتريات فارغة</h2>
		<Link
			href="/ProductsPage"
			className="
							rounded-xl
							bg-emerald-600
							px-8
							py-3
							font-bold
							text-white
							shadow-md
							transition-all
							duration-200
							hover:bg-emerald-700
							hover:shadow-xl
						">
			ابدأ التسوق
		</Link>
	</div>
    )
}
