

import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      "no-console": "warn", //чтобы не забывать удалять console.log
      "eqeqeq": "warn", //чтобы не забывать использовать строгое сравнение
      "curly": "warn", //чтобы не забывать использовать фигурные скобки в блоках if, else, for, while и do-while
      "no-else-return": "warn", //чтобы не забывать удалять else после return
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),

])

export default eslintConfig
