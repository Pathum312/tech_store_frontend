<script lang="ts">
	import { LogoutIcon } from '$lib';
	export let amethyst = false;
</script>

<div
	class="min-h-screen flex flex-col justify-between w-1/12 items-center shadow-2xl"
	class:amethyst
>
	<p class="cursive-font font-bold mt-4 text-xl">Tech Store</p>
	<div class="flex flex-row justify-center w-3/4 mb-4 test rounded items-center">
		<LogoutIcon />
		<p class="text-lg font-bold font-mono">Logout</p>
	</div>
</div>

<style>
	.amethyst {
		background-color: #cca7a2;
		color: rgb(250 250 250);
	}
	.cursive-font {
		font-family: 'Dancing Script', cursive;
	}
	.test:hover {
		background-color: rgb(250 250 250);
		fill: #cca7a2;
		color: #cca7a2;
	}
</style>
