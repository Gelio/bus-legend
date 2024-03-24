import { Temporal } from 'temporal-polyfill';
import { gregorianEaster } from 'date-easter';

export const january1st = new Temporal.PlainMonthDay(1, 1);
export const january6th = new Temporal.PlainMonthDay(1, 6);

export const may1st = new Temporal.PlainMonthDay(5, 1);
export const may3rd = new Temporal.PlainMonthDay(5, 3);

export const august15th = new Temporal.PlainMonthDay(8, 15);

export const november1st = new Temporal.PlainMonthDay(11, 1);
export const november11th = new Temporal.PlainMonthDay(11, 11);

export const december24th = new Temporal.PlainMonthDay(12, 24);
export const december25th = new Temporal.PlainMonthDay(12, 25);
export const december26th = new Temporal.PlainMonthDay(12, 26);
export const december31st = new Temporal.PlainMonthDay(12, 31);

export const easterSunday = (year: number) => {
	const easterDate = gregorianEaster(year);
	return new Temporal.PlainDate(
		year,
		// NOTE: the month is 1-based, contrary to the JS Date API
		easterDate.month,
		easterDate.day
	);
};

export const easterSaturday = (year: number) => easterSunday(year).subtract({ days: 1 });
export const easterMonday = (year: number) => easterSunday(year).add({ days: 1 });

export const corpusChristi = (year: number) => easterSunday(year).add({ days: 60 });

export const summerHolidays: Record<
	number,
	{ start: Temporal.PlainDate; end: Temporal.PlainDate } | undefined
> = {
	2024: {
		start: new Temporal.PlainDate(2024, 6, 22),
		end: new Temporal.PlainDate(2024, 8, 31)
	}
};
