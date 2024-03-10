<script lang="ts">
	import Button from '$components/Button.svelte';
	import { validateEmail } from '../utils/validateEmail';
	import { validateEmailService } from '../routes/api/validateEmail/+server';
	let email: string = '';
	let isValidEmail: boolean = false;

	const handleInputChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		email = target.value;
		isValidEmail = validateEmail(email);
	};

	const onClick = async () => {
		const res: any = await validateEmailService({ data: { email } });
		if (res?.body?.isValidEmail) {
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
		<p class="text-red-400 text-arial m-1">Please enter a valid email address.</p>
	{/if}
</span>

