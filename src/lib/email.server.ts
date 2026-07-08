/**
 * Email notification utility using nodemailer + Yahoo SMTP.
 * Server-side only — do not import from client code.
 */
import nodemailer from "nodemailer";

const SMTP_EMAIL = process.env.SMTP_EMAIL || "rightlanehandymanservice@yahoo.com";
const SMTP_PASS = process.env.SMTP_PASS || "";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "rightlanehandymanservice@yahoo.com";

function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export interface LeadEmailData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  address?: string;
  source?: string;
}

export async function sendLeadNotificationEmail(data: LeadEmailData): Promise<void> {
  if (!SMTP_PASS || SMTP_PASS === "your-yahoo-app-password-here") {
    console.warn("[Email] SMTP_PASS not configured. Skipping email notification.");
    return;
  }

  const transporter = createTransporter();

  const serviceLabel = data.service || "General Inquiry";
  const subject = `🔔 New Lead: ${serviceLabel} — ${data.name}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Lead Notification</title>
</head>
<body style="margin:0;padding:0;background:#f4f3ef;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f3ef;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background:#1c140d;padding:28px 32px;text-align:center;">
              <p style="margin:0;color:#ffa326;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Right Lane Handyman Services, LLC</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:700;">New Lead Received</h1>
            </td>
          </tr>

          <!-- Alert bar -->
          <tr>
            <td style="background:#ffa326;padding:10px 32px;text-align:center;">
              <p style="margin:0;color:#1c140d;font-size:13px;font-weight:700;">⚡ A visitor just submitted a request from your website</p>
            </td>
          </tr>

          <!-- Lead details -->
          <tr>
            <td style="padding:32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td colspan="2" style="padding-bottom:20px;border-bottom:1px solid #eae8e1;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#888;">Service Requested</p>
                    <p style="margin:0;font-size:18px;font-weight:700;color:#cc7e14;">${serviceLabel}</p>
                  </td>
                </tr>
                <tr><td colspan="2" style="padding:12px 0 0;"></td></tr>

                <tr>
                  <td width="50%" style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#999;">Full Name</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1c140d;">${data.name}</p>
                  </td>
                  <td width="50%" style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#999;">Phone</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1c140d;">${data.phone || "Not provided"}</p>
                  </td>
                </tr>

                <tr>
                  <td colspan="2" style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#999;">Email Address</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1c140d;">
                      <a href="mailto:${data.email}" style="color:#cc7e14;text-decoration:none;">${data.email || "Not provided"}</a>
                    </p>
                  </td>
                </tr>

                ${data.address ? `
                <tr>
                  <td colspan="2" style="padding:8px 0;vertical-align:top;">
                    <p style="margin:0 0 2px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#999;">Property Address</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#1c140d;">${data.address}</p>
                  </td>
                </tr>
                ` : ""}

                ${data.message ? `
                <tr>
                  <td colspan="2" style="padding:12px 0 0;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#999;">Message / Project Details</p>
                    <div style="background:#f9f7f2;border:1px solid #eae8e1;border-radius:8px;padding:14px 16px;">
                      <p style="margin:0;font-size:14px;color:#444;line-height:1.6;">${data.message.replace(/\n/g, "<br>")}</p>
                    </div>
                  </td>
                </tr>
                ` : ""}

                <tr>
                  <td colspan="2" style="padding-top:24px;">
                    <a href="tel:${(data.phone || "").replace(/\D/g, "")}" style="display:inline-block;background:#ffa326;color:#1c140d;font-size:13px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:100px;margin-right:10px;">📞 Call Now</a>
                    ${data.email ? `<a href="mailto:${data.email}?subject=Re: Your ${serviceLabel} Request" style="display:inline-block;background:#1c140d;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:100px;">✉️ Reply by Email</a>` : ""}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Source footer -->
          <tr>
            <td style="background:#f9f7f2;border-top:1px solid #eae8e1;padding:16px 32px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#aaa;">Source: ${data.source || "website form"} &nbsp;|&nbsp; Right Lane Handyman Services, LLC &nbsp;|&nbsp; Clearwater, FL</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `
NEW LEAD — Right Lane Handyman Services

Service: ${serviceLabel}
Name: ${data.name}
Phone: ${data.phone || "Not provided"}
Email: ${data.email || "Not provided"}
${data.address ? `Address: ${data.address}` : ""}
${data.message ? `Message:\n${data.message}` : ""}

Source: ${data.source || "website form"}
  `.trim();

  await transporter.sendMail({
    from: `"Right Lane Website" <${SMTP_EMAIL}>`,
    to: NOTIFY_EMAIL,
    subject,
    text,
    html,
  });

  console.log(`[Email] Lead notification sent to ${NOTIFY_EMAIL} for ${data.name}`);
}
