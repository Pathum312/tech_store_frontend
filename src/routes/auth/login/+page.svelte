<script lang="ts">
	import { Card, LoginForm } from '$lib/components';
	import { login } from '$lib/api';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { isLoggedIn } from '$lib/services';

	onMount(() => {
		// If has logged in then go to the dashboard
		if (isLoggedIn()) goto('/');
	});

	let loggingIn = false;

	const handleSubmit = async (data: any) => {
		const { email, password } = data.detail;
		if (email && password) {
			loggingIn = true;
			try {
				const response = await login({ email, password });
				sessionStorage.setItem('userData', JSON.stringify(response.data));
				goto('/');
			} catch (err: any) {
				loggingIn = false;
				alert(err.response.data.error);
			}
		}
	};
</script>

<div class="min-h-screen m-auto bg-gray-100 flex items-center justify-center">
	<Card>
		<LoginForm on:submit={handleSubmit} {loggingIn} />
	</Card>
</div>
