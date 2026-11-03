import { HugeiconsIcon } from "@hugeicons/react";
import { CodeIcon } from "@hugeicons/core-free-icons";
import { techIcons } from "@/lib/tech-icons";

/** Near-black brand colors vanish in dark mode and near-white ones vanish in light mode,
 *  so those use the text color instead. */
function lacksContrast(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum < 0.22 || lum > 0.9;
}

export function TechChip({ name }: { name: string }) {
  const icon = techIcons[name];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-bg px-2 py-1 text-xs font-medium text-fg/80">
      {icon ? (
        <svg
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          width={14}
          height={14}
          fill={lacksContrast(icon.hex) ? "currentColor" : `#${icon.hex}`}
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <HugeiconsIcon icon={CodeIcon} size={14} strokeWidth={1.8} className="text-muted" />
      )}
      {name}
    </span>
  );
}
