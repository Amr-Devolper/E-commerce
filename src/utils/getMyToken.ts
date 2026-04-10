import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyToken() {
  const myCookies = await cookies();

  const tokenFromCookies = myCookies.get("next-auth.session-token")?.value

  const decodedToken = await decode({
    token : tokenFromCookies,
    secret: process.env.NEXTAUTH_SECRET!,
  });

    console.log("Decoded Token in getToken function : ", decodedToken)

    return decodedToken.realTokenFromBackend
}
