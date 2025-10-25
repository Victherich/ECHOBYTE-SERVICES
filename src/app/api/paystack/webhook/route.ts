import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase"; // adjust if needed
import { collection, addDoc } from "firebase/firestore";
import crypto from "crypto";

/**
 * Paystack Webhook Handler (TypeScript)
 * Verifies signature and saves event data to Firestore
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
      .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY ?? "")
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
  } catch (error: unknown) {
    console.error("Paystack Webhook Error:", error);

    const message =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      { error: "Webhook processing failed", details: message },
      { status: 500 }
    );
  }
}
