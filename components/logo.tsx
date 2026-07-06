/* eslint-disable @next/next/no-img-element */

/** The horizontal Chainvet wordmark logo (mark + "chainvet"). */
export function ChainvetLogo({ className }: { className?: string }) {
  return (
    <img
      src="/chainvet-horizontal-logo.svg"
      alt="Chainvet"
      className={className}
      // The gradient wordmark reads on both light and dark backgrounds.
    />
  );
}

/** The square Chainvet mark only (no wordmark). */
export function ChainvetMark({ className }: { className?: string }) {
  return <img src="/chainvet-mark.svg" alt="Chainvet" className={className} />;
}
