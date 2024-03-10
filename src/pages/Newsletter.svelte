<script lang="ts">
	import EmailInput from './../components/EmailInput.svelte';
	import Label from '$components/Label.svelte';
	import { t } from '$lib/translation/i18n';
</script>

<section class="w-full flex flex-col flex-grow justify-between text-center items-center mb-96">
	<Label type="heading" direction="center" customClass="mb-8 px-6">{$t('newsletter.title')}</Label>
	<Label type="text" direction="center" customClass="mb-5 max-w-3xl px-6"
		>{$t('newsletter.description')}</Label
	>

	<EmailInput />
	<Label type="caption">
		{$t('newsletter.caption')}
		<a href="" class="text-blue-400">{$t('newsletter.link')}</a>
	</Label>
</section>
