import { NextResponse } from 'next/server';
import { sendOwnerEmail, sendCustomerEmail } from '@/lib/email';

// ---------------------------------------------------------------------------
// Allowed service options — must match the Contact form select options
// ---------------------------------------------------------------------------
const ALLOWED_SUBJECTS = new Set([
  'Service Required',
  'Aerial Triangulation',
  'Digital Photogrammetry',
  'Ortho Processing',
  'LiDAR Processing',
  '3D Modeling',
  'GIS Mobile Application',
  'Utility Mapping',
  'GIS/CAD Services',
  'Other',
]);

// ---------------------------------------------------------------------------
// Sanitization helper — strips HTML tags and trims whitespace
// ---------------------------------------------------------------------------
function sanitize(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/<[^>]*>/g, '') // strip HTML tags
    .replace(/[\u0000-\u001F\u007F]/g, '') // strip control characters
    .trim();
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------
interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

function validate(fields: {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!fields.firstName || fields.firstName.length < 1) {
    errors.firstName = 'First name is required.';
  } else if (fields.firstName.length > 100) {
    errors.firstName = 'First name must be 100 characters or fewer.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!fields.email) {
    errors.email = 'Email address is required.';
  } else if (!emailRegex.test(fields.email)) {
    errors.email = 'Please provide a valid email address.';
  } else if (fields.email.length > 254) {
    errors.email = 'Email address is too long.';
  }

  if (!fields.subject || !ALLOWED_SUBJECTS.has(fields.subject)) {
    errors.subject = 'Please select a valid service.';
  }

  if (!fields.message || fields.message.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  } else if (fields.message.length > 5000) {
    errors.message = 'Message must be 5000 characters or fewer.';
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(request: Request) {
  // ── 1. Parse body ──────────────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 }
    );
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json(
      { success: false, message: 'Request body must be a JSON object.' },
      { status: 400 }
    );
  }

  // ── 2. Sanitize ────────────────────────────────────────────────────────────
  const raw = body as Record<string, unknown>;
  const firstName = sanitize(raw.firstName);
  const email     = sanitize(raw.email);
  const subject   = sanitize(raw.subject);
  const message   = sanitize(raw.message);

  // ── 3. Validate ────────────────────────────────────────────────────────────
  const { valid, errors } = validate({ firstName, email, subject, message });

  if (!valid) {
    return NextResponse.json(
      { success: false, message: 'Validation failed.', errors },
      { status: 422 }
    );
  }

  // ── 4. Build shared data ───────────────────────────────────────────────────
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'long',
    timeStyle: 'short',
  });

  const emailData = { firstName, email, subject, message, timestamp };

  // ── 5. Send emails via SES (both run concurrently) ─────────────────────────
  try {
    await Promise.all([
      sendOwnerEmail(emailData),
      sendCustomerEmail(emailData),
    ]);
  } catch (error) {
    console.error('[Contact API] SES send error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }

  // ── 6. Return success ──────────────────────────────────────────────────────
  return NextResponse.json({ success: true });
}
