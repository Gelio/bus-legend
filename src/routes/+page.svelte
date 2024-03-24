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

<div class="flex justify-center">
	<div class="mx-5 mt-5 flex flex-col rounded-md bg-sky-50 px-20 pb-14 pt-5">
		<h2 class="max-w-52 text-balance text-2xl text-sky-700">
			{$t('departures', { values: { date: data.date } })}
		</h2>

		<form action="/" data-sveltekit-keepfocus class="my-4">
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

		<ul class="flex list-inside list-disc flex-col gap-2">
			{#each data.departures as departure}
				<li class="text-lg">{departure}</li>
			{/each}
		</ul>
	</div>
</div>
