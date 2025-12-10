import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

async function sendEmail(to: string[], subject: string, html: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Brightleaf Design Studio <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send email: ${error}`);
  }

  return response.json();
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone });

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to business owner
    const businessEmailResponse = await sendEmail(
      ["Satish@brightleafdesignstudio.com"],
      `New Contact Form Submission from ${name}`,
      `
        <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #6B46C1; font-family: 'Playfair Display', Georgia, serif;">New Contact Form Submission</h1>
          <p style="color: #333; font-size: 16px;">You have received a new inquiry from your website:</p>
          
          <div style="background-color: #f8f7f4; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; padding: 15px; background-color: #fff; border-radius: 5px;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 14px;">This email was sent from the contact form on brightleafdesignstudio.com</p>
        </div>
      `
    );

    console.log("Business email sent:", businessEmailResponse);

    // Send confirmation email to customer
    const customerEmailResponse = await sendEmail(
      [email],
      "Thank you for contacting Brightleaf Design Studio!",
      `
        <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #6B46C1; font-family: 'Playfair Display', Georgia, serif;">Thank You, ${name}!</h1>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            We have received your message and appreciate you reaching out to us. 
            Our team will review your inquiry and get back to you within 24 hours.
          </p>
          
          <div style="background-color: #f8f7f4; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="color: #666; font-size: 14px;">Here's a copy of your message:</p>
            <p style="color: #333; padding: 15px; background-color: #fff; border-radius: 5px;">${message}</p>
          </div>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to browse our portfolio or call us directly at 
            <a href="tel:+919885301292" style="color: #6B46C1;">+91 98853 01292</a>.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #333; font-weight: bold;">Brightleaf Design Studio</p>
            <p style="color: #666; font-size: 14px; margin: 5px 0;">5th Floor, Plot No 60, Masjid Banda, Hyderabad 500084</p>
            <p style="color: #666; font-size: 14px; margin: 5px 0;">Phone: +91 98853 01292</p>
            <p style="color: #666; font-size: 14px; margin: 5px 0;">Email: Satish@brightleafdesignstudio.com</p>
          </div>
        </div>
      `
    );

    console.log("Customer confirmation email sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);