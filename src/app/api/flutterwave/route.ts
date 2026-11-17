
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Flutterwave Webhook Handler
 *
 * - Supports legacy verif-hash verification
 * - Supports newer HMAC-SHA256 signature verification
 * - Saves verified webhook payloads to Firestore
 * - Compatible with Next.js App Router and Vercel
 */

function safeCompare(a: string, b: string): boolean {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);

  return (
    bufferA.length === bufferB.length &&
    crypto.timingSafeEqual(bufferA, bufferB)
  );
}

export async function POST(req: NextRequest) {
  try {
    // 1. Read the raw request body
    const rawBody = await req.text();

    // 2. Get Flutterwave webhook secret hash
    const secretHash = process.env.FLW_SECRET_HASH;

    if (!secretHash) {
      console.error("FLW_SECRET_HASH is not configured");

      return NextResponse.json(
        { error: "Webhook secret not configured" },
        { status: 500 }
      );
    }

    // 3. Retrieve webhook signatures
    const legacySignature = req.headers.get("verif-hash");
    const modernSignature = req.headers.get("flutterwave-signature");

    let isValidSignature = false;

    // 4. Verify legacy Flutterwave webhook
    if (legacySignature) {
      isValidSignature = safeCompare(
        legacySignature,
        secretHash
      );
    }

    // 5. Verify newer Flutterwave webhook
    else if (modernSignature) {
      const expectedSignature = crypto
        .createHmac("sha256", secretHash)
        .update(rawBody)
        .digest("base64");

      isValidSignature = safeCompare(
        modernSignature,
        expectedSignature
      );
    }

    // 6. Reject invalid signatures
    if (!isValidSignature) {
      return NextResponse.json(
        { error: "Invalid or missing Flutterwave signature" },
        { status: 401 }
      );
    }

    // 7. Parse verified webhook payload
    const event = JSON.parse(rawBody);

    // 8. Dynamically import Firebase
    const { db } = await import("@/lib/firebase");
    const { collection, addDoc } = await import("firebase/firestore");

    // 9. Save webhook event to Firestore
    await addDoc(collection(db, "flutterwave_webhooks"), {
      event: event.event || event.type || "unknown",
      data: event.data || null,
      payload: event,
      signatureVersion: modernSignature ? "modern" : "legacy",
      createdAt: new Date().toISOString(),
    });

    // 10. Return success
    return NextResponse.json(
      {
        status: "Webhook processed successfully",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Flutterwave Webhook Error:", error);

    return NextResponse.json(
      {
        error: "Webhook processing failed",
        details:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}
