<script lang="ts">
	import { Button, Card, Text } from '../shared/components';

	let payload = {
		username: undefined,
		password: undefined,
	};
	$: loggingIn = false;

	const getPayload = (data: any) => {
		const { name, value } = data.detail;
		if (name === 'email') payload.username = value;
		if (name === 'password') payload.password = value;
		if (payload.username && payload.password) loggingIn = true;
	};

	const handleInput = (event: any) => {
		console.log(event);
		payload.username = event.target.value;
		// dispatch('textInput', { name, value });
	};

	const login = async () => {
		console.log('Logging in...');
		console.log(payload);
	};

	$: console.log(payload, loggingIn);
</script>

<div class="min-h-screen m-auto bg-gray-100 flex items-center justify-center">
	<Card>
		<form class="w-96 my-0 mx-auto" on:submit|preventDefault={login}>
			<h1 class="text-3xl underline underline-offset-8 text-center font-bold font-mono">
				Tech Store
			</h1>
			<Text type="text" name="email" value={payload.username}>Email</Text>
			<Text type="password" name="password" value={payload.password}>Password</Text>
			<Button rosy_brown={true} on:click={login} disabled={loggingIn}>
				{loggingIn ? 'LOGGING IN...' : 'LOGIN'}
			</Button>
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
