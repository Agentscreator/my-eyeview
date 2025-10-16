"use server"

import { db } from "@/lib/db"
import { waitlist } from "@/lib/db/schema"

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string
  const name = formData.get("name") as string

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address" }
  }

  try {
    await db.insert(waitlist).values({
      email,
      name,
    })
    return { success: true }
  } catch (error: any) {
    if (error.code === "23505") {
      return { success: false, error: "This email is already on the waitlist" }
    }
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
