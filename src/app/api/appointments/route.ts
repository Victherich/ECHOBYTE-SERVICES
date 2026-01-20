// import { NextResponse } from 'next/server';

// const GHL_HEADERS = {
//   'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
//   'Accept': 'application/json',
//   'Content-Type': 'application/json',
// };

// function sanitizePhone(phone: string) {
//   return phone.replace(/[^\d+]/g, '');
// }

// function isISODate(value: string) {
//   return !isNaN(Date.parse(value));
// }

// export async function POST(req: Request) {
//   let payload;

//   try {
//     payload = await req.json();
//   } catch {
//     return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
//   }

//   if (!Array.isArray(payload)) {
//     return NextResponse.json({ error: 'Expected an array' }, { status: 400 });
//   }

//   const results = [];

//   for (let i = 0; i < payload.length; i++) {
//     const item = payload[i];

//     try {
//       // 🔎 Validation
//       if (!item.phone || !item.calendarId || !item.startTime || !item.endTime) {
//         throw new Error('Missing required fields');
//       }

//       if (!isISODate(item.startTime) || !isISODate(item.endTime)) {
//         throw new Error('Invalid date format');
//       }

//       // 👤 CREATE CONTACT
//       const contactRes = await fetch(
//         'https://services.leadconnectorhq.com/contacts/',
//         {
//           method: 'POST',
//           headers: {
//             ...GHL_HEADERS,
//             Version: '2021-07-28',
//           },
//           body: JSON.stringify({
//             firstName: item.firstName,
//             lastName: item.lastName,
//             phone: sanitizePhone(item.phone),
//             locationId: item.locationId,
//           }),
//         }
//       );

//       const contactData = await contactRes.json();
//       if (!contactRes.ok) throw contactData;

//       const contactId = contactData.contact.id;

//       // 📅 CREATE APPOINTMENT
//       const apptRes = await fetch(
//         'https://services.leadconnectorhq.com/calendars/events/appointments',
//         {
//           method: 'POST',
//           headers: {
//             ...GHL_HEADERS,
//             Version: '2021-04-15',
//           },
//           body: JSON.stringify({
//             title: item.title,
//             description: item.description,
//             appointmentStatus: 'confirmed',
//             meetingLocationType: 'custom',
//             overrideLocationConfig: true,
//             calendarId: item.calendarId,
//             locationId: item.locationId,
//             assignedUserId: item.assignedUserId,
//             contactId,
//             startTime: item.startTime,
//             endTime: item.endTime,
//             ignoreFreeSlotValidation: true,
//             toNotify: false,
//           }),
//         }
//       );

//       const apptData = await apptRes.json();
//       if (!apptRes.ok) throw apptData;

//       results.push({
//         index: i,
//         success: true,
//         contactId,
//         appointmentId: apptData.id,
//       });

//     } catch (error: any) {
//       results.push({
//         index: i,
//         success: false,
//         error: error?.message || error,
//       });
//     }
//   }

//   return NextResponse.json({
//     total: payload.length,
//     success: results.filter(r => r.success).length,
//     failed: results.filter(r => !r.success).length,
//     results,
//   });
// }












// import { NextResponse } from 'next/server';

// /* =======================
//    CONFIG
// ======================= */

// const LOCATION_ID = 'CiEtB9OjzkOWOii1MzM3';
// const API_VERSION = '2021-07-28';

// const GHL_HEADERS = {
//   Authorization: `Bearer ${process.env.GHL_API_KEY}`,
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// };

// /* =======================
//    HELPERS
// ======================= */

// function sanitizePhone(phone: string) {
//   return phone.replace(/[^\d+]/g, '');
// }

// function isISODate(value: string) {
//   return !isNaN(Date.parse(value));
// }

// /* =======================
//    API HANDLER
// ======================= */

// export async function POST(req: Request) {
//   let payload: any[];

//   try {
//     payload = await req.json();
//   } catch {
//     return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
//   }

//   if (!Array.isArray(payload)) {
//     return NextResponse.json(
//       { error: 'Expected an array of appointments' },
//       { status: 400 }
//     );
//   }

//   const results: any[] = [];

