import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:1337/graphql',
  documents: './**/*.{tsx,ts,graphql}',
  generates: {
    'types/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
