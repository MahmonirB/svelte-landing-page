<script>
	import Label from '$components/Label.svelte';
	import { t } from '$lib/translation/i18n';
	import Button from '$components/Button.svelte';

	function onClick() {}
</script>

<section class="h-auto w-full flex flex-row items-center justify-end gap-10 flex-wrap pt-16">
	<span class="flex flex-col flex-grow justify-between text-center items-center pl-10">
		<Label type="title" direction="center" customClass="mb-8 max-w-3xl">{$t('home.title')}</Label>
		<Label type="text" direction="center" customClass="mb-5 max-w-3xl"
			>{$t('home.description')}</Label
		>
		<span class="flex flex-row max-w-3xl">
			<span class="mr-6">
				<Button type="primary" size="medium" icon="arrow-right" iconPosition="right" {onClick}>
					{$t('home.CTAStartButton')}
				</Button>
			</span>

			<Button type="secondary" size="medium" icon="video" {onClick}>
				{$t('home.CTAWatchButton')}
			</Button>
		</span>
	</span>

	<span class="flex flex-grow flex-wrap justify-center 2xl:justify-end">
		<img src="src/assets/images/hero.svg" alt="hero" />
	</span>
</section>
