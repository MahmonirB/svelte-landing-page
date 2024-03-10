<script lang="ts">
	import Newsletter from '$pages/Newsletter.svelte';
	import Features from '$pages/Features.svelte';
	import Introduction from '$pages/Introduction.svelte';
	import 'uno.css';
	import HomePage from '$pages/HomePage.svelte';
	import Clients from '$pages/Clients.svelte';
	import Pricing from '$pages/Pricing.svelte';
	import Footer from '$pages/Footer.svelte';
</script>

<slot>
	<HomePage />
	<Clients />
	<Introduction />
	<Features />
	<Pricing />
	<Newsletter />
	<Footer />
</slot>
