<script lang="ts">
	import 'uno.css';

	type LabelType = 'title' | 'text' | 'caption';
	type LabelDirection = 'center' | 'right' | 'left';

	export let type: LabelType = 'text';
	export let direction: LabelDirection = 'left';
	export let customClass: string = '';

	const labelType = {
		title: 'font-arial leading-14 text-6xl text-title',
		text: 'font-arial leading-8 text-xl text-text',
		caption: 'font-arial leading-5 text-base text-text'
	};

	const labledirection = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right'
	};

	// Add Uno.css classes dynamically
	let classes = `${labelType[type]} ${labledirection[direction]} ${customClass}`;
</script>

<span class={classes}>
	<slot />
</span>
