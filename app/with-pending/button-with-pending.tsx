"use client"

import { experimental_useFormStatus as useFormStatus } from "react-dom"

import { Button, ButtonProps } from "@/components/ui/button"
import { ButtonLoading } from "@/components/button-loading"

interface ButtonWithPendingProps extends ButtonProps {
  action: "delete" | "generate" | number
}

export function ButtonWithPending({
  action,
  ...props
}: ButtonWithPendingProps) {
  const { pending } = useFormStatus()
  return pending ? (
    <ButtonLoading>
      {action === "generate" ? "generating" : "deleting"}
    </ButtonLoading>
  ) : (
    <Button {...props} />
  )
}
