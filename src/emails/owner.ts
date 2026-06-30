export interface OwnerEmailData {
  firstName: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export function ownerEmailHtml(data: OwnerEmailData): string {
  const { firstName, email, subject, message, timestamp } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Website Inquiry | ${subject}</title>
  <!--[if mso]>
  <noscript>
    <xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#0d0f14;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#0d0f14;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 60%,#2563eb 100%);border-radius:12px 12px 0 0;padding:36px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#93c5fd;">SGIS Mapping</p>
                    <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">📬 New Website Inquiry</h1>
                    <p style="margin:8px 0 0;font-size:13px;color:#bfdbfe;">A potential client submitted the contact form</p>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <div style="background:rgba(255,255,255,0.12);border-radius:8px;padding:10px 16px;display:inline-block;">
                      <p style="margin:0;font-size:11px;color:#bfdbfe;font-weight:600;">RECEIVED</p>
                      <p style="margin:4px 0 0;font-size:12px;color:#ffffff;font-weight:700;">${timestamp}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Service Badge -->
          <tr>
            <td style="background:#1a1d27;padding:0 40px;">
              <div style="background:linear-gradient(90deg,#1e3a8a,#1d4ed8);border-radius:0;padding:14px 20px;margin:0 -20px;">
                <p style="margin:0;font-size:12px;color:#93c5fd;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Service Requested</p>
                <p style="margin:4px 0 0;font-size:18px;color:#ffffff;font-weight:700;">${subject}</p>
              </div>
            </td>
          </tr>

          <!-- Details Table -->
          <tr>
            <td style="background:#1a1d27;padding:32px 40px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">

                <!-- Name -->
                <tr>
                  <td style="padding:0 0 20px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#111318;border-radius:10px;border:1px solid #1e293b;">
                      <tr>
                        <td style="padding:16px 20px;">
                          <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#64748b;">Client Name</p>
                          <p style="margin:0;font-size:16px;color:#f1f5f9;font-weight:600;">${firstName}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding:0 0 20px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#111318;border-radius:10px;border:1px solid #1e293b;">
                      <tr>
                        <td style="padding:16px 20px;">
                          <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#64748b;">Email Address</p>
                          <a href="mailto:${email}" style="font-size:16px;color:#3b82f6;font-weight:600;text-decoration:none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:0 0 28px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#111318;border-radius:10px;border:1px solid #1e293b;">
                      <tr>
                        <td style="padding:16px 20px;">
                          <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#64748b;">Message</p>
                          <p style="margin:0;font-size:14px;color:#cbd5e1;line-height:1.7;white-space:pre-wrap;">${message}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="background:#1a1d27;padding:0 40px 40px;text-align:center;">
              <a href="mailto:${email}?subject=Re: Your Inquiry about ${encodeURIComponent(subject)} | SGIS Mapping"
                 style="display:inline-block;background:linear-gradient(135deg,#1d4ed8,#2563eb);color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:16px 36px;border-radius:10px;letter-spacing:0.05em;">
                Reply to ${firstName} →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#111318;border-radius:0 0 12px 12px;padding:24px 40px;border-top:1px solid #1e293b;">
              <p style="margin:0;font-size:12px;color:#475569;text-align:center;">
                This email was automatically generated from the contact form at <strong style="color:#64748b;">sgismapping.com</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function ownerEmailText(data: OwnerEmailData): string {
  const { firstName, email, subject, message, timestamp } = data;
  return `NEW WEBSITE INQUIRY — SGIS Mapping
======================================
Received: ${timestamp}

Service Requested: ${subject}
Client Name:       ${firstName}
Email Address:     ${email}

MESSAGE:
${message}

--------------------------------------
Reply directly to this email or click: mailto:${email}
`;
}
