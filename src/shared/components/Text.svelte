<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let name = '';
	export let type = '';
	export let value = '';

	const dispatch = createEventDispatcher();

	// const handleValue = (event: any) => {
	// 	value = event.target.value;
	// };

	// const handleInput = (event: any) => {
	// 	value = event.target.value;
	// 	// dispatch('textInput', { name, value });
	// };

	const handleKeyDown = (event: any) => {
		// Waiting till user presses the Enter key
		if (event.key === 'Enter') {
			// Finding all the input tags in that page
			const inputs = document.getElementsByTagName('input');
			// Getting the index of the current input tag
			const inputIndex = Array.from(inputs).findIndex(input => input.id === name);
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
</script>

<div class="my-5 mx-auto">
	<label for={name} class="text-lg font-bold font-mono my-2.5 mx-auto"> <slot /> </label>
	{#if type === 'text'}
		<input
			type="text"
			id={name}
			bind:value
			on:keydown={handleKeyDown}
			class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
		/>
	{:else if type === 'password'}
		<input
			type="password"
			id={name}
			bind:value
			on:keydown={handleKeyDown}
			class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
		/>{/if}
</div>

<style>
	label {
		color: #aa9fb1;
	}
	input {
		border-color: #aa9fb1;
		color: #aa9fb1;
	}
	input:focus {
		border-color: #cca7a2;
	}
</style>
