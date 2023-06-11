import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams, useMatch } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import { Container, Row, Col } from "react-bootstrap";
import ProductListItem from "../components/ProductListItem";

import { getProductList } from "../services/productServices";

export default function ProductList() {
	const location = useLocation();
	const navigate = useNavigate();

	const [productList, setProductList] = React.useState([
		{ id: 1, site: 1, name: "사과", price: 10000, thumbnail: null },
		{ id: 2, site: 2, name: "아보카도", price: 5000, thumbnail: null },
		{ id: 4, site: 3, name: "오렌지", price: 8000, thumbnail: null },
	]);
	useEffect(() => {
		getProductList().then(data => {
			setProductList(data);
			console.log(data);
		});
	}, []);

	return (
		<div>
			{console.log(productList[0].id)};
			<Container>
				<Row>
					<Col>
						<h3
							style={{
								color: "#f00",
								borderRight: "12px solid #000",
								marginBottom: "50px",
								opacity: 1,
							}}>
							Oh ProductList
						</h3>
					</Col>
				</Row>
				<Row as="ul">
					{productList.map(product => (
						// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
						<Col
							xs={12}
							sm={6}
							as="li"
							onClick={() => {
								console.log(product.id);
								navigate(`/OhProduct/${product.id}`);
							}}
							key={product.id}>
							<ProductListItem product={product} />
						</Col>
					))}
				</Row>
			</Container>
			<ul />
		</div>
	);
}
