import Image from "next/image";
import Link from "next/link";

import facebookImg from "../Assets/facebook.png";
import youtubeImg from "../Assets/youtube.png";
import tiktokImg from "../Assets/tiktok.png";
import whatSappImg from "../Assets/whatsapp.png";
import instgramImg from "../Assets/instagram.png";

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/hsn.alshrwydy?rdid=6WgETbixg8BNOQh9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GXAaAh77A%2F#",
        image: facebookImg,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@hassanyousf-3d_printer",
        image: youtubeImg,
    },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/@hassan.yousf_3d?_r=1",
        image: tiktokImg,
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/+201060852353",
        image: whatSappImg,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/xhassanyousf",
        image: instgramImg,
    },
];

export default function ContactUs() {
    return (
        <section className="bg-[#070d0a] py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-right border-r-4 border-emerald-500 pr-4">
                    <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                        تواصل معنا
                    </h2>

                    <p className="mt-2 mb-24 text-sm text-gray-400">
                        يمكنك التواصل معنا من خلال هذه المنصات ومتابعة كل جديد لدينا
                    </p>
                </div>

                {/* Social Media */}
                <div className="flex justify-center space-x-9">
                    {socialLinks.map((social) => (
                        <div
                            key={social.name}
                            className="transition-transform duration-300 hover:-translate-y-3"
                        >
                            <Link
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={social.image}
                                    alt={social.name}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


