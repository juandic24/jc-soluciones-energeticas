import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** Marca de JC Soluciones Energéticas: ícono solar + wordmark. */
export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <SunMark className="h-9 w-9 shrink-0" />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-base font-bold tracking-tight text-sky-900">
            {site.nombreCorto} Soluciones
          </span>
          <span className="text-xs font-medium tracking-wide text-sky-700/80">
            Energéticas
          </span>
        </span>
      )}
    </span>
  );
}

/** Ícono solar cuadrado con monograma "JC". */
export function SunMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      role="img"
      aria-label={site.nombre}
    >
      <rect width="512" height="512" rx="112" fill="#0284c7" />
      <g stroke="#fbbf24" strokeWidth="22" strokeLinecap="round">
        <line x1="256" y1="92" x2="256" y2="132" />
        <line x1="256" y1="380" x2="256" y2="420" />
        <line x1="92" y1="256" x2="132" y2="256" />
        <line x1="380" y1="256" x2="420" y2="256" />
        <line x1="140" y1="140" x2="168" y2="168" />
        <line x1="344" y1="344" x2="372" y2="372" />
        <line x1="372" y1="140" x2="344" y2="168" />
        <line x1="168" y1="344" x2="140" y2="372" />
      </g>
      <circle cx="256" cy="256" r="92" fill="#fde68a" />
      <text
        x="256"
        y="262"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="96"
        fontWeight="700"
        fill="#0c4a6e"
      >
        JC
      </text>
    </svg>
  );
}
