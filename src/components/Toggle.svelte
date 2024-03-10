<script lang="ts">
	import type { ChangeEventHandler } from "svelte/elements";

	export let leftLabel: string;
	export let rightLabel: string;
	export let name: string;
	export let checked: string;
	export let toggle: (value: 'monthly' | 'yearly') => any;
</script>

<span class="flex items-center justify-center my-3">
	<div class="ml-3 text-gray-700 font-medium">{leftLabel}</div>
	<input
		type="radio"
		{name}
		checked={checked === 'monthly'}
		on:change={toggle('monthly')}
	/>

	<div class="ml-3 text-gray-700 font-medium">{rightLabel}</div>
	<input
		type="radio"
		{name}
		checked={checked === 'yearly'}
		on:change={toggle('yearly')}
	/>
</span>
