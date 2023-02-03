// middleware.ts
//import jwt from "jsonwebtoken"
import { NextResponse  } from 'next/server'
import type { NextRequest } from 'next/server'
// export default async function middleware(req: NextRequest) {
//   const  auth = req.cookies.get('auth')?.value
//   const {pathname} = req.nextUrl;

//   if (pathname.startsWith("/app")) {
//     if (auth === undefined) {
//       req.nextUrl.pathname = "/";
//       console.log("the token is undifined")
//       return NextResponse.redirect(req.nextUrl);
//     }    
//       return NextResponse.next();
//     }
//   console.log("the if is not wprking")

//   return NextResponse.next();
// }

 export default async function middleware(req: NextRequest) {}