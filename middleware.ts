import { NextResponse, type NextRequest } from "next/server"

export default async function middleware(req: NextRequest) {
  const subdomainRedirect = req.nextUrl.origin.split("://")[1]
  console.log(subdomainRedirect)
  if (
    subdomainRedirect === "gh.piss.ge" ||
    subdomainRedirect === "www.gh.piss.ge"
  )
    return NextResponse.redirect("https://github.com/mshubitidze")
  if (
    subdomainRedirect === "twt.piss.ge" ||
    subdomainRedirect === "www.twt.piss.ge"
  )
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
