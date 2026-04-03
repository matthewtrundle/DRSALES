import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder');

const CHRIS_EMAIL = process.env.NOTIFICATION_EMAIL || 'chris@example.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'Dr. Sales Office <noreply@drchristophersales.com>';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: string;
  service: string;
  message: string;
}

const serviceLabels: Record<string, string> = {
  'corneal-transplant': 'Corneal Transplantation (DMEK)',
  'cataract': 'Cataract Surgery',
  'vision-correction': 'Vision Correction (ICL)',
  'dry-eye': 'Dry Eye Treatment',
  'other': 'Other / General Inquiry',
};

function buildNotificationEmail(data: ContactFormData): string {
  const serviceLabel = serviceLabels[data.service] || data.service || 'Not specified';
  const contactMethod = data.preferredContact || 'Not specified';

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#FAF8F5;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
        <!-- Header -->
        <tr>
          <td style="background-color:#3D3D3D;padding:28px 40px;text-align:center;">
            <h1 style="margin:0;color:#C9A96E;font-size:18px;font-weight:normal;letter-spacing:2px;">NEW CONSULTATION REQUEST</h1>
          </td>
        </tr>
        <!-- Gold accent bar -->
        <tr><td style="background-color:#C9A96E;height:3px;"></td></tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 24px;color:#3D3D3D;font-size:16px;line-height:1.6;">
              A new consultation request has been submitted through the website.
            </p>

            <!-- Patient Info Card -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;border-radius:8px;border:1px solid #f0ede8;margin-bottom:24px;">
              <tr>
                <td style="padding:24px;">
                  <h2 style="margin:0 0 16px;color:#C9A96E;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Patient Information</h2>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;width:140px;vertical-align:top;">Name</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;font-weight:600;">${data.firstName} ${data.lastName}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Email</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;"><a href="mailto:${data.email}" style="color:#3D3D3D;text-decoration:underline;">${data.email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Phone</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;">${data.phone || 'Not provided'}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Preferred Contact</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;text-transform:capitalize;">${contactMethod}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Service Interest</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;">${serviceLabel}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Message Card -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;border-radius:8px;border:1px solid #f0ede8;">
              <tr>
                <td style="padding:24px;">
                  <h2 style="margin:0 0 12px;color:#C9A96E;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Patient&rsquo;s Message</h2>
                  <p style="margin:0;color:#4A4A4A;font-size:15px;line-height:1.8;white-space:pre-wrap;">${data.message}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px 28px;border-top:1px solid #f0ede8;text-align:center;">
            <p style="margin:0;color:#8C8578;font-size:12px;">
              This message was sent from the consultation form at drchristophersales.com
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildConfirmationEmail(data: ContactFormData): string {
  const serviceLabel = serviceLabels[data.service] || data.service || 'your vision needs';

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#FAF8F5;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
        <!-- Header -->
        <tr>
          <td style="background-color:#3D3D3D;padding:32px 40px;text-align:center;">
            <h1 style="margin:0 0 4px;color:#ffffff;font-size:22px;font-weight:normal;">Dr. Christopher S. Sales</h1>
            <p style="margin:0;color:#C9A96E;font-size:12px;letter-spacing:3px;text-transform:uppercase;">M.D., M.P.H &bull; Ophthalmology</p>
          </td>
        </tr>
        <!-- Gold accent bar -->
        <tr><td style="background-color:#C9A96E;height:3px;"></td></tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <!-- Gold bar -->
            <div style="width:40px;height:3px;background-color:#C9A96E;border-radius:2px;margin-bottom:24px;"></div>

            <h2 style="margin:0 0 20px;color:#3D3D3D;font-size:24px;font-weight:normal;">
              Thank you, ${data.firstName}.
            </h2>

            <p style="margin:0 0 20px;color:#4A4A4A;font-size:16px;line-height:1.8;">
              We&rsquo;ve received your consultation request and appreciate you reaching out. Our team will review your information and get back to you within <strong>1&ndash;2 business days</strong>.
            </p>

            <p style="margin:0 0 28px;color:#4A4A4A;font-size:16px;line-height:1.8;">
              Dr. Sales takes the time to understand each patient&rsquo;s needs before discussing next steps. When we follow up, we&rsquo;ll be ready to answer your questions and help you determine if a consultation is the right fit.
            </p>

            <!-- What you told us -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;border-radius:8px;border:1px solid #f0ede8;margin-bottom:28px;">
              <tr>
                <td style="padding:24px;">
                  <h3 style="margin:0 0 12px;color:#C9A96E;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">What You Told Us</h3>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:4px 0;color:#8C8578;font-size:13px;width:120px;vertical-align:top;">Interest</td>
                      <td style="padding:4px 0;color:#3D3D3D;font-size:14px;">${serviceLabel}</td>
                    </tr>
                    <tr>
                      <td style="padding:4px 0;color:#8C8578;font-size:13px;vertical-align:top;">Message</td>
                      <td style="padding:4px 0;color:#3D3D3D;font-size:14px;line-height:1.6;">${data.message}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Need to reach us -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#3D3D3D;border-radius:8px;margin-bottom:28px;">
              <tr>
                <td style="padding:24px;text-align:center;">
                  <p style="margin:0 0 4px;color:#C9A96E;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Need to reach us sooner?</p>
                  <a href="tel:8608264460" style="color:#ffffff;font-size:20px;text-decoration:none;font-weight:600;">(860) 826-4460</a>
                </td>
              </tr>
            </table>

            <p style="margin:0;color:#8C8578;font-size:14px;line-height:1.6;text-align:center;font-style:italic;">
              Every great outcome begins with a conversation.
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px 32px;border-top:1px solid #f0ede8;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="text-align:center;">
                  <p style="margin:0 0 4px;color:#3D3D3D;font-size:14px;font-weight:600;">Dr. Christopher S. Sales, M.D., M.P.H</p>
                  <p style="margin:0 0 4px;color:#8C8578;font-size:12px;">Starling Physicians</p>
                  <p style="margin:0 0 12px;color:#8C8578;font-size:12px;">1210 Silas Deane Highway, Wethersfield, CT 06109</p>
                  <p style="margin:0;color:#8C8578;font-size:11px;">
                    <a href="https://drchristophersales.com" style="color:#C9A96E;text-decoration:none;">drchristophersales.com</a>
                    &nbsp;&bull;&nbsp;
                    <a href="tel:8608264460" style="color:#8C8578;text-decoration:none;">(860) 826-4460</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- Unsubscribe note -->
      <table width="600" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:20px 40px;text-align:center;">
            <p style="margin:0;color:#b0b0b0;font-size:11px;">
              You received this email because you submitted a consultation request at drchristophersales.com. This is a one-time confirmation &mdash; you will not be added to any mailing list.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Send notification email to Chris
    await resend.emails.send({
      from: FROM_EMAIL,
      to: CHRIS_EMAIL,
      subject: `New Consultation Request: ${data.firstName} ${data.lastName}`,
      html: buildNotificationEmail(data),
    });

    // Send confirmation email to patient
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: `We received your request — Dr. Christopher S. Sales`,
      html: buildConfirmationEmail(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please call us at (860) 826-4460.' },
      { status: 500 }
    );
  }
}
