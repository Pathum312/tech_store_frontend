<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '$lib/services';
	import { onMount } from 'svelte';
	import { Sidebar } from '$lib/components';

	onMount(() => {
		// If the user hasn't logged in, then redirects to login page
		if (!isLoggedIn()) goto('/auth/login');
	});
</script>

<div class="min-h-screen m-auto bg-gray-100 flex flex-row">
	<Sidebar amethyst={true} />
	<p>Dashboard</p>
</div>
