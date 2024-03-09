<script lang="ts">
	import 'uno.css';
	import { t } from '$lib/translation/i18n';
	import HomePage from './../pages/HomePage.svelte';
</script>

<section class="h-full w-full flex flex-col items-center justify-center gap-10">
	<h1 class="text-4xl font-bold max-w-4xl px-8">
		{$t('home.title')}<br />
		<HomePage />
	</h1>
</section>
