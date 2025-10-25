
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text(); // 🔒 we need the raw text for signature verification
    const paystackSignature = req.headers.get("x-paystack-signature");

    if (!paystackSignature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    // ✅ Verify signature (security check)
    const hash = crypto
      .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY!)
      .update(rawBody)
      .digest("hex");

    if (hash !== paystackSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    // ✅ Parse the JSON now that signature is valid
    const event = JSON.parse(rawBody);

    // ✅ Save the event in Firestore
    await addDoc(collection(db, "paystack_webhooks"), {
      event: event.event,
      data: event.data,
      timestamp: new Date().toISOString(),
    });

    // ✅ Handle event types (optional)
    if (event.event === "charge.success") {
      console.log("💰 Payment successful:", event.data.reference);
      // You can perform additional logic here, like marking order as paid
    }

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error: any) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
