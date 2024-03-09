<script lang="ts">
	import 'uno.css';
	import HomePage from './../pages/HomePage.svelte';
	import Clients from '../pages/Clients.svelte';
</script>

<slot>
	<HomePage />
	<Clients />
</slot>
