"use client"

import { ComponentProps } from "react"
import { Loader2 } from "lucide-react"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"

interface PrizeActionPendingProps extends ComponentProps<typeof Button> {
  buttonText: string
}

export default function PrizeActionPending({
  variant,
  formAction,
  buttonText: buttonText,
}: PrizeActionPendingProps) {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} variant={variant} formAction={formAction}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        buttonText
      )}
    </Button>
  )
}
