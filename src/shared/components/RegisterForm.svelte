<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { handleKeyDown } from '../services';
	import { scale } from 'svelte/transition';
	import Button from './Button.svelte';
	export let signingIn = false;

	let payload = {
		name: '',
		username: '',
		role: '',
		email: '',
		password: '',
		confirmPassword: '',
	};
	let goToSecondPage = false;
	const dispatch = createEventDispatcher();

	const handleSubmit = () => {
		console.log(payload);
		dispatch('submit', payload);
	};

	const handleClick = (type: string) => {
		if (type === 'Second Page') {
			goToSecondPage = true;
		} else if (type === 'First Page') {
			goToSecondPage = false;
		}
	};
</script>

<form class="w-96 my-0 mx-auto" on:submit|preventDefault={handleSubmit}>
	<h1 class="text-3xl underline underline-offset-8 text-center font-bold font-mono">Tech Store</h1>
	{#if !goToSecondPage}
		<div in:scale class="m-0 p-0">
			<div class="my-5 mx-auto">
				<label for="name" class="text-lg font-bold font-mono my-2.5 mx-auto">Name</label>
				<input
					type="text"
					id="name"
					bind:value={payload.name}
					on:keydown={handleKeyDown}
					class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
				/>
			</div>
			<div class="my-5 mx-auto">
				<label for="username" class="text-lg font-bold font-mono my-2.5 mx-auto">Username</label>
				<input
					type="text"
					id="username"
					bind:value={payload.username}
					on:keydown={handleKeyDown}
					class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
				/>
			</div>
			<div class="my-5 mx-auto">
				<label for="email" class="text-lg font-bold font-mono my-2.5 mx-auto">Email</label>
				<input
					type="text"
					id="email"
					bind:value={payload.email}
					on:keydown={handleKeyDown}
					class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
				/>
			</div>
			<Button rosy_brown={true} full={true} on:click={() => handleClick('Second Page')}>
				NEXT
			</Button>
		</div>
	{:else if goToSecondPage}
		<div in:scale class="m-0 p-0">
			<div class="my-5 mx-auto">
				<label for="type" class="text-lg font-bold font-mono my-2.5 mx-auto">Account Type</label>
				<select
					id="type"
					name="type"
					bind:value={payload.role}
					class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
				>
					<option>CLIENT</option>
					<option>SELLER</option>
				</select>
			</div>
			<div class="my-5 mx-auto">
				<label for="password" class="text-lg font-bold font-mono my-2.5 mx-auto">Password</label>
				<input
					type="password"
					id="password"
					bind:value={payload.password}
					on:keydown={handleKeyDown}
					class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
				/>
			</div>
			<div class="my-5 mx-auto">
				<label for="confirmPassword" class="text-lg font-bold font-mono my-2.5 mx-auto">
					Confirm Password
				</label>
				<input
					type="password"
					id="confirmPassword"
					bind:value={payload.confirmPassword}
					on:keydown={handleKeyDown}
					class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
				/>
			</div>
			<div class="flex justify-between m-0 p-0">
				<Button rosy_brown={true} quater={true} on:click={() => handleClick('First Page')}>
					BACK
				</Button>
				{#if payload.role === 'SELLER'}
					<Button rosy_brown={true} medium={true} disabled={signingIn}>
						{signingIn ? 'REGISTERING...' : 'REGISTER'}
					</Button>
				{:else}
					<Button rosy_brown={true} medium={true} on:click={() => handleClick('Third Page')}>
						NEXT
					</Button>
				{/if}
			</div>
		</div>
	{/if}
	<p class="text-center font-bold font-mono my-2.5 mx-auto text-md">
		Have an account? <a href="/auth/login">Login</a>
	</p>
</form>

<style>
	label {
		color: #aa9fb1;
	}
	input,
	select {
		border-color: #aa9fb1;
		color: #aa9fb1;
	}
	input:focus,
	select:focus {
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
