


import { NextResponse } from 'next/server';

const LOCATION_ID = 'CiEtB9OjzkOWOii1MzM3';
const API_VERSION = '2021-04-15';

const CALENDARS = [
  { id: 'L70jVxGrKzFi7mPEwHFi', name: 'El Paso English' },
  { id: 'TKJJr73FSgRe7Ck8b507', name: 'El Paso Spanish' },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date'); // yyyy-mm-dd

  if (!date) {
    return NextResponse.json({ error: 'Missing date' }, { status: 400 });
  }

  const dayStart = new Date(`${date}T00:00:00`);
  const dayEnd = new Date(`${date}T23:59:59`);

  try {
    // let allAppointments: any[] = [];
    let allAppointments: unknown[] = [];


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

const formatted = events.map((e: unknown) => ({
  _calendarName: cal.name,
  _calendarId: cal.id,
  ...(e as Record<string, unknown>), // ✅ SAFE cast for “send everything”
}));

      allAppointments = [...allAppointments, ...formatted];
    }

    // // Sort by start time
    // allAppointments.sort(
    //   (a, b) => Number(a.startTime) - Number(b.startTime)
    // );

    // Sort by start time
allAppointments.sort((a, b) => {
  const aStart = new Date((a as { startTime: string }).startTime).getTime();
  const bStart = new Date((b as { startTime: string }).startTime).getTime();
  return aStart - bStart;
});


    return NextResponse.json({
      date,
      appointments: allAppointments,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
