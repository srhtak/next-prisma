import { NextResponse, NextRequest } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(request: NextRequest) {
  const { origin } = request.nextUrl;
  if (signedinPages.find((p) => p === request.nextUrl.pathname)) {
    const token = request.cookies.get("SERHAT_ACCESS_TOKEN");
    if (!token) {
      return NextResponse.rewrite(`${origin}/signin`);
    }
  }
}
