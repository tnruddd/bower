// import React, { useEffect } from "react";
// import { useNavigate, useParams, useLocation } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import { Container, Row, Col } from "react-bootstrap";
// import ProductDetailItem from "../components/ProductDetailItem";
// import { updateProduct, delProduct, getProduct } from "../services/productServices";
// import { getReviewData } from "../services/reviewServices";
// import ReviewData from "./ReviewData";
// import ReviewDetailItem from "../components/ReviewDetailItem";

// export default function ReviewDetail() {
// 	const location = useLocation();
// 	const navigate = useNavigate();
// 	const { reviewId } = useParams();
// 	console.log(reviewId);

// 	// 리뷰 수정, 리뷰 삭제
// 	const [reviewDetail, setReviewDetail] = React.useState({
// 		starScore: 5,
// 		id: 50,
// 		customerID: "모모",
// 		reviewContent: "좋음",
// 		productId: 80,
// 	});

// 	useEffect(() => {
// 		getReviewData().then(data => {
// 			console.log(data);
// 			setReviewDetail(data);
// 		});
// 	}, []);

// 	return (
// 		<div>
// 			<Container>
// 				<Row>
// 					<Col>
// 						<h3
// 							style={{
// 								color: "#f00",
// 								marginBottom: "50px",
// 								opacity: 1,
// 							}}>
// 							Review Detail
// 						</h3>
// 						<Button
// 							variant="danger"
// 							type="button"
// 							onClick={() => {
// 								getReviewData().then(data => {
// 									console.log(data);
// 									navigate(`/Review/${ productId }`, { replace: true });
// 								});
// 							}}>
// 							리뷰보기
// 						</Button>
// 					</Col>
// 				</Row>
// 				<Row as="ul">
// 					<Col xs={12} sm={6}>
// 						<ReviewDetailItem review={reviewDetail} />
// 					</Col>
// 					<ul>
// 						<li>
// 							<h6>{getReviewData}</h6>
// 						</li>
// 					</ul>
// 				</Row>
// 			</Container>
// 			<ul />
// 		</div>
// 	);
// }
