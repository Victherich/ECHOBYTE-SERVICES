// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/lib/firebase";
// import { collection, addDoc } from "firebase/firestore";
// import crypto from "crypto";

// export async function POST(req: NextRequest) {
//   try {
//     const rawBody = await req.text();
//     const paystackSignature = req.headers.get("x-paystack-signature");

//     if (!paystackSignature) {
//       return NextResponse.json({ error: "Missing signature" }, { status: 400 });
//     }

//     const secret = process.env.PAYSTACK_SECRET_KEY ?? "";
//     const hash = crypto.createHmac("sha512", secret).update(rawBody).digest("hex");

//     if (hash !== paystackSignature) {
//       return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
//     }

//     const event = JSON.parse(rawBody);

//     await addDoc(collection(db, "paystack_webhooks"), {
//       event: event.event,
//       data: event.data,
//       createdAt: new Date().toISOString(),
//     });

//     return NextResponse.json({ status: "success" }, { status: 200 });
//   } catch (error: unknown) {
//     const message =
//       error instanceof Error ? error.message : "Unknown error occurred";
//     console.error("Paystack Webhook Error:", message);

//     return NextResponse.json(
//       { error: "Webhook processing failed", details: message },
//       { status: 500 }
//     );
//   }
// }



// src/app/api/paystack/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * ✅ Paystack Webhook Handler (TypeScript)
 * - Verifies Paystack signature
 * - Saves webhook payload to Firestore
 * - Safe for Vercel / Next.js 15+
 */
export async function POST(req: NextRequest) {
  try {
    // 🔒 Paystack sends the raw body as text
    const rawBody = await req.text();
    const paystackSignature = req.headers.get("x-paystack-signature");

    if (!paystackSignature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    // ✅ Verify signature using your Paystack secret key
    const hash = crypto
      .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY as string)
      .update(rawBody)
      .digest("hex");

    if (hash !== paystackSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    // ✅ Parse the verified JSON payload
    const event = JSON.parse(rawBody);

    // 🧩 Dynamically import Firebase (avoids build-time errors)
    const { db } = await import("@/lib/firebase");
    const { collection, addDoc } = await import("firebase/firestore");

    // 💾 Save webhook event in Firestore
    await addDoc(collection(db, "paystack_webhooks"), {
      event: event.event,
      data: event.data,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ status: "Webhook processed successfully" }, { status: 200 });
  } catch (error) {
    console.error("⚠️ Paystack Webhook Error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed", details: (error as Error).message },
      { status: 500 }
    );
  }
}
