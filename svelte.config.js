import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},
	csrf: {
		checkOrigin: false // turning off csfr but there should maybe be a way to set the ORIGIN so that we don't have to turn this off
	}
};

export default config;
