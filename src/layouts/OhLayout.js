// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";

export default function OhLayout() {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
