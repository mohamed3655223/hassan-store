"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "../Contexts/cartContext";
export default function Checkout() {
	const [customerData, setCustomerData] = useState({
		name: "",
		phone: "",
		governorate: "",
		city: "",
		address: "",
		notes: "",
	});
	const [errors, setErrors] = useState({
		name: "",
		phone: "",
		governorate: "",
		city: "",
		address: "",
		notes: "",
	});

	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { cartItems, totalPrice } = useCart();

	const router = useRouter();

	function updateError(field: keyof typeof errors, message: string) {
		setErrors((prevErrors) => ({
			...prevErrors,
			[field]: message,
		}));
	}

	function validateName(name: string) {
		if (name.trim().length < 3) {
			updateError("name", "يجب إدخال اسم صحيح");
			return false;
		} else {
			updateError("name", "");
			return true;
		}
	}

	function validatePhone(tel: string) {
		if (tel.length !== 11 || !tel.startsWith("01") || !/^\d+$/.test(tel)) {
			updateError("phone", "رقم الهاتف غير صحيح");
			return false;
		} else {
			updateError("phone", "");
			return true;
		}
	}

	function handleInputChange(field: keyof typeof customerData, value: string) {
		setCustomerData((prevCustomerData) => ({
			...prevCustomerData,
			[field]: value,
		}));

		if (!hasSubmitted) return;

		if (field === "name") {
			validateName(value);
		}

		if (field === "phone") {
			validatePhone(value);
		}
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setHasSubmitted(true);
		const isNameValid = validateName(customerData.name);
		const isPhoneValid = validatePhone(customerData.phone);
		if (isNameValid && isPhoneValid) {
			setIsSubmitting(true);
			const orderId = Date.now().toString().slice(-6);
			router.push(`/Confirmation?orderId=${orderId}`);
		}
	}
	const rowStyle = "grid grid-cols-[90px_1fr] items-start gap-2";
	const inputStyle =
		"border rounded-md p-2 border-emerald-500 focus:outline-2 focus:outline-emerald-500 w-full";
	return (
		<div className="flex flex-col lg:grid lg:grid-cols-2  gap-10 p-10 pt-20 bg-[#070d0a] min-h-screen">
			<div>
				{/* Form For Customer Data */}
				<form
					className="space-y-5 font-bold pt-5 text-[#fef3c7]"
					id="checkout-form"
					onSubmit={handleSubmit}>
					<div className={rowStyle}>
						<label htmlFor="name">الاسم :</label>
						<div>
							<input
								type="text"
								id="name"
								spellCheck={false}
								className={inputStyle}
								value={customerData.name}
								onChange={(e) => handleInputChange("name", e.target.value)}
							/>
							<p className="text-sm text-red-500 h-5 mt-1">{errors.name}</p>
						</div>
					</div>

					<div className={rowStyle}>
						<label htmlFor="tel">الهاتف :</label>
						<div>
							<input
								type="tel"
								id="tel"
								spellCheck={false}
								className={inputStyle}
								value={customerData.phone}
								onChange={(e) => handleInputChange("phone", e.target.value)}
							/>
							<p className="text-sm text-red-500 h-5 mt-1">{errors.phone}</p>
						</div>
					</div>
					<div className={rowStyle}>
						<label htmlFor="gov">المحافظة :</label>
						<div>
							<input
								required
								type="text"
								id="gov"
								spellCheck={false}
								className={inputStyle}
								value={customerData.governorate}
								onChange={(e) =>
									handleInputChange("governorate", e.target.value)
								}
							/>
							<p className="text-sm text-red-500 h-5 mt-1">
								{errors.governorate}
							</p>
						</div>
					</div>

					<div className={rowStyle}>
						<label htmlFor="city">المدينة :</label>
						<div>
							<input
								required
								type="text"
								id="city"
								spellCheck={false}
								className={inputStyle}
								value={customerData.city}
								onChange={(e) => handleInputChange("city", e.target.value)}
							/>
							<p className="text-sm text-red-500 h-5 mt-1">{errors.city}</p>
						</div>
					</div>

					<div className={rowStyle}>
						<label htmlFor="address">العنوان :</label>
						<div>
							<input
								required
								type="text"
								id="address"
								spellCheck={false}
								className={inputStyle}
								value={customerData.address}
								onChange={(e) => handleInputChange("address", e.target.value)}
							/>
							<p className="text-sm text-red-500 h-5 mt-1">{errors.address}</p>
						</div>
					</div>

					<div className={rowStyle}>
						<label htmlFor="notes">ملاحظات :</label>
						<div>
							<textarea
								id="notes"
								spellCheck={false}
								rows={4}
								placeholder="أي ملاحظات إضافية..."
								value={customerData.notes}
								onChange={(e) => handleInputChange("notes", e.target.value)}
								className={`${inputStyle} resize-none`}
							/>
							<p className="text-sm text-red-500 h-5 mt-1">{errors.notes}</p>
						</div>
					</div>
				</form>
			</div>
			{/* === Form For Customer Data === */}

			{/* Summary Of The Order */}
			<div className="p-4 sm:p-8 lg:p-10">
				<div>
					<h1 className="text-3xl text-center font-extrabold text-[#fef3c7]">
						ملخص الطلب
					</h1>
				</div>
				<div className="pt-5">
					{cartItems.map((item) => (
						<div
							key={item.id}
							className="flex justify-between items-center py-5 border-b border-emerald-900">
							<h2 className="text-[#fef3c7] font-semibold">{item.title}</h2>
							<span className="text-emerald-300 font-bold">
								× {item.quantity}
							</span>
						</div>
					))}
				</div>
				<div className="p-10">
					<p className="text-2xl font-bold text-[#fef3c7] text-center">
						الإجمالي&nbsp;&nbsp;:&nbsp;&nbsp;
						<span className="text-emerald-300">{totalPrice} جنيه</span>
					</p>
				</div>
			</div>
			{/* === Summary Of The Order === */}

			<div className="lg:col-span-2 flex justify-center mt-8">
				<button
					type="submit"
					form="checkout-form"
					disabled={isSubmitting}
					className="flex items-center justify-center gap-3
					bg-emerald-600 hover:bg-emerald-700
					disabled:bg-emerald-700 disabled:cursor-not-allowed
					text-amber-50 font-bold
					px-8 py-3 rounded-lg transition-colors cursor-pointer">
					{isSubmitting ? (
						<>
							<span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
							جاري إرسال الطلب...
						</>
					) : (
						"تأكيد الطلب"
					)}
				</button>
			</div>
		</div>
	);
}
