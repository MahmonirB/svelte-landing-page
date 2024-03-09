<script>
	import Label from '../components/Label.svelte';
	import { t } from '$lib/translation/i18n';
	import Button from '../components/Button.svelte';

	function onClick() {}
</script>

<section
	class="h-full w-full flex flex-row items-center justify-end gap-10 flex-wrap sm:flex-wrap md:flex-no-wrap lg:flex-no-wrap xl:flex-no-wrap 2xl:flex-no-wrap"
>
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

	<span
		class="flex flex-grow sm:justify-center md:justify-center lg:justify-end xl:justify-end 2xl:justify-end"
	>
		<img src="src/assets/images/hero.svg" alt="hero" />
	</span>
</section>
