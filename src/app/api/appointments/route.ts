import { NextResponse } from 'next/server';

const GHL_HEADERS = {
  'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

function sanitizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, '');
}

function isISODate(value: string) {
  return !isNaN(Date.parse(value));
}

export async function POST(req: Request) {
  let payload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!Array.isArray(payload)) {
    return NextResponse.json({ error: 'Expected an array' }, { status: 400 });
  }

  const results = [];

  for (let i = 0; i < payload.length; i++) {
    const item = payload[i];

    try {
      // 🔎 Validation
      if (!item.phone || !item.calendarId || !item.startTime || !item.endTime) {
        throw new Error('Missing required fields');
      }

      if (!isISODate(item.startTime) || !isISODate(item.endTime)) {
        throw new Error('Invalid date format');
      }

      // 👤 CREATE CONTACT
      const contactRes = await fetch(
        'https://services.leadconnectorhq.com/contacts/',
        {
          method: 'POST',
          headers: {
            ...GHL_HEADERS,
            Version: '2021-07-28',
          },
          body: JSON.stringify({
            firstName: item.firstName,
            lastName: item.lastName,
            phone: sanitizePhone(item.phone),
            locationId: item.locationId,
          }),
        }
      );

      const contactData = await contactRes.json();
      if (!contactRes.ok) throw contactData;

      const contactId = contactData.contact.id;

      // 📅 CREATE APPOINTMENT
      const apptRes = await fetch(
        'https://services.leadconnectorhq.com/calendars/events/appointments',
        {
          method: 'POST',
          headers: {
            ...GHL_HEADERS,
            Version: '2021-04-15',
          },
          body: JSON.stringify({
            title: item.title,
            description: item.description,
            appointmentStatus: 'confirmed',
            meetingLocationType: 'custom',
            overrideLocationConfig: true,
            calendarId: item.calendarId,
            locationId: item.locationId,
            assignedUserId: item.assignedUserId,
            contactId,
            startTime: item.startTime,
            endTime: item.endTime,
            ignoreFreeSlotValidation: true,
            toNotify: false,
          }),
        }
      );

      const apptData = await apptRes.json();
      if (!apptRes.ok) throw apptData;

      results.push({
        index: i,
        success: true,
        contactId,
        appointmentId: apptData.id,
      });

    } catch (error: any) {
      results.push({
        index: i,
        success: false,
        error: error?.message || error,
      });
    }
  }

  return NextResponse.json({
    total: payload.length,
    success: results.filter(r => r.success).length,
    failed: results.filter(r => !r.success).length,
    results,
  });
}
