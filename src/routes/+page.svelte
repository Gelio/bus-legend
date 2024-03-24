<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}
	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Buses from Lublin to Krasnystaw on {data.date}</title>
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
		<button type="submit">Submit</button>
	</noscript>
</form>

<h2 class="my-4 text-2xl text-sky-700">Departures on {data.date}</h2>

<ul>
	{#each data.departures as departure}
		<li>{departure}</li>
	{/each}
</ul>
