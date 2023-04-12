const FORM = document.querySelector(".form");
const FORM_INPUTS = [...FORM.querySelectorAll("input")];

function onFocus(input) {
    const errorMessage = input.parentElement.querySelector("span.input-message");
    errorMessage.classList.remove("hidden");
    errorMessage.classList.add("visible");
    input.attributes.removeNamedItem("placeholder");
}

FORM_INPUTS.forEach((input) => {
	input.addEventListener("focusout", () => {
		if (input.getAttribute("placeholder")) {
			onFocus(input);
		}
	})
});
