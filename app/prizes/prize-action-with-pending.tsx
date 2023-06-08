"use client"

import { experimental_useFormStatus as useFormStatus } from "react-dom"

import { Button, ButtonProps } from "@/components/ui/button"
import { ButtonLoading } from "@/components/button-loading"

export default function ButtonWithPending(props: ButtonProps) {
  const { pending } = useFormStatus()
  const Comp = pending ? ButtonLoading : Button
  return <Comp {...props} />
}
