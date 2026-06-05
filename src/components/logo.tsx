import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Marca de JC Soluciones Energéticas: ícono solar oficial (.design/icons) + wordmark.
 * `claro` invierte el ícono para fondos oscuros (azul profundo).
 */
export function Logo({
  className,
  showText = true,
  claro = false,
}: {
  className?: string;
  showText?: boolean;
  claro?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <SunMark className="h-10 w-10 shrink-0" claro={claro} />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "text-xl font-bold tracking-tight",
              claro ? "text-cream-100" : "text-navy-900",
            )}
          >
            {site.nombreCorto}
          </span>
          <span
            className={cn(
              "text-[0.62rem] font-medium uppercase tracking-[0.18em]",
              claro ? "text-cream-100/80" : "text-navy-700/80",
            )}
          >
            Soluciones Energéticas
          </span>
        </span>
      )}
    </span>
  );
}

/**
 * Ícono solar oficial: panel + sol. Geometría tomada de `.design/icons/jc-icono.svg`.
 * Variante `claro` = `jc-icono-claro.svg` (panel crema sobre fondo oscuro).
 */
export function SunMark({
  className,
  claro = false,
}: {
  className?: string;
  claro?: boolean;
}) {
  const panel = claro ? "#F6F1E7" : "#102A43";
  const grid = claro ? "#102A43" : "#F59E0B";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label={site.nombre}
    >
      <g transform="translate(15,20)">
        <circle cx="66" cy="24" r="16" fill="#F59E0B" />
        <line x1="66" y1="7" x2="66" y2="0" stroke="#F59E0B" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="54" y1="12" x2="49" y2="7" stroke="#F59E0B" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="78" y1="12" x2="83" y2="7" stroke="#F59E0B" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="84" y1="24" x2="91" y2="24" stroke="#F59E0B" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="4" y="22" width="64" height="58" rx="6" fill={panel} />
        <line x1="25.3" y1="22" x2="25.3" y2="80" stroke={grid} strokeWidth="2.2" />
        <line x1="46.7" y1="22" x2="46.7" y2="80" stroke={grid} strokeWidth="2.2" />
        <line x1="4" y1="51" x2="68" y2="51" stroke={grid} strokeWidth="2.2" />
      </g>
    </svg>
  );
}
