import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ success: false }, { status: 401 })
    }

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_auth', process.env.ADMIN_SESSION_TOKEN!, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error('Admin login failed:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
