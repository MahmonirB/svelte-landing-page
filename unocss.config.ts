import { presetUno } from 'unocss';
import presetIcons from '@unocss/preset-icons';
import { VitePluginConfig } from '@unocss/vite';

const unoCSSConfig: VitePluginConfig = {
	presets: [presetIcons(), presetUno({ dark: 'media' })],
	theme: {
		colors: {
			primary: '#1C64F2',
			title: '#111928',
			text: '#6B7280',
			bg: '#E5E7EB'
		}
	},
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html|stories.ts)($|\?)/,
				'src/**/*.{js,ts}'
			]
		}
	}
};

export default unoCSSConfig;
