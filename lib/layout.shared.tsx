import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ChainvetLogo } from '@/components/logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <ChainvetLogo className="h-6 w-auto" />,
    },
    links: [
      {
        text: 'Install',
        url: '/installation',
        active: 'url',
      },
    ],
    // The GitHub link is rendered as a labeled repo link in the sidebar footer
    // (see app/(docs)/layout.tsx) rather than a bare icon.
  };
}
