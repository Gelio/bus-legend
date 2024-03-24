import type { Departure, DepartureConditionsMap } from '$lib/bus-lines/types';
import { Temporal } from 'temporal-polyfill';

type ValidDepartureConditionSymbol<TConditionsMap extends DepartureConditionsMap> = Extract<
	keyof TConditionsMap,
	string
>;

export const parseBusDeparture =
	<TConditionsMap extends DepartureConditionsMap>(conditionsMap: TConditionsMap) =>
	(time: string, conditions: ValidDepartureConditionSymbol<TConditionsMap>[]): Departure => {
		return {
			time: Temporal.PlainTime.from(time),
			conditions: conditions.map((symbol) => ({
				symbol,
				// TODO: report error when such a condition does not exist
				filter: conditionsMap[symbol],
			})),
			carrier: { name: 'TODO', phoneNumber: 'TODO' },
		};
	};
