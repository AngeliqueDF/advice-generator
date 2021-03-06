const findNewAdvice = async () => {
	try {
		const response = await fetch("https://api.adviceslip.com/advice");
		const advice = await response.json();

		return advice;
	} catch (error) {
		console.log(error);
	}
};

const newAdviceBtn = document.getElementById("new-advice");

newAdviceBtn.addEventListener("click", async () => {
	const adviceID = document.getElementById("advice-id");
	const adviceText = document.getElementById("advice-text");

	const slip = await findNewAdvice();

	adviceID.textContent = slip.id;
	adviceText.textContent = slip.advice;
});
