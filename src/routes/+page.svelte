<script lang="ts">
	import Newsletter from '$pages/Newsletter.svelte';
	import Features from '$pages/Features.svelte';
	import Introduction from '$pages/Introduction.svelte';
	import 'uno.css';
	import HomePage from '$pages/HomePage.svelte';
	import Clients from '$pages/Clients.svelte';
</script>

<slot>
	<HomePage />
	<Clients />
	<Introduction />
	<Features />
	<Newsletter />
</slot>
