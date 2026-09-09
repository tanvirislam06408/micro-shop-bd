import React from "react";

export function GeminiLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1BA1E3" />
          <stop offset="35%" stopColor="#5B7BF5" />
          <stop offset="70%" stopColor="#9C66F7" />
          <stop offset="100%" stopColor="#DE5186" />
        </linearGradient>
      </defs>
      <path
        d="M14 0C14 7.732 7.732 14 0 14C7.732 14 14 20.268 14 28C14 20.268 20.268 14 28 14C20.268 14 14 7.732 14 0Z"
        fill="url(#geminiGrad)"
      />
    </svg>
  );
}

export function ChatGPTLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#10A37F" />
      <path
        d="M20.5 10.3a4.6 4.6 0 0 0-.4-3.7 4.7 4.7 0 0 0-4.8-2.2A4.6 4.6 0 0 0 11.7 2.7a4.7 4.7 0 0 0-4.5 3.3 4.6 4.6 0 0 0-3.3 1.5 4.7 4.7 0 0 0-.7 5.2 4.6 4.6 0 0 0-.4 3.7 4.7 4.7 0 0 0 4.8 2.2 4.6 4.6 0 0 0 3.6 1.7 4.7 4.7 0 0 0 4.5-3.3 4.6 4.6 0 0 0 3.3-1.5 4.7 4.7 0 0 0 .7-5.2zm-7.4 10.3a3.1 3.1 0 0 1-1.9-.7l.1-.1 3.2-1.8a.8.8 0 0 0 .4-.7v-4.5l1.3.8v3.7a3.1 3.1 0 0 1-3.1 3.3zm-6.4-3.7a3.1 3.1 0 0 1-.4-2l.1.1 3.2 1.8a.8.8 0 0 0 .8 0l3.9-2.2v1.5l-3.2 1.9a3.1 3.1 0 0 1-4.4-1.1zm-1.5-6.7a3.1 3.1 0 0 1 1.5-1.3v3.8a.8.8 0 0 0 .4.7l3.9 2.2-1.3.8-3.2-1.9a3.1 3.1 0 0 1-1.3-4.3zm10.9 2.6l-3.9-2.2 1.3-.8 3.2 1.9a3.1 3.1 0 0 1 1.2 4.3 3.1 3.1 0 0 1-1.5 1.3v-3.8a.8.8 0 0 0-.3-.7zm2-2.4l-.1-.1-3.2-1.8a.8.8 0 0 0-.8 0l-3.9 2.2v-1.5l3.2-1.9a3.1 3.1 0 0 1 4.3 1.1 3.1 3.1 0 0 1 .5 2zm-7.8-2.7a3.1 3.1 0 0 1 1.9.7l-.1.1-3.2 1.8a.8.8 0 0 0-.4.7v4.5l-1.3-.8v-3.7a3.1 3.1 0 0 1 3.1-3.3zm.8 4.1l2 1.1v2.3l-2 1.1-2-1.1v-2.3l2-1.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function CapCutLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#000000" />
      <g transform="translate(3.9, 4)">
        <path
          fill="#FFFFFF"
          fillRule="evenodd"
          d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z"
        />
      </g>
    </svg>
  );
}

export function ClaudeLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#CC785C" />
      <path
        d="M13.2 3h-2.4v6.2L6.5 5.1 4.8 6.8l4.1 4.4H3v2.4h6.3l-4.4 4.1 1.7 1.7 4.3-4.2V21h2.4v-6.2l4.3 4.2 1.7-1.7-4.4-4.1H21v-2.4h-6.3l4.1-4.4-1.7-1.7-4.3 4.1V3z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function NotionLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#18181B" />
      <path
        d="M5.5 5.8C6.1 6.3 6.3 6.2 7.5 6.1l8.8-.7c.9-.1 1.1.2.9.7l-1.6 2.4c-.3.4-.2.8.3.8h1.6c.7 0 .9.4.5.9l-3.3 5.4c-.6.9-1.3.8-1.9.6L6.5 15.4c-.6-.1-.7-.5-.5-.9l1.9-3.2c.3-.4.1-.7-.4-.7H4.4c-.6 0-.9-.4-.5-.9l1.6-4zm2.9 3.2c-.3.4-.1.8.4.8h4.1c.6 0 .9-.4.6-.7l-1.1-1.8c-.2-.4-.6-.4-1-.4l-3.1.2c-.4.1-.6.4-.4.8l1 1.9z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ElevenLabsLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#09090B" />
      <rect x="7" y="5" width="3.5" height="14" rx="1.75" fill="#FFFFFF" />
      <rect x="13.5" y="5" width="3.5" height="14" rx="1.75" fill="#FFFFFF" />
    </svg>
  );
}

