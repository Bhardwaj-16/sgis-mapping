export interface CustomerEmailData {
  firstName: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export function customerEmailHtml(data: CustomerEmailData): string {
  const { firstName, subject, message, timestamp } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We've received your inquiry | SGIS Mapping</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f1f5f9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 60%,#2563eb 100%);border-radius:12px 12px 0 0;padding:40px 40px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#93c5fd;">SGIS Mapping</p>
                    <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;line-height:1.3;">We've received<br />your inquiry ✓</h1>
                    <p style="margin:12px 0 0;font-size:14px;color:#bfdbfe;line-height:1.6;">
                      Thank you for reaching out. Our team will review your request and get back to you within <strong style="color:#ffffff;">24 hours</strong>.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px;">

              <p style="margin:0 0 24px;font-size:16px;color:#1e293b;font-weight:600;">Hello ${firstName},</p>

              <p style="margin:0 0 20px;font-size:14px;color:#475569;line-height:1.7;">
                We have successfully received your inquiry regarding <strong style="color:#1e293b;">${subject}</strong>.
                Our geospatial experts are reviewing your message and will respond with a tailored proposal within <strong style="color:#1d4ed8;">24 hours</strong>.
              </p>

              <p style="margin:0 0 28px;font-size:14px;color:#475569;line-height:1.7;">
                If you have additional details or attachments to share, simply <strong>reply to this email</strong> — it will go directly to our team and remain in the same thread.
              </p>

              <!-- Submission Summary -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;margin-bottom:32px;">
                <tr>
                  <td style="padding:20px 24px 16px;">
                    <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#94a3b8;">Your Submission Summary</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;width:130px;">
                          <p style="margin:0;font-size:12px;color:#94a3b8;font-weight:600;">Service</p>
                        </td>
                        <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                          <p style="margin:0;font-size:13px;color:#1e293b;font-weight:600;">${subject}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                          <p style="margin:0;font-size:12px;color:#94a3b8;font-weight:600;">Submitted</p>
                        </td>
                        <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                          <p style="margin:0;font-size:13px;color:#475569;">${timestamp}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:12px 0 4px;vertical-align:top;">
                          <p style="margin:0;font-size:12px;color:#94a3b8;font-weight:600;">Your Message</p>
                        </td>
                        <td style="padding:12px 0 4px;">
                          <p style="margin:0;font-size:13px;color:#475569;line-height:1.6;white-space:pre-wrap;">${message}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What Happens Next -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
                <tr>
                  <td>
                    <p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#94a3b8;">What Happens Next</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="vertical-align:top;padding:0 14px 14px 0;width:32px;">
                          <div style="width:28px;height:28px;background:#dbeafe;border-radius:50%;text-align:center;line-height:28px;font-size:12px;font-weight:700;color:#1d4ed8;">1</div>
                        </td>
                        <td style="vertical-align:top;padding-bottom:14px;">
                          <p style="margin:0 0 2px;font-size:13px;font-weight:600;color:#1e293b;">Team Review</p>
                          <p style="margin:0;font-size:13px;color:#64748b;line-height:1.5;">Our analysts review your requirements and assess project scope.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;padding:0 14px 14px 0;">
                          <div style="width:28px;height:28px;background:#dbeafe;border-radius:50%;text-align:center;line-height:28px;font-size:12px;font-weight:700;color:#1d4ed8;">2</div>
                        </td>
                        <td style="vertical-align:top;padding-bottom:14px;">
                          <p style="margin:0 0 2px;font-size:13px;font-weight:600;color:#1e293b;">Tailored Proposal</p>
                          <p style="margin:0;font-size:13px;color:#64748b;line-height:1.5;">We prepare a detailed proposal with timelines and deliverables.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;padding:0 14px 0 0;">
                          <div style="width:28px;height:28px;background:#dbeafe;border-radius:50%;text-align:center;line-height:28px;font-size:12px;font-weight:700;color:#1d4ed8;">3</div>
                        </td>
                        <td style="vertical-align:top;">
                          <p style="margin:0 0 2px;font-size:13px;font-weight:600;color:#1e293b;">Direct Response</p>
                          <p style="margin:0;font-size:13px;color:#64748b;line-height:1.5;">You hear from us within 24 hours with next steps.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:14px;color:#475569;line-height:1.7;">
                Warm regards,<br />
                <strong style="color:#1e293b;">The SGIS Mapping Team</strong><br />
                <span style="font-size:13px;color:#94a3b8;">Geospatial Precision Intelligence</span>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border-radius:0 0 12px 12px;padding:24px 40px;border-top:1px solid #e2e8f0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:12px;color:#94a3b8;text-align:center;">
                      <strong style="color:#64748b;">SGIS Mapping</strong> · Geospatial Precision Intelligence
                    </p>
                    <p style="margin:0;font-size:11px;color:#cbd5e1;text-align:center;">
                      You are receiving this email because you submitted a form at sgismapping.com.<br />
                      Reply to this email to contact our team directly.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function customerEmailText(data: CustomerEmailData): string {
  const { firstName, subject, message, timestamp } = data;
  return `Hello ${firstName},

We've received your inquiry regarding "${subject}" submitted on ${timestamp}.

Our team will review your request and respond within 24 hours.

If you have additional information, simply reply to this email — it will go directly to our team.

YOUR SUBMISSION SUMMARY
-----------------------
Service:   ${subject}
Submitted: ${timestamp}

Your Message:
${message}

--------------------------------------
Warm regards,
The SGIS Mapping Team
Geospatial Precision Intelligence

You received this email because you submitted the contact form at sgismapping.com.
`;
}
