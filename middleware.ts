import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/gallery", "/links"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/"],
};
