import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAdminPath = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPath = request.nextUrl.pathname === '/admin-login'

  if (isAdminPath && !isLoginPath) {
    const authCookie = request.cookies.get('admin_auth')

    if (!authCookie || authCookie.value !== process.env.ADMIN_SESSION_TOKEN) {
      const loginUrl = new URL('/admin-login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
