import { Loader2 } from "lucide-react"

import { Button, ButtonProps } from "@/components/ui/button"

export function ButtonLoading({ children, ...props }: ButtonProps) {
  return (
    <Button {...props} disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {children}
    </Button>
  )
}
