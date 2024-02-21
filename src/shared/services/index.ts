export const handleKeyDown = (event: any, preventDefault: any) => {
	// Waiting till user presses the Enter key
	if (event.key === 'Enter') {
		if (preventDefault) event.preventDefault();
		// Finding all the input tags in that page
		const inputs = document.getElementsByTagName('input');
		// Getting the index of the current input tag
		const inputIndex = Array.from(inputs).findIndex(input => input.id === event.target.id);
		// Calculating the index of the next input tag
		const nextInputIndex = (inputIndex + 1) % inputs.length;
		// Get the details of the next input tag
		const nextInput = inputs[nextInputIndex];
		if (nextInput && inputs.length - 1 !== inputIndex) {
			setTimeout(() => {
				// Wainting till the timeout then focusing on the next input tag
				nextInput.focus();
			}, 0);
		}
	}
};

export const isStringValid = (value: string, length: number) => {
	return value.trim().length < length;
};
