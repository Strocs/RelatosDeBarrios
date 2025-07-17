import { NextRequest, NextResponse } from 'next/server'
export default function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('relatosdebarrios.cl')
  ) {
    return NextResponse.next()
  }
  if (request.headers.get('host')?.endsWith('vercel.app')) {
    const url = request.nextUrl.clone()
    if (url.pathname.startsWith('/villacovico')) {
      url.hostname = 'relatosdebarrios-covico.vercel.app/villacovico'
      return NextResponse.rewrite(url)
    }
    if (url.pathname.startsWith('/conjuntohabitacionalrengifo')) {
      url.hostname =
        'relatosdebarrios-rengifo.vercel.app/conjuntohabitacionalrengifo'
      return NextResponse.rewrite(url)
    }
  }
  return NextResponse.next()
}
