import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function CpLayout() {
	const [username, setUsername] = React.useState("Couoh");
	return (
		<div>
			<Header username={username} />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
