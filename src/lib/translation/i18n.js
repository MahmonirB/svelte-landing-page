import { writable, derived } from 'svelte/store';
import dictionary from './dictionary';

export const locale = writable('en');

const localizedDictionary = derived(locale, ($locale) => dictionary[$locale]);

export const t = derived(localizedDictionary, ($localizedDictionary) => {
	return (path) => getEntryReduce(path, $localizedDictionary);
});

function getEntryReduce(path, dictionary) {
	const keys = path.split('.');
	return keys.reduce((dict, key) => dict[key], dictionary);
}
