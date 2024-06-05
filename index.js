// Calculator program

const display = document.getElementById("display");

function addToDisplay(input) {
	display.value += input;
}

function clearDisplay() {
	display.value = "";
}

function calculate() {
	try {
		if (display.value.includes('/0')) {
            throw new Error("Division by zero");
        }
		display.value = eval(display.value);
		if (!isFinite(display.value)) {
            throw new Error("Division by zero");
        }
	}
	catch (error) {
		display.value = "Error!";
	}
	
}
