

// 'use client';

// import { useState } from 'react';

// // Format appointment times in Mountain Time
// function formatTimeMT(dateStr: string) {
//   const d = new Date(dateStr);
//   return d.toLocaleTimeString('en-US', {
//     hour: 'numeric',
//     minute: '2-digit',
//     timeZone: 'America/Denver', // Mountain Time
//   });
// }

// export default function AppointmentSlots() {
//   const [date, setDate] = useState('');
//   const [appointments, setAppointments] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const fetchAppointments = async () => {
//     if (!date) return;
//     setLoading(true);

//     try {
//       const res = await fetch(`/api/appointmentslots?date=${date}`);
//       const data = await res.json();
//       const allAppointments = (data.appointments || []) as any[];

//       // --- Mountain Time start and end of day ---
//       const [year, month, day] = date.split('-').map(Number);
//       const MT_OFFSET_HOURS = -7; // Mountain Time UTC offset
//       const mtStart = new Date(Date.UTC(year, month - 1, day, 0 - MT_OFFSET_HOURS, 0, 0, 0));
//       const mtEnd = new Date(Date.UTC(year, month - 1, day, 24 - MT_OFFSET_HOURS, 0, 0, 0));

//       // Filter confirmed appointments in Mountain Time
//       const filteredAppointments = allAppointments
//         .filter(appt => appt?.appointmentStatus === 'confirmed')
//         .filter(appt => {
//           const start = new Date(appt.startTime); // JS respects -07:00 offset
//           return start >= mtStart && start < mtEnd;
//         })
//         .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

//       setAppointments(filteredAppointments);

//     } catch (err) {
//       console.error(err);
//       alert('Failed to fetch appointments');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 space-y-4">
//       <h1 className="text-2xl font-bold">Appointments for Selected Day (Mountain Time)</h1>

//       <input
//         type="date"
//         className="border p-2 w-full"
//         value={date}
//         onChange={e => setDate(e.target.value)}
//       />

//       <button
//         onClick={fetchAppointments}
//         className="bg-black text-white px-4 py-2 rounded"
//         disabled={loading}
//       >
//         {loading ? 'Loading…' : 'Fetch Appointments'}
//       </button>

//       <div className="mt-4 space-y-2">
//         {appointments.length === 0 && date && (
//           <p className="text-gray-500">No appointments found.</p>
//         )}

//         {appointments.map(appt => (
//           <div
//             key={appt.id}
//             className="border p-3 rounded shadow-sm"
//           >
//             <p className="font-semibold">
//               {formatTimeMT(appt.startTime)} - {formatTimeMT(appt.endTime)}
//             </p>
//             <p>📅 {appt.title}</p>
//             {appt.contact?.name && <p>👤 {appt.contact.name}</p>}
//             <p className="text-sm text-gray-600">
//               Calendar: {appt._calendarName}
//             </p>
//             {/* Optional: show description if available */}
//             {appt.description && <p className="text-sm text-gray-700">{appt.description}</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




'use client';

import { useState } from 'react';
import AppointmentCounts from './AppointmentCounts';

// Format appointment times in Mountain Time
function formatTimeMT(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/Denver',
  });
}

export default function AppointmentSlots() {
  const [date, setDate] = useState('');
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async () => {
    if (!date) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/appointmentslots?date=${date}`);
      const data = await res.json();
      const allAppointments = (data.appointments || []) as any[];

      const [year, month, day] = date.split('-').map(Number);
      const MT_OFFSET_HOURS = -7;
      const mtStart = new Date(
        Date.UTC(year, month - 1, day, 0 - MT_OFFSET_HOURS, 0, 0, 0)
      );
      const mtEnd = new Date(
        Date.UTC(year, month - 1, day, 24 - MT_OFFSET_HOURS, 0, 0, 0)
      );

      const filteredAppointments = allAppointments
        .filter(appt => appt?.appointmentStatus === 'confirmed')
        .filter(appt => {
          const start = new Date(appt.startTime);
          return start >= mtStart && start < mtEnd;
        })
        .sort(
          (a, b) =>
            new Date(a.startTime).getTime() -
            new Date(b.startTime).getTime()
        );

      setAppointments(filteredAppointments);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch appointments');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        Appointments for Selected Day (Mountain Time)
      </h1>

      <input
        type="date"
        className="border p-2 w-full"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <button
        onClick={fetchAppointments}
        className="bg-black text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Loading…' : 'Fetch Appointments'}
      </button>

      {/* ✅ CHILD COMPONENT GETS PROPS HERE */}
      <AppointmentCounts date={date} appointments={appointments} />

      {/* ---------- ORIGINAL LIST VIEW (UNCHANGED) ---------- */}
      <div className="mt-4 space-y-2">
        {appointments.length === 0 && date && (
          <p className="text-gray-500">No appointments found.</p>
        )}

        {appointments.map(appt => (
          <div
            key={appt.id}
            className="border p-3 rounded shadow-sm"
          >
            <p className="font-semibold">
              {formatTimeMT(appt.startTime)} -{' '}
              {formatTimeMT(appt.endTime)}
            </p>
            <p>📅 {appt.title}</p>
            {appt.contact?.name && <p>👤 {appt.contact.name}</p>}
            <p className="text-sm text-gray-600">
              Calendar: {appt._calendarName}
            </p>
            {appt.description && (
              <p className="text-sm text-gray-700">
                {appt.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
