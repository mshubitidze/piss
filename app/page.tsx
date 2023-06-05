import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container my-44 flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl">
          Piss
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          className={buttonVariants({ variant: "secondary", size: "default" })}
          href="/uploadthing"
        >
          Upload
        </Link>
      </div>
    </section>
  )
}
