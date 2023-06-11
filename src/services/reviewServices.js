const API_BASE_URL = "http://localhost/api";

// 리뷰 리스트 보여주기 get
export async function getReviewData(id) {
	const reviewdataApiUrl = `${API_BASE_URL}/reviewdata/?product=${id}`;
	// reviewdata?prductId=:
	return fetch(reviewdataApiUrl, {
		method: "GET",
	}).then(resp => resp.json());
}
// 리뷰 쓰기
export async function updateReviewData(product, customerID, starScore, reviewContent, productId) {
	const reviewdataApiUrl = `${API_BASE_URL}/reviewdata/?product=${productId}`;
	// reviewdata?prductId=:
	return fetch(reviewdataApiUrl, {
		method: "PUT",
		body: JSON.stringify({
			product,
			customerID,
			starScore,
			reviewContent,
			productId,
		}),
	}).then(resp => resp.json());
}
