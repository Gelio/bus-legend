import { Temporal } from 'temporal-polyfill';
import type { PageServerLoad } from './$types';
import { krasnystawDepartures } from '$lib/bus-lines/data/lublin/lines/krasnystaw';

export const load: PageServerLoad = async ({ url }) => {
	const date = getDate(url.searchParams.get('date'));

	const departures = krasnystawDepartures.filter((departure) =>
		departure.conditions.every((condition) => condition.filter(date)),
	);

	return {
		departures: departures.map((departure) => departure.time.toString({ smallestUnit: 'minute' })),
		date: date.toString(),
	};
};

function getDate(queryParamDate: string | null): Temporal.PlainDate {
	if (queryParamDate === null) {
		return Temporal.Now.plainDateISO();
	}

	try {
		const parsedDate = Temporal.PlainDate.from(queryParamDate);
		return parsedDate;
	} catch (error) {
		return Temporal.Now.plainDateISO();
	}
}
