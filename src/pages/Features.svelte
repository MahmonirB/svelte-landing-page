<script>
	import FeatureItem from './../components/FeatureItem.svelte';
	import Label from '$components/Label.svelte';
	import { t } from '$lib/translation/i18n';
	import Icon from '$components/Icon.svelte';
</script>

<section class="w-full flex flex-col flex-grow justify-between items-left my-24 p-12">
	<Label type="heading" direction="left" customClass="mb-8 px-6">{$t('features.title')}</Label>
	<Label type="text" direction="left" customClass="mb-5 max-w-5xl px-6"
		>{$t('features.description')}</Label
	>
	<span class="w-full flex flex-row flex-wrap px-4">
		<FeatureItem
			icon="presentation"
			title={$t('features.marketing.title')}
			description={$t('features.marketing.description')}
		/>
		<FeatureItem
			icon="academic-cap"
			title={$t('features.legal.title')}
			description={$t('features.legal.description')}
		/>
		<FeatureItem
			icon="briefcase"
			title={$t('features.business.title')}
			description={$t('features.business.description')}
		/>
	</span>
</section>