//   for (let i = 0; i < payload.length; i++) {
//     const item = payload[i];

//     try {
//       /* =======================
//          VALIDATION
//       ======================= */

//       if (!item.phone || !item.calendarId || !item.startTime || !item.endTime) {
//         throw new Error('Missing required fields');
//       }

//       if (!isISODate(item.startTime) || !isISODate(item.endTime)) {
//         throw new Error('Invalid date format');
//       }

//       const cleanPhone = sanitizePhone(item.phone);

//       /* =======================
//          SEARCH CONTACT
//       ======================= */

//       const searchRes = await fetch(
//         'https://services.leadconnectorhq.com/contacts/search',
//         {
//           method: 'POST',
//           headers: {
//             ...GHL_HEADERS,
//             Version: API_VERSION,
//           },
//           body: JSON.stringify({
//             locationId: LOCATION_ID, // ✅ REQUIRED
//             page: 1,
//             pageLimit: 1,
//             filters: [
//               {
//                 field: 'phone',
//                 operator: 'eq',
//                 value: cleanPhone,
//               },
//             ],
//           }),
//         }
//       );

//       const searchData = await searchRes.json();

//       if (!searchRes.ok) {
//         throw new Error(
//           searchData?.message || 'Failed to search contact'
//         );
//       }

//       let contactId: string;

//       /* =======================
//          CONTACT FOUND
//       ======================= */

//       if (searchData?.contacts?.length > 0) {
//         contactId = searchData.contacts[0].id;
//       } 
//       /* =======================
//          CREATE CONTACT
//       ======================= */
//       else {
//         const contactRes = await fetch(
//           'https://services.leadconnectorhq.com/contacts/',
//           {
//             method: 'POST',
//             headers: {
//               ...GHL_HEADERS,
//               Version: API_VERSION,
//             },
//             body: JSON.stringify({
//               firstName: item.firstName || 'Unknown',
//               lastName: item.lastName || '',
//               phone: cleanPhone,
//               locationId: LOCATION_ID,
//             }),
//           }
//         );

//         const contactData = await contactRes.json();

//         if (!contactRes.ok) {
//           throw new Error(
//             contactData?.message || 'Failed to create contact'
//           );
//         }

//         contactId = contactData.contact.id;
//       }

//       /* =======================
//          CREATE APPOINTMENT
//       ======================= */

//       const apptRes = await fetch(
//         'https://services.leadconnectorhq.com/calendars/events/appointments',
//         {
//           method: 'POST',
//           headers: {
//             ...GHL_HEADERS,
//             Version: '2021-04-15',
//           },
//           body: JSON.stringify({
//             title: item.title || 'Appointment',
//             description: item.description || '',
//             appointmentStatus: 'confirmed',
//             meetingLocationType: 'custom',
//             overrideLocationConfig: true,
//             calendarId: item.calendarId,
//             locationId: LOCATION_ID,
//             assignedUserId: item.assignedUserId,
//             contactId,
//             startTime: item.startTime,
//             endTime: item.endTime,
//             ignoreFreeSlotValidation: true,
//             toNotify: false,
//           }),
//         }
//       );

//       const apptData = await apptRes.json();

//       if (!apptRes.ok) {
//         throw new Error(
//           apptData?.message || 'Failed to create appointment'
//         );
//       }

//       /* =======================
//          SUCCESS
//       ======================= */

//       results.push({
//         index: i,
//         success: true,
//         contactId,
//         appointmentId: apptData.id,
//       });

//     } catch (error: any) {
//       results.push({
//         index: i,
//         success: false,
//         error:
//           error?.message ||
//           (typeof error === 'string'
//             ? error
//             : JSON.stringify(error)),
//       });
//     }
//   }

//   return NextResponse.json({
//     total: payload.length,
//     success: results.filter(r => r.success).length,
//     failed: results.filter(r => !r.success).length,
//     results,
//   });
// }












import { NextResponse } from 'next/server';

/* ==================================================
   TYPES
================================================== */

interface AppointmentPayload {
  firstName?: string;
  lastName?: string;
  phone: string;
  title?: string;
  description?: string;
  calendarId: string;
  assignedUserId?: string;
  startTime: string;
  endTime: string;
}

