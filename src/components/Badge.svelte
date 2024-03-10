<script lang="ts">
	export let label: string = '';
	export let customClass: string = '';
</script>

<span
	class="flex justify-center items-center w-28 h-6 text-xs text-arial rounded-4 bg-background text-badge {customClass}"
>
	{label}
</span>
