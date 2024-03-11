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

<title>Dashboard</title>
<div class="m-0 p-0 flex flex-row bg-gray-200">
	<Sidebar />
	<div class="min-h-screen w-screen bg-gray-50">
		<p class="w-paragraphs">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores necessitatibus animi,
			pariatur ad nesciunt obcaecati? Non accusantium a nisi minima nam ipsum aperiam omnis ut
			reiciendis enim, numquam, deserunt, repellat consequuntur? Ipsam ea sed accusantium animi
			rerum perferendis blanditiis dignissimos, inventore, odit nulla ducimus eveniet alias
			obcaecati necessitatibus saepe sequi!
		</p>
	</div>
</div>
