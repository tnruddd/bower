import React from "react";
import { useNavigate } from "react-router-dom";
import { uploadProduct } from "../services/productServices";

export default function ProductCreate() {
	const [name, setName] = React.useState("");
	const [price, setPrice] = React.useState("");
	const [site, setSite] = React.useState("");

	const navigate = useNavigate();

	return (
		<div>
			<h3>ProductCreate</h3>
			<div>
				<input
					type="text"
					placeholder="사이트 입력"
					value={site}
					onChange={e => {
						setSite(e.target.value);
					}}
				/>
			</div>
			{/* <div>
      <input
      type="search"
      value={id}
      onChange={e=>{
        setId(e.target.value);
      }}
      />
    </div> */}
			<div>
				<input
					type="number"
					placeholder="가격 입력"
					value={price}
					onChange={e => {
						setPrice(e.target.value);
					}}
				/>
			</div>
			<div>
				<input
					type="text"
					placeholder="상품이름 입력"
					value={name}
					onChange={e => {
						setName(e.target.value);
					}}
				/>
			</div>
			<div>
				<button
					type="button"
					onClick={e => {
						// eslint-disable-next-line no-undef
						uploadProduct(site, price, name, picture).then(data => {
							console.log(data);
							navigate("/OhProduct", { replace: true });
						});
					}}>
					상품등록요청
				</button>
			</div>
		</div>
	);
}
