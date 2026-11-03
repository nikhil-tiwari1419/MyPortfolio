import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="rails flex h-14 items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label={`${site.name}, home`} className="font-mono text-sm font-semibold tracking-tight">
          nt<span className="text-muted">.</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          <ul className="mr-1 hidden items-center gap-5 text-sm text-muted sm:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-fg">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:text-fg"
          >
            <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={1.8} />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
