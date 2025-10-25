import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase"; // make sure this path matches your firebaseConfig file
import { collection, addDoc } from "firebase/firestore";
import crypto from "crypto";

/**
 * Paystack Webhook Handler (TypeScript)
 * Verifies the signature and stores event data in Firestore
 */
export async function POST(req: NextRequest) {
  try {
    // 🔒 Paystack sends the raw body (not JSON), so read it as text
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

    // ✅ Parse verified data
    const event = JSON.parse(rawBody);

    // 💾 Save to Firestore
    await addDoc(collection(db, "paystack_webhooks"), {
      event: event.event,
      data: event.data,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error: any) {
    console.error("Paystack Webhook Error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed", details: error.message },
      { status: 500 }
    );
  }
}
