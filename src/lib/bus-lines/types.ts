import type { Temporal } from 'temporal-polyfill';

export interface BusLine {
	destination: string;
	departures: Departure[];
}

export interface Departure {
	time: Temporal.PlainTime;
	carrier: Carrier;
	conditions: DepartureCondition[];
}

export interface Carrier {
	name: string;
	phoneNumber: string;
}

/** Whether a bus should depart on a given date */
export interface DepartureCondition {
	symbol: string;
	filter: (date: Temporal.PlainDate) => boolean;
}

export type DepartureConditionsMap = {
	[symbol: string]: DepartureCondition['filter'];
};
