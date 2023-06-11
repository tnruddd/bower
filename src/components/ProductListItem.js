import React from "react";
import { Figure } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "holderjs/holder";
import { getReviewData } from "../services/reviewServices";

export default function ProductListItem({ product }) {
	return (
		<div>
			<div className="d-flex flex-row">
				<div>
					<Image thumbnail fluid src={product.thumbnail} />
				</div>
			</div>
			<h3> {product.name}</h3>
			<div>{product.price}</div>
		</div>
	);
}
