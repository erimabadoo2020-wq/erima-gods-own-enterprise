import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { reference } = await request.json()

    if (!reference) {
      return NextResponse.json({ verified: false, error: 'No reference provided' }, { status: 400 })
    }

    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    })

    const result = await response.json()
    const verified = result?.data?.status === 'success'

    return NextResponse.json({ verified })
  } catch (error) {
    console.error('Payment verification failed:', error)
    return NextResponse.json({ verified: false }, { status: 500 })
  }
}
