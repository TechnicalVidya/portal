"use server";

import { loggedInCookieName } from "@/utils/constants";
import { cookies } from "next/headers";

export async function setLoginCookie() {
  cookies().set(loggedInCookieName, "true");
}

export async function resetLoginCookie() {
  cookies().delete(loggedInCookieName);
}
