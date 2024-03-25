<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '$lib/services';
	import { onMount } from 'svelte';
	import { Navbar, Header } from '$lib/components';
	import { fetchCategories, logout } from '$lib/api';

	// Tabs Management
	let tabs: any[] = [];
	let activeTab = '';

	// Products Listing Management
	let products: any[] = [
		{ id: 1, name: 'Test1' },
		{ id: 2, name: 'Test2' },
		{ id: 3, name: 'Test3' },
		{ id: 4, name: 'Test4' },
		{ id: 5, name: 'Test5' },
	];

	const tabChange = async (tab: { detail: string }) => {
		activeTab = tab.detail;

		if (activeTab.toLowerCase() === 'logout') {
			await logout();
			sessionStorage.removeItem('userData');
			goto('/auth/login');
		}
	};

	onMount(async () => {
		// Basic Authentication //
		// If the user hasn't logged in, then redirects to login page
		if (!isLoggedIn()) goto('/auth/login');

		// Navbar //
		// Fetch Categories
		const categories = await fetchCategories();
		// This will sort the categories alphabetically.
		categories.sort();
		// Set the tabs
		tabs = [...categories, 'Logout'];
		// Set the active tab
		activeTab = tabs[0];
	});
</script>

<title>Dashboard</title>
<div class="wrapper">
	<Navbar {tabs} {activeTab} on:tabChange={tabChange} />
	<main>
		<Header />
		<div class="product-list">
			{#each products as product (product.id)}
				<div class="product">
					<span class="title">{product.name}</span>
				</div>
			{/each}
		</div>
	</main>
</div>

<style>
	/* Page Container */
	.wrapper {
		margin: 0;
		padding: 0;
		background-color: var(--white-200);
		/* Use full height viewport */
		height: 100vh;
		/* Use full width viewport */
		width: 100vw;
		display: flex;
	}

	/* Houses the header and product listings */
	main {
		/* Use the full width of the viewport */
		width: 100%;
		/* Allow content to be scolled vertically */
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* Product listing grid */
	.product-list {
		padding: 1rem;
		margin-top: 3.5rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 5rem;
	}

	/* Individual product */
	.product {
		width: 20rem;
		height: 9rem;
		background-color: var(--white-50);
	}

	/* Small Screens */
	@media only screen and (max-width: 600px) {
		.wrapper {
			/* Navbar and main content should be parallel rows in the reverse order */
			flex-direction: column-reverse;
		}
	}

	/* Large Screens */
	@media only screen and (min-width: 600px) {
		.wrapper {
			/* Navbar and main content should be parallel columns */
			flex-direction: row;
		}

		main {
			/* Making space for the navbar */
			margin-left: 5rem;
		}
	}
</style>
