import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import ProductDetailItem from "../components/ProductDetailItem";
import { updateProduct, delProduct, getProduct } from "../services/productServices";

export default function ProductDetail() {
	const location = useLocation();
	const navigate = useNavigate();
	const { ProductId } = useParams();
	console.log(ProductId);

	// 상품 수정, 삭제
	const [productDetail, setProductDetail] = React.useState({ id: 1, site: 1, name: "사과", price: 10000, picture: null });

	useEffect(() => {
		getProduct(ProductId).then(data => {
			console.log(data);
			setProductDetail(data);
		});
	}, []);

	return (
		<div>
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
							Oh ProductDetail
						</h3>
					</Col>
				</Row>
				<Row as="ul">
					<Col xs={12} sm={6}>
						<ProductDetailItem product={productDetail} />
					</Col>
					<Button
						variant="danger"
						type="button"
						onClick={() => {
							updateProduct(
								ProductDetail.id,
								ProductDetail.name,
								ProductDetail.picture,
								ProductDetail.site,
								ProductDetail.price,
							).then(data => {
								console.log(data);
								navigate(`OhProduct`, { replace: true });
							});
						}}>
						상품수정하기
					</Button>
					<Button
						variant="danger"
						type="button"
						onClick={() => {
							delProduct(ProductDetail.id).then(data => {
								console.log(data);
							});
							navigate("/OhProduct/:ProductId");
						}}>
						상품삭제하기
					</Button>
				</Row>
			</Container>
			<ul />
		</div>
	);
}
