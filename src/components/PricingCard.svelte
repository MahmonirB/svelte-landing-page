<script lang="ts">
	import Button from './Button.svelte';
	import PricingCardHeader from './PricingCardHeader.svelte';
	import { t } from '$lib/translation/i18n';
	import Label from './Label.svelte';

	export let price: string = '';
	export let active: boolean = false;
	export let title: string = '';

	function onStart() {}

	const list = [
		{
			icon: 'credit-card',
			text: 'toolsText',
			strike: false
		},
		{
			icon: 'paper-airplane',
			text: 'featureText',
			strike: false
		},
		{
			icon: 'video',
			text: 'reportText',
			strike: false
		},
		{
			icon: 'chat',
			text: 'chatText',
			strike: true
		}
	];
</script>

<section
	class="flex flex-col border w-100 {active
		? 'border-primary h-123'
		: 'border-background h-100'} p-8 mr-10 mb-4"
>
	<PricingCardHeader {title} {price} link="google.com" badge={active ? 'Most Popular' : ''} />
	<Button
		type="primary"
		size="medium"
		onClick={onStart}
		customClass="w-full mb-4 {active ? 'bg-primary' : 'bg-title'}"
		>{$t('pricing.startButton')}</Button
	>
	{#each list as item}
		<Label type="caption" icon={item.icon} customIconClass="mb-3 mr-2" customClass="mb-3" strike={item.strike}
			>{$t(`pricing.${item.text}`)}}</Label
		>
	{/each}
</section>
