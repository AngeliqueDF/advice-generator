import $ from "jquery";

$(() => {
	const API_URL = "https://api.adviceslip.com/advice";

	// Getting the elements to which we will add interactivity
	const newAdviceBtn = $("#new-advice");
	const adviceID = $("#advice-id");
	const adviceText = $("#advice-text");

	// Listening for click events on the button
	$(newAdviceBtn).on("click", () => {
		// Sending a request to the API
		$.get(API_URL, (data, status) => {
			// Checking the request was successful
			if (status === "success") {
				// Parsing and destructuring the response
				const {
					slip: { id, advice },
				} = JSON.parse(data);

				// Adding the id and advice to their HTML elements
				$(adviceID).text(id);
				$(adviceText).text(advice);
			}
		});
	});
});
