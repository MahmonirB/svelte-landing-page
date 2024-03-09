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
		},
		fontFamily: {
			arial: ['Arial', 'sans-serif']
		},
		// breakpoints: {
		// 	'mobile': '640px',
		// 	'tablet': '960px',
		// 	'desktop': '1200px',
		//   },
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
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
