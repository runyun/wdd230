const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const message = document.querySelector("#form-message");

passwordCheck.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (password.value !== passwordCheck.value) {
		message.textContent = "❗Password DO NOT MATCH!";
		message.style.visibility = "show";
		passwordCheck.style.backgroundColor = "#fff0f3";
		passwordCheck.value = "";
		passwordCheck.focus();
	} else {
		message.style.display = "none";
		passwordCheck.style.backgroundColor = "#fff";
		passwordCheck.style.color = "#000";
	}
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
