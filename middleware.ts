import { NextResponse, type NextRequest } from "next/server"

export default async function middleware(req: NextRequest) {
  const host = req.nextUrl.host
  console.log(req.nextUrl)
  if (host === "gh.piss.dev")
    return NextResponse.redirect("https://github.com/mshubitidze")
  if (host === "twt.piss.dev")
    return NextResponse.redirect("https://twitter.com/_mshub")

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
