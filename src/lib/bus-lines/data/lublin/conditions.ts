import {
	august15th,
	corpusChristi,
	december24th,
	december25th,
	december26th,
	december31st,
	easterMonday,
	easterSaturday,
	easterSunday,
	january1st,
	january6th,
	may1st,
	may3rd,
	november11th,
	november1st,
	summerHolidays,
} from '$lib/bus-lines/holidays';
import type { DepartureConditionsMap } from '$lib/bus-lines/types';
import { Temporal } from 'temporal-polyfill';

// NOTE: last updated 2024-03-23
export const lublinConditions = {
	'1-5': (date) => date.dayOfWeek <= 5,
	'1-6': (date) => date.dayOfWeek !== 7,
	'1-7': () => true,
	'6': (date) => date.dayOfWeek === 6,
	'7': (date) => date.dayOfWeek === 7,
	A: (date) => date.dayOfWeek <= 5,
	C: (date) => date.dayOfWeek === 6 || date.dayOfWeek === 7 || isHoliday(date),
	D: (date) => date.dayOfWeek <= 5 && !isHoliday(date),
	d: (date) => {
		return (
			!january1st.equals(date) &&
			!easterSunday(date.year).equals(date) &&
			!easterMonday(date.year).equals(date) &&
			!december25th.equals(date) &&
			!december26th.equals(date)
		);
	},
	e: (date) => !isWithinSummerHolidays(date),
	E: (date) => date.dayOfWeek !== 7 && !isHoliday(date) && !easterSaturday(date.year).equals(date),
	f: (date) => isSchoolFreeDay(date),
	g: (date) => !december24th.equals(date),
	G: (date) => {
		return (
			[6, 7].includes(date.dayOfWeek) &&
			Temporal.PlainDate.compare(date, new Temporal.PlainDate(date.year, 7, 1)) >= 0 &&
			Temporal.PlainDate.compare(date, new Temporal.PlainDate(date.year, 4, 30)) <= 0
		);
	},
	w: (date) => !corpusChristi(date.year).equals(date),
	L: (date) => isWithinSummerHolidays(date),
	ł: (date) => !november1st.equals(date),
	l: (date) => !december31st.equals(date),
	m: (date) => !december24th.equals(date) && !december31st.equals(date),
	n: (date) =>
		!easterSaturday(date.year).equals(date) &&
		!december24th.equals(date) &&
		!december31st.equals(date),
	u: (date) => !may1st.equals(date) && !may3rd.equals(date) && !january6th.equals(date),
	s: (date) => !november1st.equals(date) && !november11th.equals(date) && !january6th.equals(date),
	S: (date) => !isSchoolFreeDay(date),
	/** Express line ("kurs przyśpieszony") */
	V: () => true,
} satisfies DepartureConditionsMap;

function plainDateWithin(
	date: Temporal.PlainDate,
	start: Temporal.PlainDate,
	end: Temporal.PlainDate,
): boolean {
	return Temporal.PlainDate.compare(date, start) >= 0 && Temporal.PlainDate.compare(date, end) <= 0;
}

function isWithinSummerHolidays(date: Temporal.PlainDate): boolean {
	const summerHolidaysThisYear = summerHolidays[date.year];
	if (!summerHolidaysThisYear) {
		throw new Error(`Summer holidays have not been entered yet for year ${date.year}`);
	}

	return plainDateWithin(date, summerHolidaysThisYear.start, summerHolidaysThisYear.end);
}

/**
 * Checks if the given date is a school holiday.
 *
 * Does not check if it is a public holiday (not just for schools).
 */
function isSchoolFreeDay(date: Temporal.PlainDate): boolean {
	// TODO: add:
	// * in "ferie zimowe"
	// * in "szkolne przerwy świąteczne"
	return isWithinSummerHolidays(date);
}

const fixedHolidays = [
	january1st,
	january6th,
	may1st,
	may3rd,
	august15th,
	november1st,
	november11th,
	december25th,
	december26th,
];

const movingHolidays = [easterSunday, easterMonday, corpusChristi];

function isHoliday(date: Temporal.PlainDate): boolean {
	return (
		fixedHolidays.some((holiday) => holiday.equals(date)) ||
		movingHolidays.some((holiday) => holiday(date.year).equals(date))
	);
}
