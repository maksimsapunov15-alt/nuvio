import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { name, contact, type, budget, message, lang } = (body ?? {}) as Record<string, unknown>;

  const webhookUrl = process.env.SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SHEETS_WEBHOOK_URL is not configured");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: new Date().toISOString(),
        name: name ?? "",
        contact: contact ?? "",
        type: type ?? "",
        budget: budget ?? "",
        message: message ?? "",
        lang: lang ?? "",
      }),
    });

    if (!res.ok) {
      throw new Error(`Sheet webhook responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to forward contact submission to sheet:", err);
    return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
  }
}
