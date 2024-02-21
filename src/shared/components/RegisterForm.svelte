<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { handleKeyDown, isStringValid } from '../services';
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
		street: '',
		city: '',
		state: '',
		zip: '',
		country: '',
	};
	let errors = {
		name: '',
		username: '',
		role: '',
		email: '',
		password: '',
		confirmPassword: '',
		street: '',
		city: '',
		state: '',
		zip: '',
		country: '',
	};
	let goToSecondPage = false;
	let goToThirdPage = false;
	let isValid = false;
	const dispatch = createEventDispatcher();

	const handleSubmit = () => {
		// Checks if the input data is valid
		isValid = true;

		// Check if the name field is not empty
		if (isStringValid(payload.name, 1)) {
			isValid = false;
			errors.name = 'Name can not be empty!';
		} else errors.name = '';

		// Check if the username field is not empty
		if (isStringValid(payload.username, 1)) {
			isValid = false;
			errors.username = 'Username can not be empty!';
		} else errors.username = '';

		// Check if the email field is not empty
		if (isStringValid(payload.email, 1)) {
			isValid = false;
			errors.email = 'Email can not be empty!';
		} else errors.email = '';

		if (isValid) {
			console.log(payload);
			dispatch('submit', payload);
		}
	};

	const handleNext = (event: any) => {
		if (event.key === 'Enter') {
			handleClick('Third Page');
		}
	};

	const handleClick = (type: string) => {
		if (type === 'First Page') {
			goToSecondPage = false;
			goToThirdPage = false;
		} else if (type === 'Second Page') {
			if (payload.name && payload.username && payload.email) {
				goToSecondPage = true;
				goToThirdPage = false;
				errors.name = '';
				errors.username = '';
				errors.email = '';
			}
		} else if (type === 'Third Page') {
			if (payload.role && payload.password && payload.confirmPassword) {
				goToSecondPage = false;
				goToThirdPage = true;
			}
		}
	};
</script>

<form class="w-96 my-0 mx-auto" on:submit|preventDefault={handleSubmit}>
	<h1 class="text-3xl underline underline-offset-8 text-center font-bold font-mono">Register</h1>
	{#if !goToSecondPage && !goToThirdPage}
		<div in:scale class="m-0 p-0">
			<div class="my-5 mx-auto">
				<label for="name" class="text-lg font-bold font-mono my-2.5 mx-auto">Name</label>
				<div class="error font-bold text-sm">{errors.name}</div>
				<input
					type="text"
					id="name"
					bind:value={payload.name}
					on:keydown={event => handleKeyDown(event, true)}
					class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
				/>
			</div>
			<div class="my-5 mx-auto">
				<label for="username" class="text-lg font-bold font-mono my-2.5 mx-auto">Username</label>
				<div class="error font-bold text-sm">{errors.username}</div>
				<input
					type="text"
					id="username"
					bind:value={payload.username}
					on:keydown={event => handleKeyDown(event, true)}
					class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
				/>
			</div>
			<div class="my-5 mx-auto">
				<label for="email" class="text-lg font-bold font-mono my-2.5 mx-auto">Email</label>
				<div class="error font-bold text-sm">{errors.email}</div>
				<input
					type="text"
					id="email"
					bind:value={payload.email}
					on:keydown={event => handleKeyDown(event, false)}
					class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
				/>
			</div>
			<Button rosy_brown={true} full={true} on:click={() => handleClick('Second Page')}>
				NEXT
			</Button>
		</div>
	{:else if goToSecondPage && !goToThirdPage}
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
					on:keydown={event => handleKeyDown(event, true)}
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
					on:keydown={handleNext}
					class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
				/>
			</div>
			<div class="flex justify-between m-0 p-0">
				<Button rosy_brown={true} quater={true} on:mousedown={() => handleClick('First Page')}>
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
	{:else if !goToSecondPage && goToThirdPage}
		<div in:scale class="m-0 p-0">
			<div class="my-5 mx-auto">
				<label for="address" class="text-lg font-bold font-mono my-2.5 mx-auto">Address</label>
				<input
					type="text"
					id="street"
					placeholder="Street"
					bind:value={payload.street}
					on:keydown={event => handleKeyDown(event, true)}
					class="w-full rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold"
				/>
				<div class="flex justify-between mt-1 mb-0 mx-0 p=0">
					<input
						type="text"
						id="city"
						placeholder="City"
						bind:value={payload.city}
						on:keydown={event => handleKeyDown(event, true)}
						class="w-2/4 rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold mr-1"
					/>
					<input
						type="text"
						id="state"
						placeholder="State"
						bind:value={payload.state}
						on:keydown={event => handleKeyDown(event, true)}
						class="w-2/4 rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold ml-1"
					/>
				</div>
				<div class="flex justify-between mt-1 mb-0 mx-0 p=0">
					<input
						type="text"
						id="zip"
						placeholder="Zip"
						bind:value={payload.zip}
						on:keydown={event => handleKeyDown(event, true)}
						class="w-2/4 rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold mr-1"
					/>
					<input
						type="text"
						id="country"
						placeholder="Country"
						bind:value={payload.country}
						on:keydown={event => handleKeyDown(event, false)}
						class="w-2/4 rounded-md border-solid border-2 bg-neutral-50 md:h-10 sm:h-10 focus:outline-none py-2 px-2 font-semibold ml-1"
					/>
				</div>
			</div>
			<div class="flex justify-between m-0 p-0">
				<Button rosy_brown={true} quater={true} on:mousedown={() => handleClick('Second Page')}>
					BACK
				</Button>
				<Button rosy_brown={true} medium={true} disabled={signingIn}>
					{signingIn ? 'REGISTERING...' : 'REGISTER'}
				</Button>
			</div>
		</div>
	{/if}
	<p class="text-center font-bold font-mono my-2.5 mx-auto text-md">
		Have an account? <a href="/auth/login">Login</a>
	</p>
</form>

<style>
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
