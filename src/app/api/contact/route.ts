import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill out all required fields (Name, Email, Service, Message).",
        },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // In a production deployment, this is where you connect your CRM (HubSpot, Salesforce) or email dispatch (Resend, SendGrid)
    console.log("[BRC Contact Submission]:", {
      name,
      company: company || "N/A",
      email,
      phone: phone || "N/A",
      service,
      budget: budget || "Not Specified",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. A senior BRC technical architect will contact you within 24 hours.",
    });
  } catch (error) {
    console.error("[BRC Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again or email us directly at contact@brc-tech.com.",
      },
      { status: 500 }
    );
  }
}
