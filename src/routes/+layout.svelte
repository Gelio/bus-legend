<script lang="ts">
	import '../app.css';

	import { addMessages, init, getLocaleFromNavigator } from 'svelte-intl-precompile';

	// NOTE: importing from $locales is valid, TS does not recognize it
	// https://github.com/cibernox/svelte-intl-precompile/issues/60
	import en from '$locales/en';
	import pl from '$locales/pl';

	interface Props {
		data: import('./$types').LayoutData;
	}
	let { data }: Props = $props();

	addMessages('en', en);
	addMessages('pl', pl);
	init({
		initialLocale: data.initialLocale ?? getLocaleFromNavigator() ?? 'en',
		fallbackLocale: 'en',
	});
</script>

<slot />
