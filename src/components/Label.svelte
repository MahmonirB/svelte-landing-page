<script lang="ts">
	import Icon from './Icon.svelte';
	import 'uno.css';

	type LabelType = 'title' | 'heading' | 'text' | 'caption' | 'cardTitle' | 'cardPrice';
	type LabelDirection = 'center' | 'right' | 'left';

	export let type: LabelType = 'text';
	export let direction: LabelDirection = 'left';
	export let customClass: string = '';
	export let strike: boolean = false;
	export let icon: string = '';
	export let customIconClass: string = '';

	const labelType = {
		title: 'font-arial leading-14 text-6xl text-title',
		heading: 'font-arial leading-10 text-3xl text-title',
		text: 'font-arial leading-8 text-xl text-text',
		caption: 'font-arial leading-5 text-base text-text',
		cardTitle: 'font-arial text-2xl text-title',
		cardPrice: 'font-arial text-5xl text-title'
	};

	const labledirection = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right'
	};

	// Add Uno.css classes dynamically
	let classes = `flex ${labelType[type]} ${labledirection[direction]} ${customClass} ${strike ? 'line-through text-text' : ''}`;
</script>

<span class={classes}>
	{#if (icon)} <Icon {icon} customClass={customIconClass} /> {/if}
	<slot />
</span>
