
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
const ASSIGNED_USER_ID = 'el5aca49MUovXpjhcOkG';

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
            `Please select a calendar for Batch a ${batchIndex + 1}`
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
