import type { Departure } from '$lib/bus-lines/types';
import { lublinConditions } from '../conditions';
import { parseBusDeparture } from '../../parse-bus-departure';

const parseLublinBusDeparture = parseBusDeparture(lublinConditions);

export const krasnystawDepartures: Departure[] = [
	parseLublinBusDeparture('06:40', ['V', 'D', 'd', 'n', 'u']),
	parseLublinBusDeparture('06:50', ['D']),
	parseLublinBusDeparture('07:30', ['1-5']),
	parseLublinBusDeparture('07:45', ['d', 'w', 'u', 'A']),
	parseLublinBusDeparture('08:00', ['E', '7']),
	parseLublinBusDeparture('08:15', ['d', 'w', 'u', 'A']),
	parseLublinBusDeparture('08:50', ['E', 'V']),
	parseLublinBusDeparture('09:00', ['d', 'w', 'u', '1-6']),
	parseLublinBusDeparture('09:30', ['V', 'D', 'd', 'n', 'u']),
	parseLublinBusDeparture('09:45', ['E', 'V']),
	parseLublinBusDeparture('10:20', ['E', 'V']),
	parseLublinBusDeparture('11:00', ['1-7']),
	parseLublinBusDeparture('11:20', ['1-5']),
	parseLublinBusDeparture('11:47', ['d', 'w', 'u', 'A']),
	parseLublinBusDeparture('12:05', ['d', 'w', 'u', 'A', '7']),
	parseLublinBusDeparture('12:30', ['d', 'w', 'u', '1-6']),
	parseLublinBusDeparture('12:20', ['d', 's', 'V']),
	parseLublinBusDeparture('13:00', ['d', 'V']),
	parseLublinBusDeparture('13:35', ['V', 'D', '6', '7', 'd', 'n', 'u']),
	parseLublinBusDeparture('13:50', ['1-5']),
	parseLublinBusDeparture('14:15', ['1-5']),
	parseLublinBusDeparture('14:35', ['E']),
	parseLublinBusDeparture('14:48', ['E']),
	parseLublinBusDeparture('15:00', ['D']),
	parseLublinBusDeparture('15:10', ['d', 'w', 'u', 'A']),
	parseLublinBusDeparture('15:20', ['1-5']),
	parseLublinBusDeparture('15:35', ['E', 'V']),
	// NOTE: ignore this bus line until 'c' is figured out
	// parseLublinBusDeparture('15:44', [
	// 	// TODO: figure out what this is supposed to be
	// 	// 'c',
	// 	'V',
	// ]),
	parseLublinBusDeparture('15:55', ['d', 'w', 'u', 'A']),
	parseLublinBusDeparture('16:05', ['E', 'V']),
	parseLublinBusDeparture('16:36', ['d', 'w', 'u', '1-7']),
	parseLublinBusDeparture('17:00', ['1-7']),
	parseLublinBusDeparture('17:25', ['V', 'D', '7', 'd', 'n', 'u']),
	parseLublinBusDeparture('17:55', ['E', '7']),
	parseLublinBusDeparture('18:45', ['C', 'm', 'V']),
	parseLublinBusDeparture('19:00', ['1-7']),
	parseLublinBusDeparture('19:25', ['d', 'w', 'u', 'A']),
];
