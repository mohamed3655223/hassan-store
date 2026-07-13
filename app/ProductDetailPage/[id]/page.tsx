import productsData from "../../products.json";
import GlobalNotFound from "@/app/Not-Found/page";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
    // 1. ننتظر الـ id القادم من رابط المتصفح
    const resolvedParams = await params;
    const productId = resolvedParams.id;

    const product = productsData.find((p: any) => p.id === parseInt(productId));
    if (!product) {
        return <GlobalNotFound />;
    }

    return (
			<main className="min-h-screen bg-[#070d0a] text-white p-8 sm:p-12 text-right">
				<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
					<div className="relative aspect-square w-full border border-gray-800 rounded-2xl overflow-hidden bg-gray-900/40">
						<img
							src={product.image}
							alt={product.title}
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="flex flex-col justify-center items-center">
						<h1 className="text-3xl font-black mb-4">{product.title}</h1>
						<p className="text-2xl font-bold text-emerald-400 mb-6">
							{product.price} جنيه
						</p>
						<button className="bg-emerald-500 text-black
						font-bold py-4 px-10 sm:px-20 rounded-xl hover:bg-emerald-400
						transition-all cursor-pointer">
							إضافة إلى السلة
						</button>
					</div>
				</div>
			</main>
		);
}
