


'use client';

import { useMemo } from 'react';

const START_HOUR = 8;
const END_HOUR = 20;

// Display label like "8:00 AM"
function formatHourLabel(hour: number) {
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const h = hour % 12 === 0 ? 12 : hour % 12;
  return `${h}:00 ${suffix}`;
}




function buildCopyText(
  dayOfWeek: string,
  formattedDate: string,
  buckets: Record<number, number>
) {
  const lines = Object.keys(buckets)
    .map(Number)
    .sort((a, b) => a - b)
    .map(hour => `${formatHourLabel(hour)}\t${buckets[hour]}`);

  return [dayOfWeek, formattedDate, ...lines].join('\n');
}




interface Appointment {
  startTime: string;
}

interface Props {
  date: string;
  appointments: Appointment[];
}


export default function AppointmentCounts({ date, appointments }: Props) {
  const { dayOfWeek, formattedDate, buckets } = useMemo(() => {
    if (!date) {
      return { dayOfWeek: '', formattedDate: '', buckets: null };
    }

    // ----- HEADER (DAY OF WEEK + DATE) -----
    const d = new Date(date + 'T00:00:00-07:00'); // Mountain Time context

    const dayOfWeek = d.toLocaleDateString('en-US', {
      weekday: 'long',
    });

    const formattedDate = d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    // ----- INIT BUCKETS -----
    const counts: Record<number, number> = {};
    for (let h = START_HOUR; h <= END_HOUR; h++) {
      counts[h] = 0;
    }

    // ----- COUNT FROM EXISTING APPOINTMENTS ONLY -----
   appointments.forEach(appt => {
  const start = new Date(appt.startTime);

  const hourMT = Number(
    start.toLocaleString('en-US', {
      timeZone: 'America/Denver',
      hour: 'numeric',
      hour12: false,
    })
  );

  if (hourMT >= START_HOUR && hourMT <= END_HOUR) {
    counts[hourMT] += 1;
  }
});


    return { dayOfWeek, formattedDate, buckets: counts };
  }, [appointments, date]);




const copyToClipboard = async () => {
  if (!buckets) return;

  const text = buildCopyText(dayOfWeek, formattedDate, buckets);
  await navigator.clipboard.writeText(text);
  alert('Copied to clipboard');
};




  if (!buckets || !date) return null;

 return (
  <div className="
    mt-6 font-mono border p-4 rounded 
    bg-gray-50 dark:bg-gray-900 
    border-gray-200 dark:border-gray-700
  ">
    <div className="flex justify-between items-start">
      <div>
        <p className="font-bold text-gray-900 dark:text-white">
          {dayOfWeek}
        </p>
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          {formattedDate}
        </p>
      </div>

      <button
        onClick={copyToClipboard}
        className="
          bg-blue-600 hover:bg-blue-700 
          dark:bg-blue-500 dark:hover:bg-blue-600
          text-white px-3 py-1 text-sm rounded
          focus:outline-none focus:ring-2 focus:ring-blue-400
        "
      >
        Copy
      </button>
    </div>

    {Object.keys(buckets)
      .map(Number)
      .sort((a, b) => a - b)
      .map(hour => (
        <div
          key={hour}
          className="
            flex justify-between max-w-xs py-1
            text-gray-900 dark:text-gray-100
            border-b border-gray-200 dark:border-gray-800 last:border-b-0
          "
        >
          <span>{formatHourLabel(hour)}</span>
          <span className="font-semibold">{buckets[hour]}</span>
        </div>
      ))}
  </div>
);

}
