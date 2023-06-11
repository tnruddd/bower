/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useCallback, useEffect } from "react";
import { Container, Figure } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "holderjs/holder";

export default function ProductDetailItem({ product }) {
	const [wcSrc, setWcSrc] = React.useState("");

	const loadImage = useCallback(() => {
		console.log("useCallback");
		console.log(product.id);

		if (product.id >= 13 && product.id <= 34) {
			const image = require(`../assets/product_id_${product.id}.png`);
			console.log(image);
			return image;
		}
		return "";
	}, [product]);

	useEffect(() => {
		console.log("useEffect");
		console.log(product.id);
		setWcSrc(loadImage(product.id));
	}, [loadImage]);
	return (
		<div>
			<div className="d-inline-flex p-2">
				<span>
					<Image thumbnail fluid src={product.thumbnail} />
				</span>
				<div style={{ marginLeft: 8, padding: 5, fontSize: 22 }}>
					<div style={{ marginTop: 3 }}>
						<Figure>
							<Figure.Image width={600} height={600} alt="171x180" src={wcSrc} />
							{/* <Figure.Image width={300} height={200} alt="171x180" src="holder.js/250x180" /> */}
						</Figure>
					</div>
				</div>
			</div>
			<h4>
				<em>{product.name}</em>
			</h4>
			<div>
				<em>{product.price}</em>
			</div>
		</div>
	);
}
