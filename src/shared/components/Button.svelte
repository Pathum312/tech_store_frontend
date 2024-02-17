<script>
	export let rosy_brown = false;
	export let disabled = false;
</script>

<button
	class="cursor-pointer font-bold font-mono w-full md:h-10 sm:h-10 rounded-md py-2"
	class:rosy_brown
	on:click
	{disabled}
>
	<slot />
</button>

<style>
	.rosy_brown {
		background: #cca7a2;
		color: rgb(250 250 250);
	}
	.rosy_brown:hover {
		background: rgb(250 250 250);
		color: #cca7a2;
		border: 2px solid #cca7a2;
	}
</style>
