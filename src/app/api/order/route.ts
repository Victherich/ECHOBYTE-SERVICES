import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const {
    customerName,
    customerEmail,
    customerPhone,
    productName,
    productUrl,
    transactionReference,
    amountPaid,
    paidAt,
    sellerEmail,
    currency,
    productId
  } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // your Gmail address
      pass: process.env.EMAIL_PASS,  // your Gmail App Password
    },
  });

  const sellerMailOptions = {
    from: `"ECHOBYTE CONCEPT" <${process.env.EMAIL_USER}>`,
    to: sellerEmail,
    subject: `New Product Purchase - ${productName}`,
    html: `
      <h2>New Purchase Notification</h2>
      <p><strong>Product:</strong> ${productName}</p>
      <p><strong>Product ID:</strong> ${productId}</p>
      <p><strong>Amount:</strong> ${amountPaid}</p>
      <p><strong>Currency:</strong> ${currency}</p>
      <p><strong>Transaction Ref:</strong> ${transactionReference}</p>
      <p><strong>Paid At:</strong> ${paidAt}</p>
      <hr/>
      <h3>Customer Details</h3>
      <p><strong>Name:</strong> ${customerName}</p>
      <p><strong>Email:</strong> ${customerEmail}</p>
      <p><strong>Phone:</strong> ${customerPhone}</p>
    `,
  };

  const buyerMailOptions = {
    from: `"ECHOBYTE CONCEPT" <${process.env.EMAIL_USER}>`,
    to: customerEmail,
    subject: `Your Purchase of ${productName}`,
    html: `
      <h2>Thank You for Your Purchase!</h2>
      <p>Hi ${customerName},</p>
      <p>Thank you for purchasing <strong>${productName}</strong>.</p>
      <p><strong>Product ID:</strong> ${productId}</p>
      <p><strong>Amount Paid:</strong> ${amountPaid}</p>
      <p><strong>Currency:</strong> ${currency}</p>
      <p><strong>Transaction Ref:</strong> ${transactionReference}</p>
      <p>You can access your product here: <a href="${productUrl}">${productUrl}</a></p>
      <p>If you have any questions, feel free to reply to this email.</p>
      <br/>
      <p>– Echobyte Concept Team</p>
    `,
  };

  try {
    // Send emails
    await transporter.sendMail(sellerMailOptions);
    await transporter.sendMail(buyerMailOptions);

    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  } catch (error) {
    console.error('Email sending failed:', error);

    return NextResponse.json(
      { success: false, error: 'Email failed to send' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  }
}

// Handle CORS preflight OPTIONS request
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
