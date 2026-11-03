import { site } from "@/lib/site";
import { LinkSquare02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Footer() {
  const link ={
    name:"nikhil.in",
    url:"https://github.com/nikhil-tiwari1419",
  }
  return (
    <footer>
      <div className="rails flex flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-muted sm:px-6">
        <span className="font-mono font-semibold text-fg">nt.</span>
        <span className="flex gap-1 underline">
          &copy;   {new Date().getFullYear()} built by {link.name} <a className="items-center flex" href="https://github.com/nikhil-tiwari1419"><HugeiconsIcon icon={LinkSquare02Icon} size={13} strokeWidth={1.8} /></a>
        </span>
      </div>
    </footer>
  );
}
