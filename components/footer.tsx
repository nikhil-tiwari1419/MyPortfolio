import { site } from "@/lib/site";

export function Footer() {
  const link ={
    name:"nikhil.in",
    icon:""
  }
  return (
    <footer>
      <div className="rails flex flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-muted sm:px-6">
        <span className="font-mono font-semibold text-fg">nt.</span>
        <span>
          © {new Date().getFullYear()} {site.name}.built by .
        </span>
      </div>
    </footer>
  );
}
