import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams, useMatch } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import ReviewDetailItem from "../components/ReviewDetailItem";

import { getReviewData } from "../services/reviewServices";
import Pagination from "../components/Pagination";

export default function ReviewData() {
	const location = useLocation();
	const navigate = useNavigate();
	const { productId } = useParams();

	const [reviewdata, setReviewData] = React.useState([]);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;

	useEffect(() => {
		getReviewData(productId).then(data => {
			setReviewData(data);
			console.log(data);
		});
	}, []);

	return (
		<div>
			{console.log(reviewdata)};
			<Container>
				<Row>
					<Col>
						<h3
							style={{
								color: "#f00",
								marginBottom: "50px",
								opacity: 1,
							}}>
							Review List
						</h3>
						<label htmlFor="re" style={{ float: "right" }}>
							페이지 당 표시할 게시물 수:&nbsp;
							<select id="re" type="number" value={limit} onChange={({ target: { value } }) => setLimit(Number(value))}>
								<option value="10">10</option>
								<option value="12">12</option>
								<option value="20">20</option>
								<option value="50">50</option>
								<option value="100">100</option>
							</select>
						</label>
					</Col>
				</Row>
				{reviewdata.slice(offset, offset + limit).map(review => (
					<Row
						class="various"
						id="fonty"
						as="ul"
						onClick={() => {
							console.log(review.product);
							navigate(`/review/${review.id}`, { replace: true });
						}}
						key={review.id}>
						{/* <Col
							xs={12}
							sm={6}
							as="li"
							onClick={() => {
								console.log(review.product);
								navigate(`/review/${review.id}`, { replace: true });
							}}
							key={review.id}>
							<ReviewDetailItem review={review} />
						</Col> */}
						<Col>{review.star_score}</Col>
						<Col> {review.review_content}</Col>
						<Col>{review.customer_ID}</Col>
					</Row>
				))}
				<Pagination total={reviewdata.length} limit={limit} page={page} setPage={setPage} />
			</Container>
			<ul />
		</div>
	);
}
