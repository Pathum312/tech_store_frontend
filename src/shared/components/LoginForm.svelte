<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { handleKeyDown } from '../services';
	import Button from './Button.svelte';
	export let loggingIn = false;

	let email = '';
	let password = '';
	const dispatch = createEventDispatcher();

	const handleSubmit = () => {
		dispatch('submit', { email, password });
	};
</script>

<form class="w-96 my-0 mx-auto" on:submit|preventDefault={handleSubmit}>
	<h1 class="text-3xl underline underline-offset-8 text-center font-bold font-mono">Tech Store</h1>
	<div class="my-5 mx-auto">
		<label for="email" class="text-lg font-bold font-mono my-2.5 mx-auto">Email</label>
		<input
			type="text"
			id="email"
			bind:value={email}
			on:keydown={handleKeyDown}
			class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
		/>
	</div>
	<div class="my-5 mx-auto">
		<label for="password" class="text-lg font-bold font-mono my-2.5 mx-auto">Password</label>
		<input
			type="password"
			id="password"
			bind:value={password}
			on:keydown={handleKeyDown}
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
	h1,
	p {
		color: #aa9fb1;
	}
	a {
		color: #cca7a2;
	}
</style>
