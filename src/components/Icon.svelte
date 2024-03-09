<script lang="ts">
	export let icon: string;
	export let customClass: string = '';

	const classes = customClass ?? 'ml-1 mr-1 w-4 h-4';
</script>

{#if icon}
	<img src={`src/assets/icons/${icon}.svg`} alt="icon" class={classes} />
{/if}
