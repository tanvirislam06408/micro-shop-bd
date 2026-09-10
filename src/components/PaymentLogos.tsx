import React from "react";

interface LogoProps {
  className?: string;
  variant?: "badge" | "icon" | "full";
}

/**
 * Authentic bKash Brand Logo (Origami Bird + Typography)
 * Brand Color: #E2136E (bKash Pink)
 */
export function BkashLogo({ className = "h-7", variant = "full" }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect width="48" height="48" rx="12" fill="#E2136E" />
        <path
          d="M11 25.5L25 11.5L28.5 28.5L11 25.5Z"
          fill="#FFFFFF"
          fillOpacity="0.95"
        />
        <path
          d="M25 11.5L37 19.5L28.5 28.5L25 11.5Z"
          fill="#FFFFFF"
          fillOpacity="0.8"
        />
        <path
          d="M28.5 28.5L35 36.5L21 34.5L28.5 28.5Z"
          fill="#FFFFFF"
          fillOpacity="0.9"
        />
        <path
          d="M21 34.5L15 30.5L28.5 28.5L21 34.5Z"
          fill="#FFFFFF"
          fillOpacity="0.75"
        />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full aspect-square shrink-0"
      >
        <rect width="36" height="36" rx="9" fill="#E2136E" />
        <path
          d="M8.5 19L18.8 8.7L21.4 21.3L8.5 19Z"
          fill="#FFFFFF"
          fillOpacity="0.95"
        />
        <path
          d="M18.8 8.7L27.6 14.6L21.4 21.3L18.8 8.7Z"
          fill="#FFFFFF"
          fillOpacity="0.82"
        />
        <path
          d="M21.4 21.3L26.3 27.3L15.8 25.7L21.4 21.3Z"
          fill="#FFFFFF"
          fillOpacity="0.9"
        />
        <path
          d="M15.8 25.7L11.4 22.8L21.4 21.3L15.8 25.7Z"
          fill="#FFFFFF"
          fillOpacity="0.75"
        />
      </svg>
      <span className="font-extrabold tracking-tight text-[#E2136E] text-base leading-none">
        b<span className="text-[#E2136E]">Kash</span>
      </span>
    </div>
  );
}

/**
 * Authentic Nagad Brand Logo (Ribbon Swirl + Typography)
 * Brand Colors: Gradient from #F7941D to #ED1C24
 */
export function NagadLogo({ className = "h-7", variant = "full" }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="nagadGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7941D" />
            <stop offset="100%" stopColor="#ED1C24" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#nagadGradIcon)" />
        <path
          d="M24 10C16.27 10 10 16.27 10 24C10 31.73 16.27 38 24 38C30.2 38 35.43 33.98 37.24 28.42C37.58 27.36 36.81 26.3 35.7 26.3H33.4C32.55 26.3 31.83 26.85 31.62 27.67C30.41 32.32 26.15 35.5 24 35.5C17.65 35.5 12.5 30.35 12.5 24C12.5 17.65 17.65 12.5 24 12.5C27.91 12.5 31.33 14.47 33.37 17.47L31.2 19.64C30.57 20.27 31.02 21.35 31.91 21.35H38.5C39.05 21.35 39.5 20.9 39.5 20.35V13.76C39.5 12.87 38.42 12.42 37.79 13.05L35.63 15.21C32.88 12.02 28.69 10 24 10Z"
          fill="#FFFFFF"
        />
        <circle cx="24" cy="24" r="4.5" fill="#FFFFFF" />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full aspect-square shrink-0"
      >
        <defs>
          <linearGradient id="nagadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7941D" />
            <stop offset="100%" stopColor="#ED1C24" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="9" fill="url(#nagadGrad)" />
        <path
          d="M18 7.5C12.2 7.5 7.5 12.2 7.5 18C7.5 23.8 12.2 28.5 18 28.5C22.65 28.5 26.57 25.48 27.93 21.31C28.18 20.52 27.61 19.72 26.77 19.72H25.05C24.41 19.72 23.87 20.14 23.71 20.75C22.81 24.24 19.61 26.62 18 26.62C13.24 26.62 9.38 22.76 9.38 18C9.38 13.24 13.24 9.38 18 9.38C20.93 9.38 23.5 10.85 25.03 13.1L23.4 14.73C22.93 15.2 23.26 16.01 23.93 16.01H28.88C29.29 16.01 29.62 15.68 29.62 15.26V10.32C29.62 9.65 28.81 9.31 28.34 9.79L26.72 11.41C24.66 9.01 21.52 7.5 18 7.5Z"
          fill="#FFFFFF"
        />
        <circle cx="18" cy="18" r="3.4" fill="#FFFFFF" />
      </svg>
      <span className="font-extrabold tracking-tight bg-gradient-to-r from-[#F7941D] to-[#ED1C24] bg-clip-text text-transparent text-base leading-none">
        Nagad
      </span>
    </div>
  );
}
