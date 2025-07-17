import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const host = request.headers.get('host');

  if (host?.endsWith('vercel.app')) {
    const url = request.nextUrl.clone();
    if (url.pathname.startsWith('/villacovico')) {
      url.hostname = 'relatosdebarrios-covico.vercel.app/villacovico';
      return NextResponse.rewrite(url);
    }
    if (url.pathname.startsWith('/conjuntohabitacionalrengifo')) {
      url.hostname = 'relatosdebarrios-rengifo.vercel.app/conjuntohabitacionalrengifo';
      return NextResponse.rewrite(url);
    }
    if (url.pathname.startsWith('/')) {
      url.hostname = 'relatosdebarrios.vercel.app';
      return NextResponse.rewrite(url);
    }
  }
  return NextResponse.next();
}
