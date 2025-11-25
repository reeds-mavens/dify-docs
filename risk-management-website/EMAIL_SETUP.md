# Email Setup Instructies

Het contactformulier is klaar, maar heeft een email service nodig om berichten te verzenden.

## Aanbevolen Opties:

### Optie 1: Resend (Meest eenvoudig)

1. Maak een account op [resend.com](https://resend.com)
2. Verifieer uw domein (dromos.nl)
3. Verkrijg uw API key
4. Installeer de package:
   ```bash
   npm install resend
   ```

5. Update `.env.local`:
   ```
   RESEND_API_KEY=your_api_key_here
   ```

6. Update `app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   await resend.emails.send({
     from: 'website@dromos.nl',
     to: 'info@dromos.nl',
     subject: `Nieuw contact: ${subject}`,
     reply_to: email,
     text: emailBody,
   });
   ```

### Optie 2: SendGrid

1. Maak een account op [sendgrid.com](https://sendgrid.com)
2. Verkrijg uw API key
3. Installeer de package:
   ```bash
   npm install @sendgrid/mail
   ```

4. Update `.env.local`:
   ```
   SENDGRID_API_KEY=your_api_key_here
   ```

5. Update de API route met SendGrid code

### Optie 3: Nodemailer met SMTP

Voor gebruik met Gmail, Outlook, of andere SMTP providers:

1. Installeer nodemailer:
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. Setup App Password (voor Gmail):
   - Ga naar Google Account settings
   - Security → 2-Step Verification → App passwords
   - Genereer een app password

3. Update `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASSWORD=your_app_password
   ```

## Testen

Na configuratie, test het formulier door:
1. De development server te starten: `npm run dev`
2. Naar `/contact` te navigeren
3. Het formulier in te vullen en te verzenden
4. Te controleren of de email is ontvangen

## Producti Security

- Gebruik ALTIJD environment variables voor API keys
- Commit NOOIT `.env.local` naar git (staat al in .gitignore)
- Overweeg rate limiting voor het contact formulier
- Voeg CAPTCHA toe voor extra spam bescherming (bijv. hCaptcha of reCAPTCHA)
