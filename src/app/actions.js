"use server";

import { cookies } from "next/headers";

export async function setLoginCookie() {
  cookies().set("isLoggedIn", "true");
}

export async function resetLoginCookie() {
  cookies().delete("isLoggedIn");
}
