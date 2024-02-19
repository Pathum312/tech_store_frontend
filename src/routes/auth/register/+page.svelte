<script lang="ts">
	import { Card, RegisterForm } from '../../../shared/components';

	let signingIn = false;

	const handleSubmit = (data: any) => {
		const { email, password, role } = data.detail;
		if (role === 'SELLER' && email && password) {
			signingIn = true;
			console.log(email, password);
		}
	};
</script>

<div class="min-h-screen m-auto bg-gray-100 flex items-center justify-center">
	<Card>
		<RegisterForm on:submit={handleSubmit} {signingIn} />
	</Card>
</div>