/* ==================================================
   CONFIG
================================================== */

const LOCATION_ID = 'CiEtB9OjzkOWOii1MzM3';
const CONTACTS_VERSION = '2021-07-28';
const APPOINTMENTS_VERSION = '2021-04-15';

const GHL_HEADERS = {
  Authorization: `Bearer ${process.env.GHL_API_KEY}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

/* ==================================================
   HELPERS
================================================== */

function sanitizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, '');
}

function isISODate(value: string): boolean {
  return !Number.isNaN(Date.parse(value));
}

/* ==================================================
   API HANDLER
================================================== */

export async function POST(req: Request) {
  let payload: AppointmentPayload[];

  try {
    payload = (await req.json()) as AppointmentPayload[];
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!Array.isArray(payload)) {
    return NextResponse.json(
      { error: 'Payload must be an array' },
      { status: 400 }
    );
  }

  const results: {
    index: number;
    success: boolean;
    contactId?: string;
    appointmentId?: string;
    error?: string;
  }[] = [];

  for (let index = 0; index < payload.length; index++) {
    const item = payload[index];

    try {
      /* ==========================
         VALIDATION
      ========================== */

      if (!item.phone || !item.calendarId || !item.startTime || !item.endTime) {
        throw new Error('Missing required fields');
      }

      if (!isISODate(item.startTime) || !isISODate(item.endTime)) {
        throw new Error('Invalid date format');
      }

      const cleanPhone = sanitizePhone(item.phone);

      /* ==========================
         SEARCH CONTACT BY PHONE
      ========================== */

      const searchRes = await fetch(
        'https://services.leadconnectorhq.com/contacts/search',
        {
          method: 'POST',
          headers: { ...GHL_HEADERS, Version: CONTACTS_VERSION },
          body: JSON.stringify({
            locationId: LOCATION_ID,
            page: 1,
            pageLimit: 1,
            filters: [
              {
                field: 'phone',
                operator: 'eq',
                value: cleanPhone,
              },
            ],
          }),
        }
      );

      const searchData = await searchRes.json();

      if (!searchRes.ok) {
        throw new Error(searchData?.message ?? 'Contact search failed');
      }

      let contactId: string;

      /* ==========================
         CONTACT EXISTS
      ========================== */

      if (searchData.contacts?.length > 0) {
        contactId = searchData.contacts[0].id;
      } else {
        /* ==========================
           CREATE CONTACT
        ========================== */

        const contactRes = await fetch(
          'https://services.leadconnectorhq.com/contacts/',
          {
            method: 'POST',
            headers: { ...GHL_HEADERS, Version: CONTACTS_VERSION },
            body: JSON.stringify({
              firstName: item.firstName ?? 'Unknown',
              lastName: item.lastName ?? '',
              phone: cleanPhone,
              locationId: LOCATION_ID,
            }),
          }
        );

        const contactData = await contactRes.json();

        if (!contactRes.ok) {
          throw new Error(contactData?.message ?? 'Contact creation failed');
        }

        contactId = contactData.contact.id;
      }

      /* ==========================
         CREATE APPOINTMENT
      ========================== */

      const apptRes = await fetch(
        'https://services.leadconnectorhq.com/calendars/events/appointments',
        {
          method: 'POST',
          headers: { ...GHL_HEADERS, Version: APPOINTMENTS_VERSION },
          body: JSON.stringify({
            title: item.title ?? 'Appointment',
            description: item.description ?? '',
            appointmentStatus: 'confirmed',
            meetingLocationType: 'custom',
            overrideLocationConfig: true,
            calendarId: item.calendarId,
            locationId: LOCATION_ID,
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

      if (!apptRes.ok) {
        throw new Error(apptData?.message ?? 'Appointment creation failed');
      }

      /* ==========================
         SUCCESS
      ========================== */

      results.push({
        index,
        success: true,
        contactId,
        appointmentId: apptData.id,
      });
    } catch (err) {
      results.push({
        index,
        success: false,
        error: err instanceof Error ? err.message : 'Unknown error',
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
