import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess'
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: seqPreprocessor([preprocess(), preprocessThrelte()])
};

export default config;
