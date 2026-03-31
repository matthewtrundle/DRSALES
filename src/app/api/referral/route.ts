import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder');

const CHRIS_EMAIL = process.env.NOTIFICATION_EMAIL || 'chris@example.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'Dr. Sales Office <noreply@drchristophersales.com>';

interface ReferralFormData {
  physicianName: string;
  practiceName: string;
  physicianPhone: string;
  physicianEmail: string;
  physicianSpecialty: string;
  patientName: string;
  patientPhone: string;
  patientDOB: string;
  referralReason: string;
  urgency: string;
  additionalNotes: string;
}

const reasonLabels: Record<string, string> = {
  'fuchs-dystrophy': "Fuchs' Endothelial Dystrophy",
  'keratoconus': 'Keratoconus',
  'corneal-transplant': 'Corneal Transplant Evaluation',
  'corneal-opacity': 'Corneal Scarring / Opacity',
  'failed-graft': 'Failed Corneal Graft',
  'icl': 'EVO ICL Evaluation',
  'complex-cataract': 'Complex Cataract',
  'dry-eye': 'Dry Eye Treatment',
  'anterior-segment-trauma': 'Anterior Segment Trauma',
  'pterygium': 'Pterygium',
  'dry-eye-severe': 'Severe Dry Eye Disease',
  'second-opinion': 'Second Opinion',
  'other': 'Other',
};

const urgencyLabels: Record<string, string> = {
  'routine': 'Routine',
  'soon': 'Within 2 Weeks',
  'urgent': 'Urgent (Within Days)',
};

const specialtyLabels: Record<string, string> = {
  'optometry': 'Optometry',
  'ophthalmology': 'Ophthalmology',
  'primary-care': 'Primary Care',
  'other': 'Other',
};

function buildReferralNotificationEmail(data: ReferralFormData): string {
  const reasonLabel = reasonLabels[data.referralReason] || data.referralReason || 'Not specified';
  const urgencyLabel = urgencyLabels[data.urgency] || data.urgency || 'Not specified';
  const specialtyLabel = specialtyLabels[data.physicianSpecialty] || data.physicianSpecialty || 'Not specified';

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
            <h1 style="margin:0;color:#C9A96E;font-size:18px;font-weight:normal;letter-spacing:2px;">NEW PHYSICIAN REFERRAL</h1>
          </td>
        </tr>
        <!-- Gold accent bar -->
        <tr><td style="background-color:#C9A96E;height:3px;"></td></tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 24px;color:#3D3D3D;font-size:16px;line-height:1.6;">
              A new physician referral has been submitted through the website.
            </p>

            <!-- Referring Physician Card -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;border-radius:8px;border:1px solid #f0ede8;margin-bottom:24px;">
              <tr>
                <td style="padding:24px;">
                  <h2 style="margin:0 0 16px;color:#C9A96E;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Referring Physician</h2>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;width:140px;vertical-align:top;">Name</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;font-weight:600;">${data.physicianName}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Practice</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;">${data.practiceName || 'Not provided'}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Phone</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;">${data.physicianPhone}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Email</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;">${data.physicianEmail ? `<a href="mailto:${data.physicianEmail}" style="color:#3D3D3D;text-decoration:underline;">${data.physicianEmail}</a>` : 'Not provided'}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Specialty</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;">${specialtyLabel}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Patient Info Card -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;border-radius:8px;border:1px solid #f0ede8;margin-bottom:24px;">
              <tr>
                <td style="padding:24px;">
                  <h2 style="margin:0 0 16px;color:#C9A96E;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Patient Information</h2>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;width:140px;vertical-align:top;">Name</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;font-weight:600;">${data.patientName}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Phone</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;">${data.patientPhone || 'Not provided'}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Date of Birth</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;">${data.patientDOB || 'Not provided'}</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Referral Details Card -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;border-radius:8px;border:1px solid #f0ede8;">
              <tr>
                <td style="padding:24px;">
                  <h2 style="margin:0 0 16px;color:#C9A96E;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Referral Details</h2>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;width:140px;vertical-align:top;">Reason</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;font-weight:600;">${reasonLabel}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Urgency</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;">${urgencyLabel}</td>
                    </tr>
                    ${data.additionalNotes ? `<tr>
                      <td style="padding:6px 0;color:#8C8578;font-size:13px;vertical-align:top;">Notes</td>
                      <td style="padding:6px 0;color:#3D3D3D;font-size:15px;line-height:1.6;white-space:pre-wrap;">${data.additionalNotes}</td>
                    </tr>` : ''}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px 28px;border-top:1px solid #f0ede8;text-align:center;">
            <p style="margin:0;color:#8C8578;font-size:12px;">
              This referral was submitted through the physician referral form at drchristophersales.com
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
    const data: ReferralFormData = await request.json();

    // Validate required fields
    if (!data.physicianName || !data.physicianPhone || !data.patientName || !data.referralReason) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Send notification email to Chris
    await resend.emails.send({
      from: FROM_EMAIL,
      to: CHRIS_EMAIL,
      subject: `New Physician Referral: ${data.patientName} (from ${data.physicianName})`,
      html: buildReferralNotificationEmail(data),
    });

    // Send confirmation to referring physician if email provided
    if (data.physicianEmail) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: data.physicianEmail,
        subject: `Referral received — Dr. Christopher S. Sales`,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#FAF8F5;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
        <tr>
          <td style="background-color:#3D3D3D;padding:32px 40px;text-align:center;">
            <h1 style="margin:0 0 4px;color:#ffffff;font-size:22px;font-weight:normal;">Dr. Christopher S. Sales</h1>
            <p style="margin:0;color:#C9A96E;font-size:12px;letter-spacing:3px;text-transform:uppercase;">MD, MPH &bull; Ophthalmology</p>
          </td>
        </tr>
        <tr><td style="background-color:#C9A96E;height:3px;"></td></tr>
        <tr>
          <td style="padding:40px;">
            <div style="width:40px;height:3px;background-color:#C9A96E;border-radius:2px;margin-bottom:24px;"></div>
            <h2 style="margin:0 0 20px;color:#3D3D3D;font-size:24px;font-weight:normal;">
              Thank you for the referral.
            </h2>
            <p style="margin:0 0 20px;color:#4A4A4A;font-size:16px;line-height:1.8;">
              We&rsquo;ve received your referral for <strong>${data.patientName}</strong> and will contact them to schedule an appointment. We&rsquo;ll keep you informed of their care.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#3D3D3D;border-radius:8px;margin-bottom:28px;">
              <tr>
                <td style="padding:24px;text-align:center;">
                  <p style="margin:0 0 4px;color:#C9A96E;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Questions?</p>
                  <a href="tel:8608264460" style="color:#ffffff;font-size:20px;text-decoration:none;font-weight:600;">(860) 826-4460</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px 32px;border-top:1px solid #f0ede8;text-align:center;">
            <p style="margin:0 0 4px;color:#3D3D3D;font-size:14px;font-weight:600;">Dr. Christopher S. Sales, MD, MPH</p>
            <p style="margin:0 0 4px;color:#8C8578;font-size:12px;">Starling Physicians</p>
            <p style="margin:0;color:#8C8578;font-size:12px;">Wethersfield &amp; New Britain, Connecticut</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Referral form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please call us at (860) 826-4460.' },
      { status: 500 }
    );
  }
}
