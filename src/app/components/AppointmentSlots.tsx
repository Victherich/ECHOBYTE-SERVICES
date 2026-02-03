// 'use client';

// import { useState } from 'react';

// export default function AppointmentSlots() {
//   const [date, setDate] = useState('');
//   const [output, setOutput] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchStats = async () => {
//     if (!date) return;

//     setLoading(true);
//     setOutput('');

//     try {
//       const res = await fetch(`/api/appointmentslots?date=${date}`);
//       const data = await res.json();

//       const lines = [
//         `Date: ${data.date}`,
//         '',
//         ...data.calendars.map(
//           (c: any) => `${c.calendar}: ${c.count} appointments`
//         ),
//         '',
//         `Total Appointments: ${data.total}`,
//       ];

//       setOutput(lines.join('\n'));
//     } catch {
//       setOutput('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const copyToClipboard = async () => {
//     await navigator.clipboard.writeText(output);
//     alert('Copied to clipboard');
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 space-y-4">
//       <h1 className="text-2xl font-bold">Calendar Appointment Count</h1>

//       <input
//         type="date"
//         className="border p-2 w-full"
//         value={date}
//         onChange={e => setDate(e.target.value)}
//       />

//       <div className="flex gap-3">
//         <button
//           onClick={fetchStats}
//           className="bg-black text-white px-4 py-2 rounded"
//           disabled={loading}
//         >
//           {loading ? 'Loading…' : 'Fetch'}
//         </button>

//         <button
//           onClick={fetchStats}
//           className="bg-gray-200 px-4 py-2 rounded"
//         >
//           Refresh
//         </button>

//         <button
//           onClick={copyToClipboard}
//           disabled={!output}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Copy
//         </button>
//       </div>

//       <textarea
//         readOnly
//         rows={8}
//         className="w-full border p-3 font-mono text-sm"
//         value={output}
//       />
//     </div>
//   );
// }





'use client';

import { useState } from 'react';

function formatHour(hour: number) {
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const h = hour % 12 === 0 ? 12 : hour % 12;
  return `${h}:00 ${suffix}`;
}

export default function AppointmentSlots() {
  const [date, setDate] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchStats = async () => {
    if (!date) return;

    setLoading(true);
    setOutput('');

    try {
      const res = await fetch(`/api/appointmentslots?date=${date}`);
      if (!res.ok) throw new Error('Failed');

      const data = await res.json();

      const d = new Date(date);
      const header = [
        d.toLocaleDateString('en-US', { weekday: 'long' }),
        d.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        '',
      ];

      const lines = Object.keys(data.buckets)
        .map(Number)
        .sort((a, b) => a - b)
        .map(h => `${formatHour(h)}\t${data.buckets[h]}`);

      setOutput([...header, ...lines].join('\n'));
    } catch {
      setOutput('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(output);
    alert('Copied to clipboard');
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Daily Appointment Breakdown</h1>

      <input
        type="date"
        className="border p-2 w-full"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <div className="flex gap-3">
        <button
          onClick={fetchStats}
          className="bg-black text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Loading…' : 'Fetch'}
        </button>

        <button
          onClick={fetchStats}
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Refresh
        </button>

        <button
          onClick={copyToClipboard}
          disabled={!output}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Copy
        </button>
      </div>

      <textarea
        readOnly
        rows={14}
        className="w-full border p-3 font-mono text-sm"
        value={output}
      />
    </div>
  );
}
