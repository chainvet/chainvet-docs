export const appName = 'Chainvet';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// The documentation content lives in the `chainvet-docs` repo; edit/source links
// point there. The main tool lives in `chainvet/chainvet`.
export const gitConfig = {
  user: 'chainvet',
  repo: 'chainvet-docs',
  branch: 'main',
};

// The org's primary repository (the analyzer itself) — used for the nav GitHub link.
export const orgRepoUrl = 'https://github.com/chainvet/chainvet';
export const siteUrl = 'https://docs.chainvet.dev';
export const siteDescription =
  'Documentation for Chainvet — a hybrid Solidity smart-contract security analyzer combining static analysis, symbolic execution, and coverage-guided fuzzing.';
