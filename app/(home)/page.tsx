import Link from 'next/link';
import {
  ArrowRight,
  ScanSearch,
  Sigma,
  Bug,
  Workflow,
  Code2,
  GitBranch,
  Terminal,
  Server,
  Puzzle,
  BookOpen,
} from 'lucide-react';
import { ChainvetMark } from '@/components/logo';
import { orgRepoUrl } from '@/lib/shared';

const engines = [
  {
    icon: ScanSearch,
    title: 'Static analysis',
    desc: '45+ detectors over a call graph, taint analysis, and function summaries — fast, deterministic, and CI-friendly.',
  },
  {
    icon: Sigma,
    title: 'Symbolic execution',
    desc: 'Z3-backed path exploration that produces concrete witnesses proving a vulnerability is reachable.',
  },
  {
    icon: Bug,
    title: 'Coverage-guided fuzzing',
    desc: 'A greybox fuzzer with a generator, mutator, and oracle that drives contracts into failing states.',
  },
  {
    icon: Workflow,
    title: 'Hybrid loop',
    desc: 'One feedback loop: static steers symbolic, witnesses seed the fuzzer, coverage stalls trigger new symbolic assists.',
  },
];

const ecosystem = [
  {
    icon: Terminal,
    title: 'CLI',
    desc: 'The chainvet analyzer — scan files or projects, filter findings, and emit Cyfrin-style audit reports.',
    href: '/docs/cli/overview',
  },
  {
    icon: GitBranch,
    title: 'GitHub Action',
    desc: 'Scan on push/PR and upload SARIF to the Security → Code scanning tab.',
    href: '/docs/integrations/github-action',
  },
  {
    icon: Puzzle,
    title: 'VS Code Extension',
    desc: 'Live diagnostics and an on-demand hybrid scan, powered by the language server.',
    href: '/docs/integrations/vscode',
  },
  {
    icon: Server,
    title: 'Web UI & Server',
    desc: 'A REST server and a static web front end: browse, configure, analyze, and download reports.',
    href: '/docs/frontends/server',
  },
  {
    icon: BookOpen,
    title: 'Agent Skills',
    desc: 'Portable skills that let any AI agent drive Chainvet from a shell.',
    href: '/docs/integrations/agent-skills',
  },
  {
    icon: ScanSearch,
    title: 'Detector Reference',
    desc: 'All 8 categories and 48 detectors, with IDs, default confidence, and descriptions.',
    href: '/docs/detectors/overview',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-fd-border">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 0%, color-mix(in srgb, var(--color-fd-primary) 22%, transparent) 0%, transparent 70%)',
          }}
        />
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:py-28">
          <ChainvetMark className="mb-8 h-20 w-auto drop-shadow-lg" />
          <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Hybrid security analysis for{' '}
            <span className="text-fd-primary">Solidity smart contracts</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-fd-muted-foreground">
            Chainvet combines static analysis, symbolic execution, and
            coverage-guided fuzzing over a shared IR — and a hybrid mode that runs
            them as one feedback loop. Findings are merged, deduplicated, and tagged
            with a confidence level.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              Get started <ArrowRight className="size-4" />
            </Link>
            <a
              href={orgRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-fd-accent"
            >
              <Code2 className="size-4" /> View source
            </a>
          </div>

          <div className="mt-8 w-full max-w-xl">
            <div className="flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-3 text-left font-mono text-sm">
              <span className="select-none text-fd-muted-foreground">$</span>
              <code className="overflow-x-auto whitespace-nowrap">
                curl -fsSL https://install.chainvet.dev/install.sh | sh
              </code>
            </div>
            <p className="mt-2 text-xs text-fd-muted-foreground">
              Linux x86_64 · other platforms build from source
            </p>
          </div>
        </div>
      </section>

      {/* Engines */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16">
        <h2 className="text-center text-2xl font-semibold">Three engines, one loop</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-fd-muted-foreground">
          Each engine is a pure library over a shared frontend and IR. Hybrid mode is
          the default.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {engines.map((e) => (
            <div
              key={e.title}
              className="rounded-xl border border-fd-border bg-fd-card p-6"
            >
              <e.icon className="size-6 text-fd-primary" />
              <h3 className="mt-4 text-lg font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-24">
        <h2 className="text-center text-2xl font-semibold">The Chainvet ecosystem</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-fd-muted-foreground">
          One analyzer, many front ends — from the terminal to CI, your editor, and
          the browser.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group flex flex-col rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-fd-primary/50 hover:bg-fd-accent"
            >
              <c.icon className="size-6 text-fd-primary" />
              <h3 className="mt-4 flex items-center gap-1 text-lg font-semibold">
                {c.title}
                <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
