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
			background: '#E5E7EB',
			badge: '#1E429F'
		},
		fontFamily: {
			arial: ['Arial', 'sans-serif']
		},
		screens: {
			sm: '640px',

			md: '768px',

			lg: '1024px',

			xl: '1280px',

			'2xl': '1421px'
		},
		spacing: {
			'72': '18rem',
			'84': '21rem',
			'96': '24rem',
			'240': '60rem',
			'400': '100rem',
			'456': '114rem',
			'494': '123rem',
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
