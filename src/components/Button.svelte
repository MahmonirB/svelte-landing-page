<script lang="ts">
	import 'uno.css';
	import Icon from './Icon.svelte';

	type ButtonType = 'primary' | 'secondary';
	type ButtonSize = 'small' | 'medium' | 'large';
	type ButtonIconPosition = 'left' | 'right';

	export let type: ButtonType = 'primary';
	export let size: ButtonSize = 'medium';
	export let icon: string = '';
	export let iconPosition: ButtonIconPosition = 'left';
	export let customClass: string = '';
	export let onClick: () => void;

	const buttonType = {
		primary: 'bg-primary text-white font-arial',
		secondary: 'border-1 border-gray-300 text-gray-700 font-arial'
	};

	const buttonSize = {
		small: 'font-400 text-sm py-2 px-4',
		medium: 'font-400 text-base py-3 px-5',
		large: 'text-lg w-lg py-5'
	};
	// Add Uno.css classes dynamically
	let classes = `flex items-center justify-center rounded-lg ${buttonType[type]} ${buttonSize[size]} ${customClass}`;
</script>

<button class={classes} on:click={onClick}>
	{#if icon && iconPosition === 'left'}
		<Icon {icon} />
	{/if}
	<slot />
	{#if icon && iconPosition === 'right'}
		<Icon {icon} />
	{/if}
</button>
