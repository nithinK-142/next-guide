import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.method === "GET") console.log("URL", request.url);
}

export const config = {
  matcher: ["/", "/about", "/dashboard"],
};
