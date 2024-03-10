<script lang="ts">
	import Features from './../pages/Features.svelte';
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
</slot>
