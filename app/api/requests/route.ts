import { NextResponse } from "next/server";
import { requestSchema } from "@/lib/schema/request";

/**
 * Request intake endpoint.
 *
 * V1 deliberately has no database: the request is validated and logged
 * server-side. Wire the TODO below to the channel NEWBREED actually works
 * from — options, in rough order of effort:
 *
 *  1. Email forwarding (e.g. Resend/Nodemailer) to the studio inbox.
 *  2. A WhatsApp Business notification via the Cloud API.
 *  3. Persistence: a database table or a CMS collection (including Wix
 *     Headless data collections) — the payload already matches the schema.
 *
 * The reference file is received here; store it (S3/UploadThing/CMS asset)
 * when persistence is added.
 */
export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const raw = form.get("payload");

    if (typeof raw !== "string") {
      return NextResponse.json({ ok: false, error: "Missing payload." }, { status: 400 });
    }

    const parsed = requestSchema.safeParse(JSON.parse(raw));
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid request data." },
        { status: 422 },
      );
    }

    const reference = form.get("reference");
    const referenceMeta =
      reference instanceof File
        ? { name: reference.name, type: reference.type, size: reference.size }
        : null;

    // TODO: forward to email / WhatsApp / storage (see options above).
    console.log("[NEWBREED] New request received", {
      request: parsed.data,
      reference: referenceMeta,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process request." },
      { status: 500 },
    );
  }
}
