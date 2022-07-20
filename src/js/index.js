const newAdviceBtn = document.getElementById("new-advice");

newAdviceBtn.addEventListener("click", () => {
	const adviceID = document.getElementById("advice-id");
	const adviceText = document.getElementById("advice-text");

	fetch("https://api.adviceslip.com/advice")
		.then((response) => response.json())
		.then((data) => {
			adviceID.textContent = data.slip.id;
			adviceText.textContent = data.slip.advice;
		})
		.catch((error) => console.log(error));
});
