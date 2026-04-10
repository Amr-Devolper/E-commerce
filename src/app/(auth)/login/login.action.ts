"use server";

import { cookies } from "next/headers";
import { LoginSchemaType } from "./login.Schema";

export async function loginAction(values: LoginSchemaType) {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const finalRes = await response.json();

  const myCookies = await  cookies()

  myCookies.set("token", finalRes.token, {
    httpOnly : true,
    maxAge : 60 * 60 * 24,
    secure : true,
    sameSite : "strict",
  })

  return finalRes.message
}
