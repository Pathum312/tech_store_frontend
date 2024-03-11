<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '$lib/services';
	import { onMount } from 'svelte';

	onMount(() => {
		// If the user hasn't logged in, then redirects to login page
		if (!isLoggedIn()) goto('/auth/login');
	});
</script>

<title>Dashboard</title>
<div class="w-screen h-screen bg-gray-200 flex items-center justify-center">
	<div class="text-container bg-gray-50 flex justify-center flex-col items-center">
		<p class="font-extrabold font-whisper text-center text-title mt-5">Dashboard</p>
		<p
			class="content text-center font-cursive text-secondary hover:text-primary my-5 mx-6 cursor-wait"
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis vero id eveniet
			asperiores quis, praesentium obcaecati voluptates esse, ad dolorem recusandae harum molestiae.
			Ab?
		</p>
	</div>
</div>

<style>
	:root {
		--step--2: clamp(0.7813rem, 0.6636rem + 0.5885vi, 1.12rem);
		--step--1: clamp(0.9375rem, 0.7768rem + 0.8035vi, 1.4rem);
		--step-0: clamp(1.125rem, 0.9078rem + 1.0858vi, 1.75rem);
		--step-1: clamp(1.35rem, 1.059rem + 1.4549vi, 2.1875rem);
		--step-2: clamp(1.62rem, 1.2328rem + 1.9359vi, 2.7344rem);
		--step-3: clamp(1.944rem, 1.4319rem + 2.5606vi, 3.418rem);
		--step-4: clamp(2.3328rem, 1.6589rem + 3.3697vi, 4.2725rem);
		--step-5: clamp(2.7994rem, 1.9164rem + 4.4147vi, 5.3406rem);
	}
	.content {
		font-size: var(--step--1);
		max-width: 60ch;
		/* padding: 1.15rem 1.25rem; */
	}
	.text-container {
		width: min(70%, 50rem);
		min-height: 50%;
		margin-inline: auto;
		border: 3px solid black;
	}
</style>
