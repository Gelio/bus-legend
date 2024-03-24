import type { Departure } from '$lib/bus-lines/types';
import { lublinConditions } from '../conditions';
import { parseBusDeparture } from '../../parse-bus-departure';
import { lublinCarriers } from '../carriers';

const parseLublinBusDeparture = parseBusDeparture(lublinConditions, lublinCarriers);

export const krasnystawDepartures: Departure[] = [
	parseLublinBusDeparture('06:40', ['V', 'D', 'd', 'n', 'u'], 8),
	parseLublinBusDeparture('06:50', ['D'], 10),
	parseLublinBusDeparture('07:30', ['1-5'], 6),
	parseLublinBusDeparture('07:45', ['d', 'w', 'u', 'A'], 7),
	parseLublinBusDeparture('08:00', ['E', '7'], 10),
	parseLublinBusDeparture('08:15', ['d', 'w', 'u', 'A'], 7),
	parseLublinBusDeparture('08:50', ['E', 'V'], 9),
	parseLublinBusDeparture('09:00', ['d', 'w', 'u', '1-6'], 7),
	parseLublinBusDeparture('09:30', ['V', 'D', 'd', 'n', 'u'], 8),
	parseLublinBusDeparture('09:45', ['E', 'V'], 9),
	parseLublinBusDeparture('10:20', ['E', 'V'], 9),
	parseLublinBusDeparture('11:00', ['1-7'], 6),
	parseLublinBusDeparture('11:20', ['1-5'], 6),
	parseLublinBusDeparture('11:47', ['d', 'w', 'u', 'A'], 7),
	parseLublinBusDeparture('12:05', ['d', 'w', 'u', 'A', '7'], 7),
	parseLublinBusDeparture('12:30', ['d', 'w', 'u', '1-6'], 7),
	parseLublinBusDeparture('12:20', ['d', 's', 'V'], 9),
	parseLublinBusDeparture('13:00', ['d', 'V'], 9),
	parseLublinBusDeparture('13:35', ['V', 'D', '6', '7', 'd', 'n', 'u'], 8),
	parseLublinBusDeparture('13:50', ['1-5'], 6),
	parseLublinBusDeparture('14:15', ['1-5'], 6),
	parseLublinBusDeparture('14:35', ['E'], 10),
	parseLublinBusDeparture('14:48', ['E'], 10),
	parseLublinBusDeparture('15:00', ['D'], 10),
	parseLublinBusDeparture('15:10', ['d', 'w', 'u', 'A'], 7),
	parseLublinBusDeparture('15:20', ['1-5'], 6),
	parseLublinBusDeparture('15:35', ['E', 'V'], 9),
	// NOTE: ignore this bus line until 'c' is figured out
	// parseLublinBusDeparture('15:44', [
	// 	// TODO: figure out what this is supposed to be
	// 	// 'c',
	// 	'V',
	// ]),
	parseLublinBusDeparture('15:55', ['d', 'w', 'u', 'A'], 7),
	parseLublinBusDeparture('16:05', ['E', 'V'], 9),
	parseLublinBusDeparture('16:36', ['d', 'w', 'u', '1-7'], 7),
	parseLublinBusDeparture('17:00', ['1-7'], 6),
	parseLublinBusDeparture('17:25', ['V', 'D', '7', 'd', 'n', 'u'], 8),
	parseLublinBusDeparture('17:55', ['E', '7'], 10),
	parseLublinBusDeparture('18:45', ['C', 'm', 'V'], 9),
	parseLublinBusDeparture('19:00', ['1-7'], 6),
	parseLublinBusDeparture('19:25', ['d', 'w', 'u', 'A'], 7),
];
