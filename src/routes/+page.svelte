<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '$lib/services';
	import { onMount } from 'svelte';

	onMount(() => {
		// If the user hasn't logged in, then redirects to login page
		if (!isLoggedIn()) goto('/auth/login');
	});
</script>

<p>Dashboard</p>
