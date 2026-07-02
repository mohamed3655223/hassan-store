const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const TARGET_URL = "https://keyspinner.b3na.com/all_products";

async function startScraping() {
	try {
		console.log("⏳ جاري تشغيل متصفح مخفي والانتظار لتحميل الجافاسكريبت...");

		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();

		// تشغيل الموقع
		await page.goto(TARGET_URL, { waitUntil: "networkidle2", timeout: 60000 });

		console.log(
			"📜 جاري التمرير لأسفل الصفحة تلقائياً لتحميل كافة المنتجات (144 منتج)...",
		);

		// 🛠️ دالة التمرير اللانهائي الذكية:
		// الكود ده بيخلي المتصفح ينزل لتحت، ويستنى ثانيتين يشوف في منتجات جديدة ظهرت ولا لأ، ويفضل ينزل لحد ما يوصل للقاع تماماً
		await page.evaluate(async () => {
			await new Promise((resolve) => {
				let totalHeight = 0;
				let distance = 100; // مسافة النزلة بالبكسل
				let timer = setInterval(() => {
					let scrollHeight = document.body.scrollHeight;
					window.scrollBy(0, distance);
					totalHeight += distance;

					// لو وصلنا لآخر الصفحة خالص، اقفل الـ Timer واخرج
					if (totalHeight >= scrollHeight - window.innerHeight) {
						clearInterval(timer);
						resolve();
					}
				}, 100); // بينزل كل 100 مللي ثانية
			});
		});

		// فترة انتظار إضافية للتأكد من ثبات الصور
		await new Promise((r) => setTimeout(r, 2000));

		console.log("👀 وصلنا لنهاية الصفحة، جاري قشط كافة المنتجات الآن...");

		// قشط البيانات (نفس الكود المظبوط بتاعك)
		const productsList = await page.evaluate(() => {
			const items = [];
			const elements = document.querySelectorAll(".featured-item-wrapper");

			elements.forEach((element, index) => {
				const infoContainer = element.querySelector(".featured-item-info");
				if (!infoContainer) return;

				const titleLink = infoContainer.querySelector("a");
				const title = titleLink
					? titleLink.innerText.trim()
					: "منتج بدون عنوان";

				const fullText = infoContainer.innerText.trim();
				const priceMatch = fullText.match(/\d+/);
				const price = priceMatch ? parseInt(priceMatch[0], 10) : 0;

				const imgTag = element.querySelector(".featured-item-image img");
				const imageUrl = imgTag
					? imgTag.src || imgTag.getAttribute("data-src")
					: "";

				const productLink = titleLink ? titleLink.href : window.location.href;

				items.push({
					id: index + 1,
					title: title,
					price: price,
					image: imageUrl,
					link: productLink,
				});
			});

			return items;
		});

		await browser.close();

		// حفظ البيانات
		if (productsList.length > 0) {
			const outputFilePath = path.join(__dirname, "..", "app", "products.json");
			fs.writeFileSync(
				outputFilePath,
				JSON.stringify(productsList, null, 2),
				"utf-8",
			);

			console.log(
				`🎉 نجاح ساحق ومكتمل! تم التمرير بنجاح وسحب ${productsList.length} منتج.`,
			);
			console.log(`📂 تفقد الملف المحدث الآن: app/products.json`);
		} else {
			console.log("⚠️ لم يتم العثور على كلاسات المنتجات.");
		}
	} catch (error) {
		console.error(
			"❌ حصلت مشكلة أثناء محاكاة المتصفح والتمرير:",
			error.message,
		);
	}
}

startScraping();
