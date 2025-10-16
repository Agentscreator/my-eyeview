"use client"

import type React from "react"

import { useState } from "react"
import { joinWaitlist } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const result = await joinWaitlist(formData)

    setIsSubmitting(false)

    if (result.success) {
      setMessage({ type: "success", text: "Welcome to the future! Check your email for updates." })
      ;(e.target as HTMLFormElement).reset()
    } else {
      setMessage({ type: "error", text: result.error || "Something went wrong" })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-5 sm:space-y-6 px-4 sm:px-0">
      <div className="space-y-4 sm:space-y-5">
        <Input
          type="text"
          name="name"
          placeholder="Your name"
          className="h-16 sm:h-[4.5rem] bg-white border-2 border-white/50 focus:border-white focus:ring-2 focus:ring-white/30 text-lg sm:text-xl text-gray-900 rounded-2xl shadow-lg transition-all duration-200 placeholder:text-gray-500 px-6"
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your email"
          className="h-16 sm:h-[4.5rem] bg-white border-2 border-white/50 focus:border-white focus:ring-2 focus:ring-white/30 text-lg sm:text-xl text-gray-900 rounded-2xl shadow-lg transition-all duration-200 placeholder:text-gray-500 px-6"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-16 sm:h-[4.5rem] text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-[oklch(0.42_0.14_220)] to-[oklch(0.38_0.14_215)] hover:from-[oklch(0.42_0.14_220)] hover:via-primary hover:to-[oklch(0.42_0.14_220)] text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 rounded-2xl hover:scale-[1.02] active:scale-[0.98]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-3 h-6 w-6 sm:h-7 sm:w-7 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Waitlist"
        )}
      </Button>

      {message && (
        <div
          className={`flex items-center justify-center gap-3 p-5 rounded-2xl backdrop-blur-sm ${
            message.type === "success"
              ? "bg-green-500/20 text-green-300 border border-green-500/30"
              : "bg-red-500/20 text-red-300 border border-red-500/30"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-6 h-6 flex-shrink-0" />
          )}
          <p className="text-base sm:text-lg font-medium">{message.text}</p>
        </div>
      )}
    </form>
  )
}
