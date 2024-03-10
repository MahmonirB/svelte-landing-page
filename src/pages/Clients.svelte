<script>
	import Label from '$components/Label.svelte';
	import { t } from '$lib/translation/i18n';
	import Icon from '$components/Icon.svelte';
</script>

<section class="flex flex-col justify-center items-center my-24 mb-30">
	<Label type="heading" direction="center" customClass="mb-9">{$t('clients.title')}</Label>
	<span class="flex flex-row justify-center items-center flex-wrap px-12">
		<Icon icon="google" customClass="w-32 h-10 mx-10 my-2" />
		<Icon icon="microsoft" customClass="w-32 h-10 mx-10 my-2" />
		<Icon icon="spotify" customClass="w-32 h-10 mx-10 my-2" />
		<Icon icon="mailchimp" customClass="w-32 h-10 mx-10 my-2" />
	</span>
</section>
