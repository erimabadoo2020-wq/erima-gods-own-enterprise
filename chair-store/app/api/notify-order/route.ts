import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { customer_name, customer_phone, delivery_address, total, orderId } = await request.json()

    await resend.emails.send({
      from: 'ErimaGodsOwnEnterprise <onboarding@resend.dev>',
      to: 'Erimabadoo2020@gmail.com',
      subject: `New Order — ₦${Number(total).toLocaleString()}`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Customer:</strong> ${customer_name}</p>
        <p><strong>Phone:</strong> ${customer_phone}</p>
        <p><strong>Delivery:</strong> ${delivery_address}</p>
        <p><strong>Total:</strong> ₦${Number(total).toLocaleString()}</p>
        <p><strong>Order ID:</strong> ${orderId}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email notification failed:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
