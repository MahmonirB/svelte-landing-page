<script lang="ts">
	import Button from '$components/Button.svelte';
	let email: string = '';
	let isValidEmail: boolean = false;

	const validateEmail = (input: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(input);
	};

	const handleInputChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		email = target.value;
		isValidEmail = validateEmail(email);
	};

	const onClick = () => {
		if (isValidEmail) {
			// Subscribe logic goes here
			alert('Subscribed successfully!');
		} else {
			alert('Please enter a valid email address.');
		}
	};
</script>

<span>
	<span class="flex flex-row">
		<input
			type="email"
			id="email"
			bind:value={email}
			on:input={handleInputChange}
			class="w-80 bg-background rounded-lg p-2 border border-gray-300"
		/>
		<Button type="primary" size="small" {onClick}>Subscribe</Button>
	</span>
	{#if !isValidEmail && email}
		<p class="error">Please enter a valid email address.</p>
	{/if}
</span>

<style>
	.error {
		color: red;
	}
</style>
