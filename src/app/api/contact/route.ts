
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: Request) {
//   const { name, email, phone, message } = await req.json();

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER, // e.g. echobyteconcept@gmail.com
//       pass: process.env.EMAIL_PASS, // App password from Gmail
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: `"ECHOBYTE CONTACT" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       subject: `New message from ${name}`,
//       html: `
//         <h2>Contact Message</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error('Email sending failed:', err);
//     return NextResponse.json({ success: false, error: 'Email failed to send' }, { status: 500 });
//   }
// }






import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function OPTIONS() {
  // Preflight request
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Or your frontend URL instead of '*'
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"ECHOBYTE CONTACT" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h2>Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // ✅ Important!
      },
    });
  } catch (err) {
    console.error('Email sending failed:', err);
    return NextResponse.json({ success: false, error: 'Email failed to send' }, {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // ✅ Important!
      },
    });
  }
}

