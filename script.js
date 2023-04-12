const FORM = document.querySelector(".form");
const FORM_INPUTS = [...FORM.querySelectorAll("input")];
const PASSWORD = document.querySelector("#password");
const PASSWORD_CONFIRM = document.querySelector("#password-confirmation");

function setVisibility(element, visibility) {
    if (visibility === "visible") {
        element.classList.remove("hidden");
        element.classList.add("visible");
    } else if (visibility === "hidden") {
        element.classList.remove("visible");
        element.classList.add("hidden");
    }
}

function onFocus(input) {
    const errorMessage = input.parentElement.querySelector("span.empty-message");
    
	if (errorMessage) setVisibility(errorMessage, "visible");
	
    input.attributes.removeNamedItem("placeholder");
}

function validatePassword() {
    const password = PASSWORD.value;
    const passwordConfirmation = PASSWORD_CONFIRM.value;
    const errorMessage = PASSWORD_CONFIRM.parentElement.querySelector("span.error-message");
    const emptyMessage = PASSWORD_CONFIRM.parentElement.querySelector("span.empty-message");
	
	if (passwordConfirmation === "") {
		PASSWORD_CONFIRM.setCustomValidity("Please enter your password again");

		setVisibility(emptyMessage, "visible");
		setVisibility(errorMessage, "hidden");
	} else if (password !== passwordConfirmation) {
		PASSWORD_CONFIRM.setCustomValidity("Your passwords do not match");

		setVisibility(emptyMessage, "hidden");	
		setVisibility(errorMessage, "visible");
	} else {
		PASSWORD_CONFIRM.setCustomValidity("");
		
		setVisibility(emptyMessage, "hidden");
		setVisibility(errorMessage, "hidden");
	}
}

FORM_INPUTS.forEach((input) => {
    input.addEventListener("focusout", () => {
        if (input.getAttribute("placeholder")) {
            onFocus(input);
        }
    });
});

PASSWORD_CONFIRM.addEventListener("input", validatePassword);
