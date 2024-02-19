<script>
	export let rosy_brown = false;
	export let full = false;
	export let medium = false;
	export let quater = false;
	export let disabled = false;
</script>

<button
	class="cursor-pointer font-bold font-mono md:h-10 sm:h-10 rounded-md py-2 px-2"
	class:rosy_brown
	class:full
	class:medium
	class:quater
	on:click
	on:mousedown
	on:keydown
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
	.full {
		width: 100%;
	}
	.medium {
		width: 50%;
	}
	.quater {
		width: 25%;
	}
</style>
