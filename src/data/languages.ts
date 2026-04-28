export type LanguageStatus = 'supported' | 'developing' | 'planning';

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
    status: 'supported',
    currentSupport: 'Binary serialization supported.',
    summary: 'Stable target for current CCL workflows.',
  },
  {
    slug: 'gdscript',
    name: 'GDScript',
    shortName: 'GD',
    status: 'supported',
    currentSupport: 'Binary and JSON serialization supported.',
    summary: 'Most complete non-Go target right now, including extra generator features.',
  },
  {
    slug: 'csharp',
    name: 'C#',
    shortName: 'CS',
    status: 'developing',
    currentSupport: 'Binary serialization support under active development.',
    summary: 'Generator work is in progress.',
  },
  {
    slug: 'python',
    name: 'Python',
    shortName: 'PY',
    status: 'developing',
    currentSupport: 'Binary serialization support under active development.',
    summary: 'Generator work is in progress.',
  },
  {
    slug: 'javascript',
    name: 'JavaScript',
    shortName: 'JS',
    status: 'developing',
    currentSupport: 'No finalized serialization support yet.',
    summary: 'Generator direction exists, but binary and JSON serialization are still planned.',
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    shortName: 'TS',
    status: 'developing',
    currentSupport: 'Binary serialization support under active development.',
    summary: 'Generator work is in progress.',
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
    status: 'planning',
    currentSupport: 'No generator support yet.',
    summary: 'Tracked as a future target.',
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
