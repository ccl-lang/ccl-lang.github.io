export type LanguageStatus = 'stable' | 'developing' | 'planning';

export interface LanguageSupportEntry {
  slug: string;
  name: string;
  shortName: string;
  status: LanguageStatus;
  currentSupport: string;
  summary: string;
}

export const languageSupport: LanguageSupportEntry[] = [
  {
    slug: 'go',
    name: 'Go',
    shortName: 'Go',
    status: 'stable',
    currentSupport: 'Full codegen supported.',
    summary: 'Stable target for current CCL workflows.',
  },
  {
    slug: 'gdscript',
    name: 'GDScript',
    shortName: 'GD',
    status: 'stable',
    currentSupport: 'Full codegen supported.',
    summary: 'Most complete non-Go target right now, including extra generator features.',
  },
  {
    slug: 'csharp',
    name: 'C#',
    shortName: 'CS',
    status: 'stable',
    currentSupport: 'Full codegen supported.',
    summary: 'Stable target for C# projects.',
  },
  {
    slug: 'python',
    name: 'Python',
    shortName: 'PY',
    status: 'stable',
    currentSupport: 'Full codegen supported.',
    summary: 'Stable target for Python projects.',
  },
  {
    slug: 'javascript',
    name: 'JavaScript',
    shortName: 'JS',
    status: 'stable',
    currentSupport: 'Full codegen supported.',
    summary: 'Stable target for JavaScript projects.',
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    shortName: 'TS',
    status: 'stable',
    currentSupport: 'Full codegen supported.',
    summary: 'Stable target for TypeScript projects.',
  },
  {
    slug: 'c',
    name: 'C',
    shortName: 'C',
    status: 'planning',
    currentSupport: 'No generator support yet.',
    summary: 'Tracked as a future target.',
  },
  {
    slug: 'cpp',
    name: 'C++',
    shortName: 'C++',
    status: 'planning',
    currentSupport: 'No generator support yet.',
    summary: 'Tracked as a future target.',
  },
  {
    slug: 'rust',
    name: 'Rust',
    shortName: 'Rust',
    status: 'developing',
    currentSupport: 'Codegen is under active development.',
    summary: 'Generator work is in progress.',
  },
  {
    slug: 'zig',
    name: 'Zig',
    shortName: 'Zig',
    status: 'developing',
    currentSupport: 'Codegen is under active development.',
    summary: 'Generator work is in progress.',
  },
  {
    slug: 'lua',
    name: 'Lua',
    shortName: 'Lua',
    status: 'planning',
    currentSupport: 'No generator support yet.',
    summary: 'Tracked as a future target.',
  },
];
