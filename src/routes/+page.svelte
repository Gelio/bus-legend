<script lang="ts">
	import type { PageData } from './$types';
	import { t } from 'svelte-intl-precompile';

	interface Props {
		data: PageData;
	}
	let { data }: Props = $props();
</script>

<!--
NOTE: ESLint prints false-positives when using $t
https://github.com/sveltejs/eslint-plugin-svelte/issues/652
-->

<svelte:head>
	<title>
		{$t('title', { values: { date: data.date } })}
	</title>
</svelte:head>

<form action="/" data-sveltekit-keepfocus>
	<input
		type="date"
		name="date"
		value={data.date}
		onchange={(event) => {
			if (event.currentTarget.value !== '') {
				document.forms[0].requestSubmit();
			}
		}}
	/>
	<noscript>
		<button type="submit">{$t('submit')}</button>
	</noscript>
</form>

<h2 class="my-4 text-2xl text-sky-700">
	{$t('departures', { values: { date: data.date } })}
</h2>

<ul>
	{#each data.departures as departure}
		<li>{departure}</li>
	{/each}
</ul>
