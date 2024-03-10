<script lang="ts">
	import Label from '$components/Label.svelte';
	import { t } from '$lib/translation/i18n';
	import PricingCard from '$components/PricingCard.svelte';
	import { postPricing } from '../routes/api/postPricing/+server';
	import Toggle from '$components/Toggle.svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	export const checked = writable('');
	export let data: any = writable();

	onMount(() => {
		checked.set('monthly');
	});

	function toggle(value: 'monthly' | 'yearly') {
		checked.update(() => value);
		postPricing({ data: { interval: value } });
	}

	postPricing({ data: { interval: checked ? 'monthly' : 'yearly' } })
		.then((res) => {
			if (res.data) data.update(() => res.data as any);
			else {
				data.update(() => ({
					starter: { amount: '29', unit: 'USD' },
					pro: { amount: '199', unit: 'USD' },
					platinum: { amount: '599', unit: 'USD' }
				}));
			}
		})
		.catch((err) => {
			console.log({ err });
		});
</script>

<section class="w-full flex flex-col flex-grow justify-between text-center items-center mb-48">
	<Label type="heading" direction="center" customClass="mb-8 px-6">{$t('introduction.title')}</Label
	>
	<Label type="text" direction="center" customClass="mb-5 max-w-5xl px-6"
		>{$t('introduction.description')}</Label
	>
	<Toggle name="interval" rightLabel="yearly" leftLabel="monthly" checked={$checked} {toggle} />
	<span class="flex flex-row items-end">
		<PricingCard
			title={$t('pricing.starter')}
			active={false}
			price={`$ ${$data?.starter?.amount || 29}`}
		/>
		<PricingCard title={$t('pricing.pro')} active={true} price={`$ ${$data?.pro?.amount || 199}`} />
		<PricingCard
			title={$t('pricing.platinum')}
			active={false}
			price={`$ ${$data?.platinum?.amount || 599}`}
		/>
	</span>
</section>