export function ZoomLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#2D8CFF" />
      <path
        d="M5.5 8.5C5.5 7.67 6.17 7 7 7h6.5c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H7c-.83 0-1.5-.67-1.5-1.5v-7zm10.5 2.2l3.4-2.55c.4-.3.9-.01.9.48v6.74c0 .49-.5.78-.9.48L16 13.3v-2.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function FramerLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#0055FF" />
      <path d="M6 4h12l-6 6h6l-6 6H6l6-6H6V4zm6 12l-6 6v-6h6z" fill="#FFFFFF" />
    </svg>
  );
}

export function VPNLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#0057FF" />
      <path
        d="M12 4L4 18h4.5l3.5-6.5 3.5 6.5H20L12 4zm0 6.2l2.2 4.1h-4.4L12 10.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function CodexLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#0F172A" />
      <path
        d="M7 8l4 4-4 4M13 16h4"
        stroke="#38BDF8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WordwallLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#0D9488" />
      <rect x="5.5" y="5.5" width="5.5" height="5.5" rx="1" fill="#FFFFFF" />
      <rect x="13" y="5.5" width="5.5" height="5.5" rx="1" fill="#5EEAD4" />
      <rect x="5.5" y="13" width="5.5" height="5.5" rx="1" fill="#CCFBF1" />
      <rect x="13" y="13" width="5.5" height="5.5" rx="1" fill="#FFFFFF" />
    </svg>
  );
}

export default function ProductBrandLogo({
  productId,
  productName,
  logoUrl,
  imageUrl,
  className = "w-9 h-9",
}: {
  productId?: string;
  productName?: string;
  logoUrl?: string;
  imageUrl?: string;
  className?: string;
}) {
  const customImg = logoUrl || imageUrl;
  if (customImg) {
    return (
      <img
        src={customImg}
        alt={productName || "Product Logo"}
        className={`${className} object-contain rounded-xl`}
        loading="lazy"
      />
    );
  }

  const id = (productId || "").toLowerCase();
  const name = (productName || "").toLowerCase();

  if (id.includes("gemini") || name.includes("gemini")) {
    return <GeminiLogo className={className} />;
  }
  if (id.includes("chatgpt") || name.includes("chatgpt") || name.includes("openai") || name.includes("gpt")) {
    return <ChatGPTLogo className={className} />;
  }
  if (id.includes("capcut") || name.includes("capcut")) {
    return <CapCutLogo className={className} />;
  }
  if (id.includes("claude") || name.includes("claude") || name.includes("anthropic")) {
    return <ClaudeLogo className={className} />;
  }
  if (id.includes("notion") || name.includes("notion")) {
    return <NotionLogo className={className} />;
  }
  if (id.includes("elevenlabs") || name.includes("elevenlabs") || name.includes("eleven")) {
    return <ElevenLabsLogo className={className} />;
  }
  if (id.includes("zoom") || name.includes("zoom")) {
    return <ZoomLogo className={className} />;
  }
  if (id.includes("framer") || name.includes("framer")) {
    return <FramerLogo className={className} />;
  }
  if (id.includes("vpn") || name.includes("vpn") || name.includes("nord") || name.includes("surfshark")) {
    return <VPNLogo className={className} />;
  }
  if (id.includes("codex") || name.includes("codex")) {
    return <CodexLogo className={className} />;
  }
  if (id.includes("wordwall") || name.includes("wordwall")) {
    return <WordwallLogo className={className} />;
  }

  return <GeminiLogo className={className} />;
}
