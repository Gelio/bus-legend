import type { CarriersMap, Departure, DepartureConditionsMap } from '$lib/bus-lines/types';
import { Temporal } from 'temporal-polyfill';

type ValidDepartureConditionSymbol<TConditionsMap extends DepartureConditionsMap> = Extract<
	keyof TConditionsMap,
	string
>;

export const parseBusDeparture =
	<TConditionsMap extends DepartureConditionsMap, TCarriersMap extends CarriersMap>(
		conditionsMap: TConditionsMap,
		carriersMap: TCarriersMap,
	) =>
	(
		time: string,
		conditions: ValidDepartureConditionSymbol<TConditionsMap>[],
		carrierNumber: Extract<keyof TCarriersMap, number>,
	): Departure => {
		return {
			time: Temporal.PlainTime.from(time),
			conditions: conditions.map((symbol) => ({
				symbol,
				// TODO: report error when such a condition does not exist
				filter: conditionsMap[symbol],
			})),
			// TODO: report error when the carrier does not exist
			carrier: carriersMap[carrierNumber],
		};
	};
