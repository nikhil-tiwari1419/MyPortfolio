import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  description?: string;
  dots?: boolean;
  children: ReactNode;
};

/** Full-width solid divider, content locked between the rails. */
export function Section({ id, title, description, dots, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`border-b border-line ${dots ? "dots" : ""}`}>
      <div className="rails bg-bg/0">
        <div className="border-b border-dashed border-line-strong bg-bg px-4 py-6 sm:px-6">
          <h2 id={`${id}-title`} className="text-lg font-semibold tracking-tight">
            {title}
          </h2>
          {description && <p className="mt-1 text-sm text-muted">{description}</p>}
        </div>
        <div className="bg-bg">{children}</div>
      </div>
    </section>
  );
}
