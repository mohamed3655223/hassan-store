import reviewsData from "../reviews.json";

export interface Review {
	id: string | number;
	name: string;
	avatarLetter: string;
	rating: number; // 1–5
	text?: string;
	date?: string;
}

export interface ReviewsListProps {
	reviews?: Review[];
	title?: string;
	description?: string;
}

export default function Reviews({
	reviews = reviewsData as Review[],
	title = "آراء العملاء",
	description = "استكشف تجارب وآراء عملائنا في منتجاتنا الـ 3D.",
}: ReviewsListProps) {
	if (!reviews || reviews.length === 0) {
		return (
			<section className="bg-[#070d0a] py-12 sm:py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-right border-r-4 border-emerald-500 pr-4">
						<h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
							{title}
						</h2>
						<p className="mt-2 text-sm text-gray-400">لا توجد آراء حالياً.</p>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="bg-[#070d0a] py-12 sm:py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-right mb-10 border-r-4 border-emerald-500 pr-4">
					<h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
						{title}
					</h2>
					<p className="mt-2 text-sm text-gray-400">{description}</p>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{reviews.map((review) => {
						const name = review.name.trim();
						const letter = name.charAt(0).toUpperCase();
						const rating = Math.max(0,Math.min(5, Math.round(review.rating)));

						return (
							<div
								key={review.id}
								className="group relative w-full flex flex-col justify-between
                                    overflow-hidden rounded-xl bg-gray-800/60 p-5 border
                                    border-gray-800 hover:border-emerald-500/50 hover:bg-gray-800 
                                    transition-all duration-300 shadow-md"
								dir="rtl">
								<div>
									<div className="flex items-center gap-4 mb-4">
										<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-emerald-400 border border-gray-700/60 font-black text-base group-hover:bg-emerald-500/10 group-hover:text-emerald-300 group-hover:border-emerald-500/30 group-hover:scale-110 transition-all duration-300">
											{letter}
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="text-sm sm:text-base font-black text-gray-200 group-hover:text-white transition-colors truncate">
												{name}
											</h3>
											<p className="text-xs text-gray-500 font-bold mt-0.5">
												{review.date}
											</p>
										</div>
									</div>

									<div
										className="text-emerald-400 text-xs tracking-widest mb-3 flex gap-0.5"
										role="img"
										aria-label={`Rated ${rating} out of 5 stars`}>
										{"★".repeat(rating)}
										<span className="text-gray-700">
											{"★".repeat(5 - rating)}
										</span>
									</div>

									<p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
										{review.text || "لا يوجد تعليق مكتوب."}
									</p>
								</div>

								<div className="absolute -bottom-2 -left-2 size-12 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all duration-300" />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
