<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '$lib/services';
	import { onMount } from 'svelte';
	import { Sidebar, Header } from '$lib/components';

	onMount(() => {
		// If the user hasn't logged in, then redirects to login page
		if (!isLoggedIn()) goto('/auth/login');
	});
</script>

<title>Dashboard</title>
<div class="min-h-screen m-auto bg-gray-200 flex flex-row">
	<Sidebar amethyst={true} />
	<Header>
		<p class="font-bold font-mono text-xl">Dashboard</p>
	</Header>
</div>
