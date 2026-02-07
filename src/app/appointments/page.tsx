


// 'use client';

// import { useState } from 'react';
// import Swal from 'sweetalert2';


// const CALENDARS = [
// { id: 'L70jVxGrKzFi7mPEwHFi', name: 'El Paso English' },
//   { id: 'TKJJr73FSgRe7Ck8b507', name: 'El Paso Spanish' },
//   { id: 'hip9cHxHRtNPXDok4bgO', name: 'Demo Calender 1' },
//   { id: 'ldTdE4xrp3h4Tek4RSCy', name: 'Demo Calender 2' },
// ];

// type Batch = {
//   calendarId: string;
//   jsonText: string;
// };

// export default function BulkAppointments() {
//   const [batches, setBatches] = useState<Batch[]>([
//     { calendarId: '', jsonText: '' },
//   ]);

//   const [progress, setProgress] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const updateBatch = (index: number, key: keyof Batch, value: string) => {
//     const copy = [...batches];
//     copy[index][key] = value;
//     setBatches(copy);
//   };

//   const addBatch = () => {
//     setBatches([...batches, { calendarId: '', jsonText: '' }]);
//   };

//   const removeBatch = (index: number) => {
//     const copy = [...batches];
//     copy.splice(index, 1);
//     setBatches(copy);
//   };



// const submit = async () => {
//   let allAppointments: any[] = [];

//   try {
//     batches.forEach((batch, batchIndex) => {
//       if (!batch.calendarId) {
//         throw new Error(`Please select a calendar for Batch ${batchIndex + 1}`);
//       }

//       if (!batch.jsonText.trim()) {
//         throw new Error(`Batch ${batchIndex + 1} is empty`);
//       }

//       const parsed = JSON.parse(batch.jsonText);

//       if (!Array.isArray(parsed)) {
//         throw new Error(`Batch ${batchIndex + 1} must be a JSON array`);
//       }

//       if (parsed.length > 100) {
//         throw new Error(`Batch ${batchIndex + 1} exceeds 100 appointments`);
//       }

//       parsed.forEach((item, i) => {
//         allAppointments.push({
//           ...item,
//           calendarId: batch.calendarId,               // from dropdown
//           locationId: "CiEtB9OjzkOWOii1MzM3",        // hardcoded
//           assignedUserId: "SAGzTk9dekoeN7nJaWOs",   // hardcoded
//         });
//       });
//     });
//   } catch (err: any) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Invalid Input',
//       text: err.message || 'Invalid JSON format',
//     });
//     return;
//   }

//   if (allAppointments.length === 0) {
//     Swal.fire('No appointments to process');
//     return;
//   }

//   setLoading(true);
//   setProgress(10);

//   try {
//     const res = await fetch('/api/appointments', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(allAppointments),
//     });

//     setProgress(70);

//     const data = await res.json();
//     setProgress(100);

//     // Swal.fire({
//     //   title: 'Completed',
//     //   html: `
//     //     <p><strong>Total:</strong> ${data.total}</p>
//     //     <p><strong>Success:</strong> ${data.success}</p>
//     //     <p><strong>Failed:</strong> ${data.failed}</p>
//     //   `,
//     //   icon: data.failed > 0 ? 'warning' : 'success',
//     // });

//     Swal.fire({
//   title: 'Completed',
//   html: `
//     <p><strong>Total:</strong> ${data.total}</p>
//     <p><strong>Success:</strong> ${data.success}</p>
//     <p><strong>Failed:</strong> ${data.failed}</p>
//     <pre style="text-align:left; font-size:12px; max-height:200px; overflow:auto;">
// ${JSON.stringify(data.results, null, 2)}
//     </pre>
//   `,
//   icon: data.failed > 0 ? 'warning' : 'success',
// });

//   } catch (err) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Request Failed',
//       text: 'Something went wrong while creating appointments',
//     });
//   } finally {
//     setLoading(false);
//     setProgress(0);
//   }
// };



// return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">
//         Bulk Appointment Creator
//       </h1>

  


