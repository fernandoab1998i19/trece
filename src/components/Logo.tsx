import { type SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  variant?: "badge" | "horizontal" | "mark" | "monogram" | "official";
  size?: number;
  className?: string;
  darkText?: boolean;
}

/**
 * Official TE Monogram Icon
 * Stacked T and E geometric block monogram from the official brand identity.
 */
export function TeMonogramMark({
  size = 48,
  fill = "#0A0B0D",
  className = "",
}: {
  size?: number;
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size * (160 / 200)}
      height={size}
      className={className}
    >
      {/* T (Top Monogram) */}
      <path
        fill={fill}
        d="M 10 10 H 150 V 45 H 60 V 90 H 10 Z"
      />
      {/* E (Bottom Monogram) */}
      <path
        fill={fill}
        d="M 10 105 H 60 V 125 H 150 V 150 H 60 V 160 H 150 V 190 H 10 Z"
      />
    </svg>
  );
}

/**
 * Official TRECE Vector Mark
 * Renders the exact geometric logo from the official brand identity.
 */
export function TreceVectorMark({
  className = "",
  fill = "#FFFFFF",
  subtitleColor = "rgba(255, 255, 255, 0.9)",
  showSubtitle = true,
}: {
  className?: string;
  fill?: string;
  subtitleColor?: string;
  showSubtitle?: boolean;
}) {
  return (
    <g className={className}>
      {/* T */}
      <path
        fill={fill}
        d="M 52 135 H 108 V 150 H 88 V 205 H 72 V 150 H 52 Z"
      />

      {/* R (with signature square dot) */}
      <path
        fill={fill}
        d="M 116 135 H 168 C 176 135 182 141 182 149 V 162 C 182 170 176 176 168 176 H 134 V 205 H 118 V 135 Z M 134 149 V 162 H 164 V 149 H 134 Z"
      />
      {/* R Leg */}
      <path
        fill={fill}
        d="M 148 170 L 180 205 H 160 L 134 176 Z"
      />
      {/* R Square Accent Dot */}
      <rect x="120" y="182" width="10" height="10" fill={fill} rx="1" />

      {/* E (first) */}
      <path
        fill={fill}
        d="M 190 135 H 242 V 150 H 206 V 162 H 238 V 176 H 206 V 190 H 242 V 205 H 190 Z"
      />

      {/* C */}
      <path
        fill={fill}
        d="M 250 135 H 302 V 150 H 266 V 190 H 302 V 205 H 250 Z"
      />

      {/* E (second) */}
      <path
        fill={fill}
        d="M 310 135 H 362 V 150 H 326 V 162 H 358 V 176 H 326 V 190 H 362 V 205 H 310 Z"
      />

      {/* ARQUITECTURA E INGENIERÍA */}
      {showSubtitle && (
        <text
          x="207"
          y="235"
          fill={subtitleColor}
          fontFamily="var(--font-sans), system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="11.5"
          letterSpacing="4.2"
          textAnchor="middle"
        >
          ARQUITECTURA E INGENIERÍA
        </text>
      )}
    </g>
  );
}

export function Logo({
  variant = "badge",
  size = 48,
  className = "",
  darkText = false,
  ...props
}: LogoProps) {
  // Official Monogram (TE) standalone
  if (variant === "monogram") {
    return <TeMonogramMark size={size} fill={darkText ? "#0A0B0D" : "#FFFFFF"} className={className} />;
  }

  // Official Monogram + Logotype Layout (as in Instagram image 3)
  if (variant === "official") {
    return (
      <div className={`inline-flex items-center gap-5 ${className}`}>
        <TeMonogramMark size={size} fill={darkText ? "#0A0B0D" : "#FFFFFF"} />
        <div className="flex flex-col">
          <span
            className={`font-sans text-2xl sm:text-3xl font-black tracking-[0.25em] leading-tight uppercase ${
              darkText ? "text-foreground" : "text-white"
            }`}
          >
            TRECE
          </span>
          <span
            className={`text-[10px] font-bold tracking-[0.3em] uppercase ${
              darkText ? "text-muted-foreground" : "text-white/80"
            }`}
          >
            ARQUITECTURA E INGENIERÍA
          </span>
        </div>
      </div>
    );
  }

  // Horizontal navbar format with circular badge emblem
  if (variant === "horizontal") {
    return (
      <div className={`inline-flex items-center gap-3.5 ${className}`}>
        {/* Official Black Circular Badge Emblem */}
        <div className="relative shrink-0 rounded-full bg-[#0A0B0D] shadow-xl transition-transform hover:scale-105 p-0.5 border border-white/10">
          <svg
            viewBox="0 0 414 414"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 sm:h-12 sm:w-12"
          >
            <circle cx="207" cy="207" r="200" fill="#0A0B0D" />
            <TreceVectorMark />
          </svg>
        </div>

        {/* Text Logotype */}
        <div className="flex flex-col">
          <span
            className={`font-sans text-xl font-black tracking-[0.25em] leading-tight uppercase ${
              darkText ? "text-foreground" : "text-white"
            }`}
          >
            TRECE
          </span>
          <span
            className={`text-[9px] font-bold tracking-[0.28em] uppercase ${
              darkText ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            Arquitectura e Ingeniería
          </span>
        </div>
      </div>
    );
  }

  // Small Mark Variant
  if (variant === "mark") {
    return (
      <div className={`relative inline-block shrink-0 ${className}`}>
        <svg
          viewBox="0 0 414 414"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          {...props}
        >
          <circle cx="207" cy="207" r="200" fill="#0A0B0D" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
          <TreceVectorMark />
        </svg>
      </div>
    );
  }

  // Default: Full Official Black Circular Badge
  return (
    <div className={`relative inline-block shrink-0 ${className}`}>
      <svg
        viewBox="0 0 414 414"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <circle cx="207" cy="207" r="200" fill="#0A0B0D" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
        <TreceVectorMark fill="#FFFFFF" subtitleColor="rgba(255,255,255,0.85)" />
      </svg>
    </div>
  );
}
