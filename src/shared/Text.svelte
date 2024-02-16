<script>
	import { createEventDispatcher } from 'svelte';
	export let name = '';
	export let type = '';

	const dispatch = createEventDispatcher();
	$: value = '';

	// @ts-ignore
	const handleKeyDown = event => {
		if (event.key === 'Enter') dispatch('changeActiveInput', { name });
	};

	// @ts-ignore
	const handleValue = event => {
		value = event.target.value;
	};

	const handleInput = () => {
		dispatch('textInput', { name, value });
	};
</script>

<div class="my-5 mx-auto">
	<label for={name} class="text-lg font-bold font-mono my-2.5 mx-auto"> <slot /> </label>
	<input
		{type}
		id={name}
		on:input={handleValue}
		on:focusout={handleInput}
		on:keydown={handleKeyDown}
		class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
	/>
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