//       {batches.map((batch, index) => (
//   <div
//     key={index}
//     className="border rounded-lg p-4 mb-6 bg-white shadow-sm"
//   >
//     <div className="flex justify-between items-center mb-3">
//       <h2 className="font-semibold text-lg">
//         Batch {index + 1}
//       </h2>

//       <div className="flex gap-2">
//         {batches.length > 1 && (
//           <button
//             onClick={() => removeBatch(index)}
//             className="text-red-500 text-sm"
//           >
//             Remove
//           </button>
//         )}

//         {/* Clear button */}
//         <button
//           onClick={() => {
//             updateBatch(index, 'calendarId', '');
//             updateBatch(index, 'jsonText', '');
//           }}
//           className="text-blue-500 text-sm"
//         >
//           Clear
//         </button>
//       </div>
//     </div>

//     <select
//       className="w-full border p-2 rounded mb-3"
//       value={batch.calendarId}
//       onChange={(e) =>
//         updateBatch(index, 'calendarId', e.target.value)
//       }
//     >
//       <option value="">Select Calendar</option>
//       {CALENDARS.map((cal) => (
//         <option key={cal.id} value={cal.id}>
//           {cal.name}
//         </option>
//       ))}
//     </select>

//     <textarea
//       rows={10}
//       className="w-full p-3 border rounded font-mono text-sm"
//       placeholder={`Paste JSON array here (no calendarId needed)

// Example:
// [
//   {
//     "firstName": "Maria",
//     "phone": "+19152382558",
//     "title": "Filter fridge",
//     "description": "Inspection",
//     "startTime": "2026-01-21T09:00:00-07:00",
//     "endTime": "2026-01-21T10:00:00-07:00"
//   }
// ]`}
//       value={batch.jsonText}
//       onChange={(e) =>
//         updateBatch(index, 'jsonText', e.target.value)
//       }
//     />
//   </div>
// ))}


//       <button
//         onClick={addBatch}
//         className="mb-6 bg-gray-200 px-4 py-2 rounded"
//       >
//         + Add Another Batch
//       </button>

//       {loading && (
//         <div className="w-full bg-gray-200 rounded h-3 mb-4">
//           <div
//             className="bg-green-500 h-3 rounded transition-all"
//             style={{ width: `${progress}%` }}
//           />
//         </div>
//       )}

//       <button
//         onClick={submit}
//         disabled={loading}
//         className="bg-black text-white px-6 py-3 rounded disabled:opacity-50"
//       >
//         {loading ? 'Processing...' : 'Create Appointments'}
//       </button>

      
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import AppointmentSlots from '../components/AppointmentSlots';


/* ==================================================
   TYPES
================================================== */

interface AppointmentInput {
  firstName?: string;
  phone: string;
  title?: string;
  description?: string;
  startTime: string;
  endTime: string;
}

interface FinalAppointment extends AppointmentInput {
  calendarId: string;
  locationId: string;
  assignedUserId: string;
}

type Batch = {
  calendarId: string;
  jsonText: string;
};

/* ==================================================
   CONSTANTS
================================================== */

const LOCATION_ID = 'CiEtB9OjzkOWOii1MzM3';
const ASSIGNED_USER_ID = 'SAGzTk9dekoeN7nJaWOs';

const CALENDARS = [
  { id: 'L70jVxGrKzFi7mPEwHFi', name: 'El Paso English' },
  { id: 'TKJJr73FSgRe7Ck8b507', name: 'El Paso Spanish' },
  { id: 'hip9cHxHRtNPXDok4bgO', name: 'Demo Calendar 1' },
  { id: 'ldTdE4xrp3h4Tek4RSCy', name: 'Demo Calendar 2' },
];

/* ==================================================
   COMPONENT
================================================== */

