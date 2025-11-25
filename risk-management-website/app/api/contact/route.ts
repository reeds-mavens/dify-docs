import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Alle verplichte velden moeten worden ingevuld.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig email adres.' },
        { status: 400 }
      );
    }

    // Here you would integrate with an email service like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    // For now, we'll create a formatted email body that could be sent
    const emailBody = `
Nieuw contactformulier bericht van Dromos website

Van: ${name}
Email: ${email}
Telefoon: ${phone || 'Niet opgegeven'}
Onderwerp: ${subject}

Bericht:
${message}

---
Dit bericht is verzonden via het contactformulier op dromos.nl
    `.trim();

    // TODO: Integrate with actual email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@dromos.nl',
    //   to: 'info@dromos.nl',
    //   subject: `Nieuw contact: ${subject}`,
    //   text: emailBody,
    // });

    console.log('Contact form submission:', emailBody);

    // For production, you would return success only after email is sent
    // For now, we'll simulate success
    return NextResponse.json(
      {
        success: true,
        message: 'Bericht ontvangen. Email functionaliteit moet nog worden geconfigureerd.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verwerken van uw bericht.' },
      { status: 500 }
    );
  }
}
