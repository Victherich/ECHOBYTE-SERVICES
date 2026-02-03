
// import { NextResponse } from 'next/server';

// const LOCATION_ID = 'CiEtB9OjzkOWOii1MzM3';
// const API_VERSION = '2021-04-15';

// const CALENDARS = [
//   { id: 'L70jVxGrKzFi7mPEwHFi', name: 'El Paso English' },
//   { id: 'TKJJr73FSgRe7Ck8b507', name: 'El Paso Spanish' },
// ];

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url);
//   const date = searchParams.get('date'); // yyyy-mm-dd

//   if (!date) {
//     return NextResponse.json({ error: 'Missing date' }, { status: 400 });
//   }

//   const start = new Date(`${date}T00:00:00.000Z`).getTime();
//   const end = new Date(`${date}T23:59:59.999Z`).getTime();

//   try {
//     const results = await Promise.all(
//       CALENDARS.map(async cal => {
//         const res = await fetch(
//           `https://services.leadconnectorhq.com/calendars/events?` +
//             new URLSearchParams({
//               locationId: LOCATION_ID,
//               calendarId: cal.id,
//               startTime: String(start),
//               endTime: String(end),
//             }),
//           {
//             headers: {
//               Authorization: `Bearer ${process.env.GHL_API_KEY}`,
//               Version: API_VERSION,
//               Accept: 'application/json',
//             },
//           }
//         );

//         if (!res.ok) {
//           throw new Error(`Failed for ${cal.name}`);
//         }

//         const data = await res.json();

//         return {
//           calendar: cal.name,
//           count: Array.isArray(data.events) ? data.events.length : 0,
//         };
//       })
//     );

//     const total = results.reduce((sum, r) => sum + r.count, 0);

//     return NextResponse.json({
//       date,
//       calendars: results,
//       total,
//     });
//   } catch (err) {
//     return NextResponse.json(
//       { error: err instanceof Error ? err.message : 'Unknown error' },
//       { status: 500 }
//     );
//   }
// }





import { NextResponse } from 'next/server';

const LOCATION_ID = 'CiEtB9OjzkOWOii1MzM3';
const API_VERSION = '2021-04-15';

const CALENDARS = [
  { id: 'L70jVxGrKzFi7mPEwHFi', name: 'El Paso English' },
  { id: 'TKJJr73FSgRe7Ck8b507', name: 'El Paso Spanish' },
];

// Business hours you want displayed
const START_HOUR = 8;  // 8 AM
const END_HOUR = 20;   // 8 PM

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date'); // yyyy-mm-dd

  if (!date) {
    return NextResponse.json({ error: 'Missing date' }, { status: 400 });
  }

  // ✅ LOCAL day range (NOT UTC)
  const dayStart = new Date(`${date}T00:00:00`);
  const dayEnd = new Date(`${date}T23:59:59`);

  // Initialize buckets
  const buckets: Record<number, number> = {};
  for (let h = START_HOUR; h <= END_HOUR; h++) {
    buckets[h] = 0;
  }

  try {
    for (const cal of CALENDARS) {
      const res = await fetch(
        `https://services.leadconnectorhq.com/calendars/events?` +
          new URLSearchParams({
            locationId: LOCATION_ID,
            calendarId: cal.id,
            startTime: String(dayStart.getTime()),
            endTime: String(dayEnd.getTime()),
          }),
        {
          headers: {
            Authorization: `Bearer ${process.env.GHL_API_KEY}`,
            Version: API_VERSION,
            Accept: 'application/json',
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch ${cal.name}`);
      }

      const data = await res.json();
      const events = Array.isArray(data.events) ? data.events : [];

      for (const event of events) {
        if (!event.startTime) continue;

        // ✅ Convert millis → LOCAL hour
        const localDate = new Date(Number(event.startTime));
        const hour = localDate.getHours();

        if (hour >= START_HOUR && hour <= END_HOUR) {
          buckets[hour] += 1;
        }
      }
    }

    return NextResponse.json({
      date,
      buckets,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
