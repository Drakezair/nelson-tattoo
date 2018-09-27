import moment from "moment";

export default [
  {
		id: 0,
		title: 'All Day Event very long title',
		allDay: true,
		start: new Date(2015, 3, 0),
		end: new Date(2015, 3, 1),
	},
	{
		id: 1,
		title: 'Nadaaa',
		allDay: false,
		start: new Date(2018, 7, 25),
		end: new Date(2018, 7, 25),
	},
	{
		id: 2,
		title: 'Nadaaa2',
		allDay: false,
		// start: "Sat Aug 10 2018 00:00:00 GMT-0400 (Venezuela Time)",
		// end: "Sat Aug 10 2018 06:30:00 GMT-0400 (Venezuela Time)",
		start: moment("Sat Aug 10 2018 00:00:00 GMT-0400 (Venezuela Time)").toDate(),
		end: new Date(2018, 7, 10, 8, 10, 0),
	},
]