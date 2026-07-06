import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { GithubSidebarLink } from '@/components/github-link';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      sidebar={{ footer: <GithubSidebarLink /> }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
