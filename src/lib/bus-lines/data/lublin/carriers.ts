import type { CarriersMap } from '$lib/bus-lines/types';

// NOTE: last updated 2024-03-23
export const lublinCarriers = {
	[1]: { name: 'Przewóz Osób Ryszard Szanfisz', phoneNumber: '504-064-331' },
	[2]: { name: 'Henryk Dziwisz', phoneNumber: '660-042-062' },
	[3]: { name: 'EURO-BUS Przewozy Pasażerskie Janusz Dębicki', phoneNumber: '81 752-16-85' },
	[4]: { name: 'Supertransport Arkadiusz Łagoźny', phoneNumber: '603-793-232' },
	[5]: { name: 'Transport drogowy osobowo-towarowy Małgorzata Walas', phoneNumber: '600-826-821' },
	[6]: { name: 'Przedsiębiorstwo Handlowo-Usługowe Mariola Jakubiec', phoneNumber: '607-248-428' },
	[7]: { name: 'EXPRESS-BUS Teresa Czuba, Piotr Czuba Sp. J.', phoneNumber: '530-978-961' },
	[8]: { name: 'P. H. U. Marcin Grabias', phoneNumber: '600-071-059' },
	[9]: { name: 'Markpol Plus Sp. z o.o.', phoneNumber: '602 872 932' },
	[10]: { name: 'Marek Kowalczyk MARKPOL', phoneNumber: '602 872 932' },
	[11]: { name: 'P. H. U. KEWIN R. Kruk S. J.', phoneNumber: '506-506-787' },
	[12]: { name: 'Sylwester Palczewski', phoneNumber: '503-563-349' },
	// Interestingly, no number 13
	[14]: { name: 'ARJA Jadwiga Stola', phoneNumber: '505-017-615' },
	[15]: { name: 'Firma Transportowa KONBO Konrad Hasiuk', phoneNumber: '662-062-789' },
	[16]: { name: 'TONY EKSPRES Tomasz Gorzel', phoneNumber: '508-912-321' },
	[17]: { name: 'PKS Krasnystaw SP. z o. o.', phoneNumber: '530-978-961' },
} satisfies CarriersMap;
