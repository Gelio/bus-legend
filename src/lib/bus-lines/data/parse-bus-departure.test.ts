import { describe, expect, it } from 'vitest';
import { parseBusDeparture } from './parse-bus-departure';
import { Temporal } from 'temporal-polyfill';
import type { DepartureConditionsMap } from '../types';

describe(`${parseBusDeparture.name}`, () => {
	const departureConditions = {
		'1-5': (date) => date.dayOfWeek <= 5,
		'7': (date) => date.dayOfWeek === 7,
	} satisfies DepartureConditionsMap;

	it('returns a working departure', () => {
		const departure = parseBusDeparture(departureConditions)('07:30', ['1-5', '7']);

		expect(
			departure.time.toString({
				smallestUnit: 'minute',
			}),
		).toEqual('07:30');

		expect(departure.conditions).toHaveLength(2);

		const someFriday = new Temporal.PlainDate(2024, 3, 22);
		const firstConditionMet = departure.conditions[0].filter(someFriday);
		expect(firstConditionMet).toBe(true);

		const secondConditionMet = departure.conditions[1].filter(someFriday);
		expect(secondConditionMet).toBe(false);
	});
});
