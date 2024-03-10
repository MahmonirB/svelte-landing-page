<script lang="ts">
	import Label from '$components/Label.svelte';
	import Icon from '$components/Icon.svelte';

	export let icon: string = '';
	export let title: string = '';
	export let description: string = '';
</script>

<section class="flex flex-col flex-grow text-left justify-between pr-6">
	<Icon {icon} customClass="w-12 h-12 rounded-6 bg-background p-2 my-4" />
	<Label type="text" direction="left" customClass="mb-2 text-bold text-title">{title}</Label>
	<Label type="caption" direction="left" customClass="mb-2 max-w-96">{description}</Label>
</section>
