import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL;

export async function POST(req, res) {
    const { email, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
        from: 'ResendPorto <onboarding@resend.dev>',
        to: [myEmail],
        subject: subject,
        html:   `<>
                    <p>Email Sender:</p>
                    <strong>${email}</strong>
                    <p>New message submitted:</p>
                    <p>${message}</p>
                </>`,
    });

    if (error) {
        return NextResponse.json({ error });
    }
    
    return NextResponse.json(data);
}