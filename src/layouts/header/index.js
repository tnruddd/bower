import React from "react";

export default function DefaultHeader(props) {
	return (
		<header>
			<div>{props.username}</div>
		</header>
	);
}
