import { Temporal } from 'temporal-polyfill';
import { describe, expect, it } from 'vitest';
import { krasnystawDepartures } from './krasnystaw';

describe('Krasnystaw departures', () => {
	it('all have working conditions', () => {
		const currentDate = Temporal.Now.plainDateISO();

		krasnystawDepartures.forEach((departure) =>
			departure.conditions.forEach((condition) => {
				expect
					.soft(
						() => {
							condition.filter(currentDate);
						},
						`Verifying condition "${condition.symbol}" for departure ${departure.time.toString({ smallestUnit: 'minute' })}`,
					)
					.not.toThrowError();
			}),
		);
	});

	it('all have defined carriers', () => {
		krasnystawDepartures.forEach((departure) => {
			expect
				.soft(
					departure.carrier,
					`Verifying carrier for departure ${departure.time.toString({ smallestUnit: 'minute' })}`,
				)
				.toBeDefined();
		});
	});
});
