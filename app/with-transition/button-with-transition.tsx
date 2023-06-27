"use client"

import { useTransition } from "react"

import { deleteAll, deletePrize, generate } from "@/lib/actions"
import { Button, ButtonProps } from "@/components/ui/button"
import { ButtonLoading } from "@/components/button-loading"

interface ButtonWithTransitionProps extends ButtonProps {
  action: "delete" | "generate" | number
}

export function ButtonWithTransition({
  action,
  ...props
}: ButtonWithTransitionProps) {
  const [isPending, startTransition] = useTransition()
  return isPending ? (
    <ButtonLoading>
      {action === "generate" ? "generating" : "deleting"}
    </ButtonLoading>
  ) : (
    <Button
      {...props}
      onClick={() =>
        startTransition(() =>
          action === "generate"
            ? generate()
            : action === "delete"
            ? deleteAll()
            : deletePrize(action)
        )
      }
    />
  )
}
