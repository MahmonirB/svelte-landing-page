<script lang="ts">
	import Label from './Label.svelte';
	import { t } from '$lib/translation/i18n';
	import Button from './Button.svelte';
	import Badge from './Badge.svelte';

	export let title: string = '';
	export let price: string = '';
	export let link: string = '';
	export let badge: string = '';

	function onClick() {
		if (link) window.open(link);
	}
</script>

<section class="flex flex-col items-center justify-center">
	{#if badge}
		<Badge label={badge} customClass="mt-5 mb-11" />
	{/if}
	<Label type="cardTitle" direction="center">{title}</Label>
	<Label type="cardTitle" direction="center">{price}</Label>
	<Button type="ghost" size="medium" icon="arrow-right" iconPosition="right" {onClick}
		>{$t('pricing.link')}</Button
	>
</section>
