// src/app/api/paystack/webhook/route.ts

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const paystackSignature = req.headers.get("x-paystack-signature");

    if (!paystackSignature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    const secret = process.env.PAYSTACK_SECRET_KEY ?? "";
    const hash = crypto.createHmac("sha512", secret).update(rawBody).digest("hex");

    if (hash !== paystackSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    const event = JSON.parse(rawBody);

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
