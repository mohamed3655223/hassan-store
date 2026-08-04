export interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	link: string;
	old_price?: number;
}

export interface CartItem extends Product {
	quantity: number;
}
