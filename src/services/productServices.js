const API_BASE_URL = "http://localhost/api";

// 쿠팡
// aync 비동기처리
// 상품 리스트 보여주기 get
export async function getProductList() {
	const productApiUrl = `${API_BASE_URL}/product`;

	return fetch(productApiUrl, {
		method: "GET",
	}).then(resp => resp.json());
}

// 상품하나만 가져오기// pk
export async function getProduct(id) {
	const productApiUrl = `${API_BASE_URL}/product/${id}`;
	return fetch(productApiUrl, {
		method: "GET",
	}).then(resp => resp.json());
}

// 상품 수정 patch
export async function updateProduct(id, name, site, price, picture) {
	const productApiUrl = `${API_BASE_URL}/product/${id}`;
	return fetch(productApiUrl, {
		method: "PUT",
		body: JSON.stringify({
			name,
			site,
			price,
			picture,
		}),
	}).then(resp => resp.json());
}

// 상품 등록하기 //post
export async function uploadProduct(id, name, site, price, picture) {
	const productApiUrl = `${API_BASE_URL}/product/${id}/`;
	return fetch(productApiUrl, {
		method: "POST",
		body: JSON.stringify({
			name,
			site,
			price,
			picture,
		}),
	}).then(resp => resp.json());
}

// 상품 지우기 //delete
export async function delProduct(ProductId) {
	const productApiUrl = `${API_BASE_URL}/product/${ProductId}/`;
	return fetch(productApiUrl, {
		method: "DELETE",
	}).then(resp => resp.json());
}

// 상품찾기(검색하기) //get
// export async function createProduct( name, site, price,) {
// 	const productApiUrl = `${API_BASE_URL}/Product/create/`;
// 	return fetch(productApiUrl, {
// 		method: "POST",
// 		body: JSON.stringify({

// 		}),
// 	}).then(resp => resp.json());
// }
