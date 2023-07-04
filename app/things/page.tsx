import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container my-44 flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <Link
        className={buttonVariants({ variant: "outline" })}
        href="/uploadthing"
      >
        uploadthing
      </Link>
      <Link className={buttonVariants()} href="/with-transition">
        with transition
      </Link>
      <Link className={buttonVariants()} href="/with-pending">
        with pending
      </Link>
    </section>
  )
}
