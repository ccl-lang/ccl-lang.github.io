export type RoadmapStage = 'done' | 'next' | 'planned';

export interface RoadmapNode {
  id: string;
  stage: RoadmapStage;
  release?: string;
  title: string;
  summary: string;
  details: string[];
}

export const currentDevelopmentVersion = 'v0.0.5';

export const roadmapNodes: RoadmapNode[] = [
  {
    id: 'go-gdscript',
    stage: 'done',
    release: 'v0.0.1',
    title: 'Go + GDScript outputs',
    summary: 'CCL became useful as a real generator instead of only a language experiment.',
    details: [
      'Generate Go models for backend workflows.',
      'Generate GDScript models for Godot projects.',
      'Use CCL as one source of truth for two very different runtimes.',
    ],
  },
  {
    id: 'generator-controls',
    stage: 'done',
    release: 'v0.0.2',
    title: 'Source-level generator controls',
    summary: 'Attributes let CCL files describe how generated code should look and behave.',
    details: [
      'Attach generation choices to the model definition itself.',
      'Keep target-language output rules visible during code review.',
      'Avoid scattering generator configuration across side files.',
    ],
  },
  {
    id: 'more-targets',
    stage: 'done',
    release: 'v0.0.3',
    title: 'Python, TS, JS, and C# targets',
    summary: 'The target list expanded from two languages into a broader multi-runtime story.',
    details: [
      'Python support started and reached working test coverage.',
      'TypeScript, JavaScript, and C# generator work landed.',
      '.cclinfo debug metadata made generated output easier to trace back to CCL sources.',
    ],
  },
  {
    id: 'imports-json',
    stage: 'done',
    release: 'v0.0.4',
    title: 'Imports + JSON output',
    summary: 'CCL source files became easier to split, reuse, and connect to JSON-heavy systems.',
    details: [
      'Import one CCL source file from another.',
      'Generate JSON serialize/deserialize methods for supported targets.',
      'Use scoped attributes and output file grouping for cleaner generated projects.',
    ],
  },
  {
    id: 'enums',
    stage: 'done',
    release: currentDevelopmentVersion,
    title: 'First-class enums',
    summary: 'Enums moved into the language and generators as a proper model feature.',
    details: [
      'Define enums with default values and typedef-aware codegen.',
      'Use nested enums without losing generated type names.',
      'Control generated enum type and member prefixes when a target needs naming help.',
    ],
  },
  {
    id: 'rust-zig',
    stage: 'next',
    release: currentDevelopmentVersion,
    title: 'Rust + Zig outputs',
    summary: 'The next generator push targets systems languages without making users write them by hand first.',
    details: [
      'Rust output is planned for the current development line.',
      'Zig output is planned for the current development line.',
      'The goal is practical generated models first, then deeper target-specific polish.',
    ],
  },
  {
    id: 'c-cpp',
    stage: 'planned',
    title: 'C + C++ outputs',
    summary: 'Low-level targets stay on the roadmap for projects that need native integration.',
    details: [
      'C output is planned.',
      'C++ output is planned.',
      'The design should keep generated code inspectable instead of hiding behavior behind heavy dependencies.',
    ],
  },
  {
    id: 'generic-containers',
    stage: 'planned',
    title: 'Generics + maps',
    summary: 'Reusable typed shapes and map fields will make CCL models less repetitive.',
    details: [
      'Generics are planned for reusable model patterns.',
      'Maps are planned for dictionary-like fields.',
      'Generators will need consistent target-language mappings for both features.',
    ],
  },
  {
    id: 'external-inputs',
    stage: 'planned',
    title: 'OpenAPI + Telegram TL inputs',
    summary: 'CCL should be able to meet existing contracts instead of only starting from new CCL files.',
    details: [
      'OpenAPI input support is planned.',
      'Telegram TL input support is planned.',
      'These adapters would let CCL workflows start from formats teams already have.',
    ],
  },
  {
    id: 'behavior-modeling',
    stage: 'planned',
    title: 'Methods + inheritance',
    summary: 'Future CCL should describe more than fields when projects need richer generated APIs.',
    details: [
      'Method definitions are planned.',
      'Proper inheritance support is planned.',
      'The hard part is keeping generated code idiomatic across targets.',
    ],
  },
];
