"use client";

import * as React from "react";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const SCRIPT_ID = "calendly-widget-js";

interface CalendlyWindow extends Window {
  Calendly?: {
    initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
  };
}

/**
 * Inline Calendly booking widget. Loads Calendly's script once and
 * initializes the widget into a div we control (so it works reliably on a
 * client-rendered page without relying on Calendly's DOM auto-scan).
 */
export function CalendlyEmbed({
  url,
  className,
  height = 700,
}: {
  url: string;
  className?: string;
  height?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const w = window as CalendlyWindow;

    const init = () => {
      if (w.Calendly && ref.current) {
        ref.current.innerHTML = "";
        w.Calendly.initInlineWidget({ url, parentElement: ref.current });
      }
    };

    if (w.Calendly) {
      init();
      return;
    }

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);
    return () => script?.removeEventListener("load", init);
  }, [url]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ minWidth: "320px", height }}
      aria-label="Booking calendar"
    />
  );
}
