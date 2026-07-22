import Categorise from "./components/Categorise";
import LatestWorks from "./components/LatestWorks";
import Reviews from "./components/Reviews"
import ContactUs from "./components/ContactUs";
export default function Home() {
	return (
		<div>
			<Categorise />
			<LatestWorks />
			<Reviews />
			<ContactUs />
		</div>
	);
}
