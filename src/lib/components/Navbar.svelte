<nav class="navbar">
	<ul class="nav-list">
		<li class="nav-item">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
				<path
					fill="currentColor"
					d="M352 124.5l-51.9-13c-6.5-1.6-11.3-7.1-12-13.8s2.8-13.1 8.7-16.1l40.8-20.4L294.4 28.8c-5.5-4.1-7.8-11.3-5.6-17.9S297.1 0 304 0H416h32 16c30.2 0 58.7 14.2 76.8 38.4l57.6 76.8c6.2 8.3 9.6 18.4 9.6 28.8c0 26.5-21.5 48-48 48H538.5c-17 0-33.3-6.7-45.3-18.7L480 160H448v21.5c0 24.8 12.8 47.9 33.8 61.1l106.6 66.6c32.1 20.1 51.6 55.2 51.6 93.1C640 462.9 590.9 512 530.2 512H496 432 32.3c-3.3 0-6.6-.4-9.6-1.4C13.5 507.8 6 501 2.4 492.1C1 488.7 .2 485.2 0 481.4c-.2-3.7 .3-7.3 1.3-10.7c2.8-9.2 9.6-16.7 18.6-20.4c3-1.2 6.2-2 9.5-2.2L433.3 412c8.3-.7 14.7-7.7 14.7-16.1c0-4.3-1.7-8.4-4.7-11.4l-44.4-44.4c-30-30-46.9-70.7-46.9-113.1V181.5v-57zM512 72.3c0-.1 0-.2 0-.3s0-.2 0-.3v.6zm-1.3 7.4L464.3 68.1c-.2 1.3-.3 2.6-.3 3.9c0 13.3 10.7 24 24 24c10.6 0 19.5-6.8 22.7-16.3zM130.9 116.5c16.3-14.5 40.4-16.2 58.5-4.1l130.6 87V227c0 32.8 8.4 64.8 24 93H112c-6.7 0-12.7-4.2-15-10.4s-.5-13.3 4.6-17.7L171 232.3 18.4 255.8c-7 1.1-13.9-2.6-16.9-9s-1.5-14.1 3.8-18.8L130.9 116.5z"
				/>
			</svg>
			<span class="link-text">PS4 Games</span>
		</li>
		<li class="nav-item">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
				<path
					fill="currentColor"
					d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9 .6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z"
				/>
			</svg>
			<span class="link-text">PS5 Games</span>
		</li>
		<li class="nav-item">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<path
					fill="currentColor"
					d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
				/>
			</svg>
			<span class="link-text">Logout</span>
		</li>
	</ul>
</nav>

<style>
	.navbar {
		position: fixed;
		background-color: var(--primary);
		overflow: scroll;
	}
	.nav-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		height: 100%;
	}
	.nav-item svg {
		width: 1.5rem;
		color: var(--white-50);
	}
	.nav-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 1rem 1.5rem;
		padding: 0.5rem;
		width: 80%;
		gap: 0.5rem;
	}
	.link-text {
		display: none;
		color: var(--white-50);
		font-size: 1.125rem;
		font-weight: bold;
		font-family: monospace;
	}
	/* Small Screens */
	@media only screen and (max-width: 600px) {
		.navbar {
			bottom: 1;
			width: 100vw;
			height: 4rem;
		}
		.nav-list {
			flex-direction: row;
		}
	}
	/* Large Screens */
	@media only screen and (min-width: 600px) {
		.navbar {
			top: 0;
			width: 5rem;
			height: 100vh;
		}
		.navbar:hover {
			width: 13rem;
		}
		.nav-list {
			flex-direction: column;
		}
		.nav-item:last-child {
			margin-top: auto;
		}
		.navbar:hover .link-text {
			display: inline;
		}
		.nav-item:hover,
		.nav-item:hover svg,
		.nav-item:hover .link-text {
			cursor: pointer;
			color: var(--primary);
			background-color: var(--white-50);
			border-radius: 0.25rem;
		}
	}
</style>
