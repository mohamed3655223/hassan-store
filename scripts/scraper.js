const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const TARGET_URL = "https://keyspinner.b3na.com/all_products";

async function startScraping() {
	try {
		console.log(
			"⏳ Launching a headless browser and waiting for JavaScript to load...",
		);

		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();

		// فتح الموقع وتعيين مهلة انتظار دقيقة كاملة للتأكد من تحميل العناصر
		await page.goto(TARGET_URL, { waitUntil: "networkidle2", timeout: 60000 });

		console.log(
			" 📜 Automatically scrolling down the page to load all products...",
		);

		// 🛠️ دالة التمرير اللانهائي المستقرة الخاصة بك:
		await page.evaluate(async () => {
			await new Promise((resolve) => {
				let totalHeight = 0;
				let distance = 100; // مسافة النزول بالبكسل
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

		// فترة انتظار إضافية للتأكد من ثبات الصور وتحميل كافة الأسعار
		await new Promise((r) => setTimeout(r, 3000));

		console.log("👀 وصلنا لنهاية الصفحة، جاري قشط كافة المنتجات الآن...");

		// قشط البيانات المطور بناءً على الـ HTML الحقيقي للموقع
		const productsList = await page.evaluate(() => {
			const items = [];
			const elements = document.querySelectorAll(".featured-item-wrapper");

			elements.forEach((element, index) => {
				const infoContainer = element.querySelector(".featured-item-info");
				if (!infoContainer) return;

				// 1. جلب العنوان
				const titleLink = infoContainer.querySelector("a");
				const title = titleLink
					? titleLink.innerText.trim()
					: "منتج بدون عنوان";

				// 2. 🟢 جلب السعر الرقمي الصافي من وسم الـ HTML الصحيح للموقع (.item-price span)
				const priceElement = element.querySelector(".item-price span");
				let price = 0;
				if (priceElement) {
					// اصطياد الرقم الأساسي فقط (مثل 250 من نص EGP 250.00) وتجاهل الأصفار القرشية
					const priceMatch = priceElement.innerText.match(/\d+/);
					price = priceMatch ? parseInt(priceMatch[0], 10) : 0;
				}

				// 3. جلب رابط الصورة
				const imgTag = element.querySelector(".featured-item-image img");
				const imageUrl = imgTag
					? imgTag.src || imgTag.getAttribute("data-src")
					: "";

				// 4. جلب رابط المنتج
				const productLink = titleLink ? titleLink.href : window.location.href;

				items.push({
					id: index + 1, // المعرّف المتناسق مع الكود الأول المستقر لديك
					title: title,
					price: price, // السعر الحقيقي الآن كـ Number وليس 0
					image: imageUrl,
					link: productLink,
				});
			});

			return items;
		});

		await browser.close();

		// 💾 حفظ البيانات داخل ملف الـ products.json
		if (productsList.length > 0) {
			const outputFilePath = path.join(__dirname, "..", "app", "products.json");

			// تأمين المسار لضمان عدم حدوث خطأ لو المجلد غير موجود
			const dir = path.dirname(outputFilePath);
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir, { recursive: true });
			}

			fs.writeFileSync(
				outputFilePath,
				JSON.stringify(productsList, null, 2),
				"utf-8",
			);

			console.log(
				`🎉 Done! It successfully scraped ${productsList.length} products.`,
			);
			console.log(`📂 تفقد الملف المحدث الآن: app/products.json`);
		} else {
			console.log(
				"⚠️ لم يتم العثور على المنتجات، تأكد من أن الموقع يعمل بشكل صحيح.",
			);
		}
	} catch (error) {
		console.error("❌ A Problem happened during browsing:", error.message);
	}
}

// تشغيل السكريبت تلقائياً عند استدعاء الملف
startScraping();
