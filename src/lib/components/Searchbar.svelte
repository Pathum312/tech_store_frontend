<form action="" class="search-bar">
	<input type="text" name="search" id="search" placeholder="Search" />
	<button type="submit">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path
				fill="currentColor"
				d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
			/>
		</svg>
	</button>
</form>

<style>
	.search-bar {
		height: 2.5rem;
		margin: 0.65rem 0;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: var(--white-200);
	}

	.search-bar input {
		flex: 1;
		border: 0;
		outline: 0;
		width: 90%;
		padding: 0.65rem 1rem;
		background: transparent;
		color: var(--secondary);
		font-family: var(--ff-base);
	}

	.search-bar button {
		height: 100%;
		border-radius: 0 0.5rem 0.5rem 0;
		padding: auto 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--primary);
	}

	svg {
		width: 1rem;
		color: var(--white-50);
	}

	/* Small Screens */
	@media only screen and (max-width: 600px) {
        .search-bar {
			width: 15rem;
		}

        .search-bar button {
            width: 20%;
        }
	}

	/* Large Screens */
	@media only screen and (min-width: 600px) {
		.search-bar {
			width: 25rem;
		}

        .search-bar button {
            width: 10%;
        }
	}
</style>
