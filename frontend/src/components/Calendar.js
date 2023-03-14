// import React, { useState, useEffect } from 'react';
// import { Calendar } from 'react-google-calendar-api';

// export default function Calendar() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Fetch events from your API or JSON array here and set the events state
//     const fetchedEvents = [
//       {
//         id: '1',
//         summary: 'Event 1',
//         start: new Date('2022-04-01T08:00:00-05:00'),
//         end: new Date('2022-04-01T10:00:00-05:00'),
//       },
//       {
//         id: '2',
//         summary: 'Event 2',
//         start: new Date('2022-04-02T10:00:00-05:00'),
//         end: new Date('2022-04-02T12:00:00-05:00'),
//       },
//       {
//         id: '3',
//         summary: 'Event 3',
//         start: new Date('2022-04-03T13:00:00-05:00'),
//         end: new Date('2022-04-03T15:00:00-05:00'),
//       },
//     ];
//     setEvents(fetchedEvents);
//   }, []);

//   return (
//     <div>
//       <h2>My Calendar</h2>
//       <Calendar
//         events={events}
//         options={{
//           calendarId: 'primary',
//           timeZone: 'America/Chicago',
//         }}
//       />
//     </div>
//   );
// }

