import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "badge" | "icon" | "full";
}

/**
 * Authentic bKash Brand Logo
 * Official brand asset with correct origami bird mark and typography
 */
export function BkashLogo({ className = "h-7", variant = "full" }: LogoProps) {
  return (
    <div className={`relative inline-flex items-center shrink-0 ${className}`}>
      <Image
        src="/images/payments/bkash.png"
        alt="bKash Official Logo"
        width={130}
        height={60}
        className="h-full w-auto max-h-8 object-contain"
        priority
      />
    </div>
  );
}

/**
 * Authentic Nagad Brand Logo
 * Official brand asset with correct flame swirl and typography
 */
export function NagadLogo({ className = "h-7", variant = "full" }: LogoProps) {
  return (
    <div className={`relative inline-flex items-center shrink-0 ${className}`}>
      <Image
        src="/images/payments/nagad.png"
        alt="Nagad Official Logo"
        width={130}
        height={60}
        className="h-full w-auto max-h-8 object-contain"
        priority
      />
    </div>
  );
}
