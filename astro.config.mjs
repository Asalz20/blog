// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
// import syntaxTheme from './orange-theme';

export default defineConfig({
	site: 'https://alexsalazar.com',
	redirects: {
		'/': '/blog',
		'/projects/1': '/blog',
	},
	markdown: {
		// shikiConfig: {
		// 	theme: syntaxTheme,
		// },
	},
	experimental: {
		contentIntellisense: true,
	},
	integrations: [mdx(), sitemap(), tailwind()],
});
