import type { LayoutServerLoad } from './$types';

import { getLocaleFromAcceptLanguageHeader } from 'svelte-intl-precompile';

export const load: LayoutServerLoad = async ({ request }) => {
	const header = request.headers.get('accept-language');
	const initialLocale = getLocaleFromAcceptLanguageHeader(header);

	return {
		initialLocale,
	};
};
