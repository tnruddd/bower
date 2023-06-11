// eslint-disable-next-line no-undef
mouseOverHandler = e => {
	const dataValue = e.target.dataset.value;
	const targetList = e.target.parentNode.childNodes;
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < dataValue; i++) {
		targetList[i].style.color = "red";
	}
};

// eslint-disable-next-line no-undef
mouseLeaveHandler = e => {
	const targetList = e.target.parentNode.childNodes;
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < targetList.length; i++) {
		targetList[i].style = "";
	}
};

// eslint-disable-next-line no-undef
getRating = e => {
	const dataValue = Number(e.target.dataset.value);
	const targetList = e.target.parentNode.childNodes;
	const node = this.myRef.current;
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < targetList.length; i++) {
		if (targetList[i].className.includes("redstar")) {
			targetList[i].className = "fas fa-star";
		} else {
			// eslint-disable-next-line no-plusplus, no-shadow
			for (let i = 0; i < dataValue; i++) {
				targetList[i].className = "fas fa-star redstar";
			}
		}
	}
	this.setState({
		ratingValue: dataValue,
	});

	switch (Number(dataValue)) {
		case 1:
			node.style.color = "red";
			node.innerHTML = "<span>1점</span> (별로예요😡)";
			break;
		case 2:
			node.style.color = "red";
			node.innerHTML = "<span>2점</span> (그저그래요🙁)";
			break;
		case 3:
			node.style.color = "red";
			node.innerHTML = "<span>3점</span> (괜찮아요👌)";
			break;
		case 4:
			node.style.color = "red";
			node.innerHTML = "<span>4점</span> (좋아요😄)";
			break;
		case 5:
			node.style.color = "red";
			node.innerHTML = "<span>5점</span> (최고예요👍)";
			break;
		default:
			node.innerHTML = "선택하세요";
			break;
	}
};
