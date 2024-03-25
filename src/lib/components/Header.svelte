<script lang="ts">
	import Searchbar from './Searchbar.svelte';
</script>

<div class="wrapper">
	<p class="product-name">Tech Store</p>
	<Searchbar />
	<div class="utils">
		<button>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
				<path
					fill="currentColor"
					d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
				/>
			</svg>
		</button>
		<button>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				<path
					fill="currentColor"
					d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
				/>
			</svg>
		</button>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		background-color: var(--white-50);
		top: 0;
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.utils {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		gap: 0.5rem;
	}

	.utils button {
		background-color: var(--white-50);

		border-radius: 6rem;
		border: 0.25rem solid var(--white-200);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--primary);
	}

	.utils button:hover {
		background-color: var(--primary);
		color: var(--white-50);
	}

	.utils button svg {
		width: 1rem;
		height: 1rem;
	}

	.product-name {
		font-family: var(--ff-accent);
		font-weight: bold;
		font-size: var(--fs-heading-0);
		/* color: var(--clr-third-200); */
	}

	/* Small Screens */
	@media only screen and (max-width: 600px) {
		.product-name {
			margin-left: 0.5rem;
			/* font-size: 0.25rem; */
		}

		.utils {
			margin-left: 0.5rem;
			margin-right: 0.5rem;
		}

		.utils button {
			height: 2.25rem;
			width: 2.25rem;
		}
	}

	/* Large Screens */
	@media only screen and (min-width: 600px) {
		.product-name {
			margin-left: 4rem;
		}

		.utils {
			margin-right: 4rem;
			margin-left: 1rem;
		}

		.utils button {
			height: 2.5rem;
			width: 2.5rem;
		}
	}
</style>
