import Link from 'next/link';

// docs.chainvet.dev is a documentation subdomain — the marketing landing page
// lives at chainvet.dev, so the root redirects straight to the docs. A static
// meta-refresh works on GitHub Pages without JavaScript; React 19 hoists the
// <meta> into <head>.
export default function HomePage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/docs" />
      <div className="flex flex-1 flex-col items-center justify-center gap-3 p-16 text-center">
        <p className="text-fd-muted-foreground">
          Redirecting to the{' '}
          <Link href="/docs" className="font-medium text-fd-foreground underline">
            documentation
          </Link>
          …
        </p>
      </div>
    </>
  );
}
