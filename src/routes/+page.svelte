<script lang="ts">
	import { krasnystawDepartures } from '$lib/bus-lines/data/lublin/lines/krasnystaw';
	import { Temporal } from 'temporal-polyfill';

	let date = $state(Temporal.Now.plainDateISO().toString());

	let departuresOnDate = $derived.by(() => {
		if (date === '') {
			return [];
		}

		const plainDate = Temporal.PlainDate.from(date);
		return krasnystawDepartures.filter((departure) =>
			departure.conditions.every((condition) => condition.filter(plainDate)),
		);
	});
</script>

<input type="date" bind:value={date} />

<ul>
	{#each departuresOnDate as departure}
		<li>{departure.time.toString({ smallestUnit: 'minute' })}</li>
	{/each}
</ul>
