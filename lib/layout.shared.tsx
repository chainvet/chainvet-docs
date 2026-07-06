import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { orgRepoUrl } from './shared';
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
    githubUrl: orgRepoUrl,
  };
}
