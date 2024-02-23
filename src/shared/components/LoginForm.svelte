<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { handleKeyDown, isStringValid, validateEmailFormat } from '../services';
	import Button from './Button.svelte';
	export let loggingIn = false;

	let email = '';
	let password = '';
	let errors = {
		email: '',
		password: '',
	};
	let isValid = false;
	const dispatch = createEventDispatcher();

	const handleSubmit = () => {
		// Checks if the input data is valid
		isValid = true;

		// Check if the email field is not empty
		if (isStringValid(email, 1)) {
			isValid = false;
			errors.email = 'Email can not be empty!';
			// Check the format of the email
		} else if (!validateEmailFormat(email)) {
			isValid = false;
			errors.email = 'Email is not valid!';
		} else errors.email = '';

		// Check if the password field is not empty
		if (isStringValid(password, 1)) {
			isValid = false;
			errors.password = 'Password can not be empty!';
		} else errors.password = '';

		if (isValid) {
			dispatch('submit', { email, password });
		}
	};
</script>

<form class="w-96 my-0 mx-auto" on:submit|preventDefault={handleSubmit}>
	<h1 class="text-3xl underline underline-offset-8 text-center font-bold font-mono">Login</h1>
	<div class="my-5 mx-auto">
		<label for="email" class="text-lg font-bold font-mono my-2.5 mx-auto">Email</label>
		<div class="error font-bold text-sm">{errors.email}</div>
		<input
			type="text"
			id="email"
			bind:value={email}
			on:keydown={event => handleKeyDown(event, false)}
			class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
		/>
	</div>
	<div class="my-5 mx-auto">
		<label for="password" class="text-lg font-bold font-mono my-2.5 mx-auto">Password</label>
		<div class="error font-bold text-sm">{errors.password}</div>
		<input
			type="password"
			id="password"
			bind:value={password}
			on:keydown={event => handleKeyDown(event, false)}
			class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
		/>
	</div>
	<Button rosy_brown={true} disabled={loggingIn} full={true}>
		{loggingIn ? 'LOGGING IN...' : 'LOGIN'}
	</Button>
	<p class="text-center font-bold font-mono my-2.5 mx-auto text-md">
		New to Tech Store? <a href="/auth/register">Sign Up</a>
	</p>
</form>

<style>
	input {
		border-color: #aa9fb1;
		color: #aa9fb1;
	}
	input:focus {
		border-color: #cca7a2;
	}
	h1,
	p,
	label {
		color: #aa9fb1;
	}
	a {
		color: #cca7a2;
	}
	.error {
		color: #d91b42;
	}
</style>
