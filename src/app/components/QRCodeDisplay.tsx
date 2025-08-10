
// // components/QRCodeDisplay.tsx

// 'use client';

// import { QRCode } from 'qrcode.react';

// const QRCodeDisplay = () => {
//   const url = 'https://www.echobyteconcept.com/';

//   return (
//     <div className="flex flex-col items-center justify-center p-6 bg-white shadow-xl rounded-2xl max-w-sm mx-auto">
//       <h2 className="text-xl font-semibold mb-4 text-gray-700">Scan to Visit</h2>
//       <QRCode value={url} size={200} fgColor="#1e3a8a" bgColor="#f9fafb" />
//       <p className="mt-4 text-sm text-gray-500 text-center">{url}</p>
//     </div>
//   );
// };

// export default QRCodeDisplay;


'use client';

import { QRCodeSVG } from 'qrcode.react';

const QRCodeDisplay = () => {
  const url = 'https://www.echobyteconcept.com/';

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-xl rounded-2xl max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Scan to Visit</h2>
      <QRCodeSVG 
        value={url} 
        size={200} 
        fgColor="#1e3a8a" 
        bgColor="#f9fafb" 
      />
      <p className="mt-4 text-sm text-gray-500 text-center break-all">{url}</p>
    </div>
  );
};

export default QRCodeDisplay;

