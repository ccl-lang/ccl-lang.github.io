// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ccl-lang.github.io',
  integrations: [
    starlight({
      title: 'CCL',
      description: 'Common Code Language documentation and project site.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ccl-lang/ccl',
        },
      ],
      customCss: ['./src/styles/site.css'],
      sidebar: [
        {
          label: 'Docs',
          autogenerate: { directory: 'docs' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
