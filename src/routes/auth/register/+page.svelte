<script lang="ts">
	import { Card, RegisterForm } from '$lib/components';
	import { register } from '$lib/api';
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '$lib/services';
	import { onMount } from 'svelte';

	onMount(() => {
		// If has logged in then go to the dashboard
		if (isLoggedIn()) goto('/');
	});

	let signingIn = false;

	const handleSubmit = async (data: any) => {
		const { email, password } = data.detail;
		if (email && password) {
			signingIn = true;
			try {
				await register(data.detail);
				goto('/auth/login');
			} catch (err: any) {
				signingIn = false;
				alert(err.response.data.error);
			}
		}
	};
</script>

<div class="min-h-screen m-auto bg-gray-100 flex items-center justify-center">
	<Card>
		<RegisterForm on:submit={handleSubmit} {signingIn} />
	</Card>
</div>
