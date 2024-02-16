<script>
	import Card from '../shared/Card.svelte';
	import Text from '../shared/Text.svelte';
	import Button from '../shared/Button.svelte';

	// @ts-ignore
	const getPayload = data => {
		const payload = data.detail;
		// const input = document.getElementById('password');
		// input?.focus();
		console.log(payload);
	};
</script>

<div class="min-h-screen m-auto bg-gray-100 flex items-center justify-center">
	<Card>
		<form class="w-96 my-0 mx-auto">
			<h1 class="text-3xl underline underline-offset-8 text-center font-bold font-mono">Login</h1>
			<Text type="text" name="email" on:textInput={getPayload}>Email</Text>
			<Text type="password" name="password" on:textInput={getPayload}>Password</Text>
			<Button rosy_brown={true}>LOGIN</Button>
			<p class="text-center font-bold font-mono my-2.5 mx-auto text-md">
				New to Tech Store? <a href="/auth/login">Sign Up</a>
			</p>
		</form>
	</Card>
</div>

<style>
	h1,
	p {
		color: #aa9fb1;
	}
	a {
		color: #cca7a2;
	}
</style>
