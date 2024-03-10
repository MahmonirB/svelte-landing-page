<script>
	import Label from '$components/Label.svelte';
	import { t } from '$lib/translation/i18n';
	import Icon from '$components/Icon.svelte';
</script>

<section class="w-full flex flex-col flex-grow justify-between text-center items-center">
	<Label type="heading" direction="center" customClass="mb-8 px-6">{$t('introduction.title')}</Label
	>
	<Label type="text" direction="center" customClass="mb-5 max-w-5xl px-6"
		>{$t('introduction.description')}</Label
	>

	<div class="grid grid-flow-col px-12">
		{#each { length: 3 } as _, index}
			<img
				src="src/assets/images/image_{index + 1}.svg"
				class="object-cover gap-2 p-2 max-w-full min-w-5 h-60"
				alt="image{index + 1}"
			/>
			{/each}
	</div>
	<span class="grid grid-flow-col overflow-hidden px-12">
		{#each { length: 3 } as _, index}
			<img
				src="src/assets/images/image_{index + 4}.svg"
				class="object-cover gap-2 p-2 max-w-full min-w-5 h-60"
				alt="image{index + 3}"
			/>
		{/each}
	</span>
</section>
