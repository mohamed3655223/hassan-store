import facebookImg from "../Assets/facebook.png";
import youtubeImg from "../Assets/youtube.png";
import tiktokImg from "../Assets/tiktok.png";
import whatSappImg from "../Assets/whatsapp.png";
import instgramImg from "../Assets/instagram.png";
import Link from "next/link";
export default function ContactUs() {
	return (
		<section className="bg-[#070d0a] py-12 sm:py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-right border-r-4 border-emerald-500 pr-4">
					<h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
						تواصل معنا
					</h2>
					<p className="mt-2 text-sm text-gray-400 mb-24">
						يمكنك التواصل معنا من خلال هذه المنصات ومتابعة كل جديد لدينا
					</p>
				</div>
				{/* Social Media */}
				<div className="flex justify-center space-x-9">
					<div className="hover:-translate-y-3 transition-transform duration-300">
						<Link
							target="_blank"
							href="https://www.facebook.com/hsn.alshrwydy?rdid=6WgETbixg8BNOQh9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GXAaAh77A%2F#">
							<img src={facebookImg.src} alt="facebook" />
						</Link>
					</div>
					<div className="hover:-translate-y-3 transition-transform duration-300">
						<Link
							target="_blank"
							href="https://www.youtube.com/@hassanyousf-3d_printer">
							<img src={youtubeImg.src} alt="youtube" />
						</Link>
					</div>
					<div className="hover:-translate-y-3 transition-transform duration-300">
						<Link
							target="_blank"
							href="https://www.tiktok.com/@hassan.yousf_3d?_r=1">
							<img src={tiktokImg.src} alt="tiktok" />
						</Link>
					</div>
					<div className="hover:-translate-y-3 transition-transform duration-300">
						<Link target="_blank" href="https://wa.me/+201060852353">
							<img src={whatSappImg.src} alt="whatsapp" />
						</Link>
					</div>
					<div className="hover:-translate-y-3 transition-transform duration-300">
						<Link target="_blank" href="https://www.instagram.com/xhassanyousf">
							<img src={instgramImg.src} alt="instgram" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
