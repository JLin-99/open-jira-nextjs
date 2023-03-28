import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/api/entries/")) {
    const id = req.nextUrl.pathname.replace("/api/entries/", "");
    const checkMongoIdRegExp = new RegExp("^[0-9a-fA-F]{24}$");

    if (!checkMongoIdRegExp.test(id)) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: `${id} is not a valid MongoId`,
        }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }
  }
  console.log("middleware", req.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/entries/:path*"],
};
