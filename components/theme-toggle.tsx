"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ComputerIcon, Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const options = [
  { value: "light", label: "Light theme", icon: Sun03Icon },
  { value: "system", label: "System theme", icon: ComputerIcon },
  { value: "dark", label: "Dark theme", icon: Moon02Icon },
] as const;

const subscribe = () => () => {};

/** Three-way switch: light, system, dark. Renders neutral until mounted to avoid hydration mismatch. */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  return (
    <div role="radiogroup" aria-label="Color theme" className="flex items-center rounded-full border border-line p-0.5">
      {options.map(({ value, label, icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={`grid size-7 place-items-center rounded-full transition-colors ${
              active ? "bg-fg text-bg" : "text-muted hover:text-fg"
            }`}
          >
            <HugeiconsIcon icon={icon} size={15} strokeWidth={1.8} />
          </button>
        );
      })}
    </div>
  );
}