export default function BulkAppointments() {
  const [batches, setBatches] = useState<Batch[]>([
    { calendarId: '', jsonText: '' },
  ]);
  const [loading, setLoading] = useState(false);

  /* =======================
     BATCH HELPERS
  ======================= */

  const updateBatch = (
    index: number,
    key: keyof Batch,
    value: string
  ) => {
    const copy = [...batches];
    copy[index][key] = value;
    setBatches(copy);
  };

  const addBatch = () => {
    setBatches([...batches, { calendarId: '', jsonText: '' }]);
  };

  const removeBatch = (index: number) => {
    const copy = [...batches];
    copy.splice(index, 1);
    setBatches(copy.length ? copy : [{ calendarId: '', jsonText: '' }]);
  };

  const clearBatch = (index: number) => {
    updateBatch(index, 'calendarId', '');
    updateBatch(index, 'jsonText', '');
  };

  /* =======================
     SUBMIT
  ======================= */

  const submit = async () => {
    const allAppointments: FinalAppointment[] = [];

    try {
      batches.forEach((batch, batchIndex) => {
        if (!batch.calendarId) {
          throw new Error(
            `Please select a calendar for Batch ${batchIndex + 1}`
          );
        }

        if (!batch.jsonText.trim()) {
          throw new Error(`Batch ${batchIndex + 1} is empty`);
        }

        const parsed = JSON.parse(
          batch.jsonText
        ) as AppointmentInput[];

        if (!Array.isArray(parsed)) {
          throw new Error(`Batch ${batchIndex + 1} must be an array`);
        }

        parsed.forEach(item => {
          allAppointments.push({
            ...item,
            calendarId: batch.calendarId,
            locationId: LOCATION_ID,
            assignedUserId: ASSIGNED_USER_ID,
          });
        });
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text:
          err instanceof Error
            ? err.message
            : 'Invalid JSON format',
      });
      return;
    }

    if (!allAppointments.length) {
      Swal.fire('No appointments to process');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(allAppointments),
      });

      const data = await res.json();

      Swal.fire({
        title: 'Completed',
        icon: data.failed > 0 ? 'warning' : 'success',
        html: `
          <p><strong>Total:</strong> ${data.total}</p>
          <p><strong>Success:</strong> ${data.success}</p>
          <p><strong>Failed:</strong> ${data.failed}</p>
          <pre style="text-align:left;font-size:12px;max-height:200px;overflow:auto;">
${JSON.stringify(data.results, null, 2)}
          </pre>
        `,
      });
    } catch {
      Swal.fire('Request failed');
    } finally {
      setLoading(false);
    }
  };

  /* =======================
     UI
  ======================= */

return (
  <div className="max-w-5xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <h1 className="text-3xl font-bold mb-6">
      Bulk Appointment Creator
    </h1>

    {batches.map((batch, index) => (
      <div
        key={index}
        className="border rounded-lg p-4 mb-6 bg-white dark:bg-gray-800 shadow-sm"
      >
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-lg">
            Batch {index + 1}
          </h2>

          <div className="flex gap-3 text-sm">
            {batches.length > 1 && (
              <button
                onClick={() => removeBatch(index)}
                className="text-red-600 dark:text-red-400 hover:underline"
              >
                Remove
              </button>
            )}

            <button
              onClick={() => clearBatch(index)}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear
            </button>
          </div>
        </div>

        <select
          className="w-full border p-2 rounded mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          value={batch.calendarId}
          onChange={e =>
            updateBatch(index, 'calendarId', e.target.value)
          }
        >
          <option value="">Select Calendar</option>
          {CALENDARS.map(cal => (
            <option
              key={cal.id}
              value={cal.id}
              className="text-gray-900"
            >
              {cal.name}
            </option>
          ))}
        </select>

        <textarea
          rows={10}
          className="w-full p-3 border rounded font-mono text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          placeholder="Paste JSON array here"
          value={batch.jsonText}
          onChange={e =>
            updateBatch(index, 'jsonText', e.target.value)
          }
        />
      </div>
    ))}

    <button
      onClick={addBatch}
      className="mb-6 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded"
    >
      + Add Another Batch
    </button>

    <button
      onClick={submit}
      disabled={loading}
      className="bg-black text-white px-6 py-3 rounded disabled:opacity-50"
    >
      {loading ? 'Processing...' : 'Create Appointments'}
    </button>

    <AppointmentSlots/>
  </div>
);

}
