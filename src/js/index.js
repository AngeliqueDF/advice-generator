window.addEventListener("DOMContentLoaded", async () => {
	const newAdviceBtn = document.getElementById("new-advice");

	newAdviceBtn.addEventListener("click", () => {
		const adviceID = document.getElementById("advice-id");
		const adviceText = document.getElementById("advice-text");

		fetch("https://api.adviceslip.com/advice")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const {
					slip: { id, advice },
				} = data;

				adviceID.textContent = id;
				adviceText.textContent = advice;
			})
			.catch((error) => console.log(error));
	});
});
