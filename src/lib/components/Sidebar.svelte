<script lang="ts">
	export let amethyst = false;
</script>

<div
	class="min-h-screen flex flex-col justify-between w-1/12 items-center shadow-2xl"
	class:amethyst
>
	<p class="cursive-font font-bold mt-4 text-xl">Tech Store</p>
	<p class="text-lg mb-4 font-bold font-mono">Log out</p>
</div>

<style>
	.amethyst {
		background-color: #cca7a2;
		color: rgb(250 250 250);
	}
	.cursive-font {
		font-family: 'Dancing Script', cursive;
	}
</style>
