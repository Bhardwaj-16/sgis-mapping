import { Resend } from 'resend';
import { ownerEmailHtml, ownerEmailText, type OwnerEmailData } from '@/emails/owner';
import { customerEmailHtml, customerEmailText, type CustomerEmailData } from '@/emails/customer';

// Instantiated once at module level — reused across requests
const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = process.env.OWNER_EMAIL!; // info@sgismapping.com

/** Send the lead-notification email to the business owner. */
export async function sendOwnerEmail(data: OwnerEmailData): Promise<void> {
  const { error } = await resend.emails.send({
    from: `SGIS Mapping Website <${OWNER_EMAIL}>`,
    to: [OWNER_EMAIL],
    replyTo: data.email,
    subject: `New Website Inquiry | ${data.subject}`,
    html: ownerEmailHtml(data),
    text: ownerEmailText(data),
  });

  if (error) throw new Error(`Resend owner email error: ${error.message}`);
}

/** Send the branded confirmation email to the customer. */
export async function sendCustomerEmail(data: CustomerEmailData): Promise<void> {
  const { error } = await resend.emails.send({
    from: `SGIS Mapping <${OWNER_EMAIL}>`,
    to: [data.email],
    replyTo: OWNER_EMAIL, // replies stay in the same thread, land in owner inbox
    subject: `We've received your inquiry | SGIS Mapping`,
    html: customerEmailHtml(data),
    text: customerEmailText(data),
  });

  if (error) throw new Error(`Resend customer email error: ${error.message}`);
}
