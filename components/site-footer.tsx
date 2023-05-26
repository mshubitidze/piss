import Link from "next/link"

import { siteConfig } from "@/config/site"

import { buttonVariants } from "./ui/button"

export function SiteFooter() {
  return (
    <header className="sticky z-40 w-full border-t bg-background">
      <div className="container flex h-16 items-center justify-center">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "link",
            })}
          >
            <span>@mshubitidze</span>
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
      </div>
    </header>
  )
}
