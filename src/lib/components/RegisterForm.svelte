<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { handleKeyDown, isStringValid, validateEmailFormat } from '$lib/services';
	import { scale } from 'svelte/transition';
	import { Button } from '$lib/components';
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
			// Check the format of the email
		} else if (!validateEmailFormat(payload.email)) {
			isValid = false;
			errors.email = 'Email is not valid!';
		} else errors.email = '';

		// Check if the role field is not empty
		if (isStringValid(payload.role, 1)) {
			isValid = false;
			errors.role = 'A type must be selected!';
		} else errors.role = '';

		// Check if the password field is not empty
		if (isStringValid(payload.password, 1)) {
			isValid = false;
			errors.password = 'Password can not be empty!';
		} else if (isStringValid(payload.password, 5)) {
			isValid = false;
			errors.password = 'Password must be longer than 5 characters!';
		} else errors.password = '';

		// Check if confirm password matches the password
		if (payload.password !== payload.confirmPassword) {
			isValid = false;
			errors.confirmPassword = 'Password does not match!';
		} else errors.confirmPassword = '';

		if (payload.role === 'CLIENT') {
			// Check if the street field is not empty
			if (isStringValid(payload.street, 1)) {
				isValid = false;
				errors.street = 'Street can not be empty!';
			} else errors.street = '';

			// Check if the city field is not empty
			if (isStringValid(payload.city, 1)) {
				isValid = false;
				errors.city = 'City can not be empty!';
			} else errors.city = '';

			// Check if the state field is not empty
			if (isStringValid(payload.state, 1)) {
				isValid = false;
				errors.state = 'State can not be empty!';
			} else errors.state = '';

			// Check if the zip field is not empty
			if (isStringValid(payload.zip, 1)) {
				isValid = false;
				errors.zip = 'Zip can not be empty!';
			} else errors.zip = '';

			// Check if the country field is not empty
			if (isStringValid(payload.country, 1)) {
				isValid = false;
				errors.country = 'Country can not be empty!';
			} else errors.country = '';
		}

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
			if (
				payload.role !== 'SELLER' &&
				payload.password &&
				payload.confirmPassword === payload.password
			) {
				goToSecondPage = false;
				goToThirdPage = true;
				errors.role = '';
				errors.password = '';
				errors.confirmPassword = '';
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
				<div class="error font-bold text-sm">{errors.role}</div>
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
				<div class="error font-bold text-sm">{errors.password}</div>
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
				<div class="error font-bold text-sm">{errors.confirmPassword}</div>
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
					<Button rosy_brown={true} medium={true} disabled={signingIn} on:click={handleSubmit}>
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
				<div class="error font-bold text-sm">{errors.street}</div>
				<div class="error font-bold text-sm">{errors.city}</div>
				<div class="error font-bold text-sm">{errors.state}</div>
				<div class="error font-bold text-sm">{errors.zip}</div>
				<div class="error font-bold text-sm">{errors.country}</div>
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
