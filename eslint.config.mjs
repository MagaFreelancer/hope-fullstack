import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import fsdPlugin from 'eslint-plugin-fsd-lint'

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
      'fsd-lint': fsdPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unused-vars': 'error', //чтобы не забывать удалять неиспользуемые переменные
      'no-console': 'warn', //чтобы не забывать удалять console.log
      eqeqeq: 'warn', //чтобы не забывать использовать строгое сравнение
      curly: ['error', 'all'], //чтобы не забывать использовать фигурные скобки в блоках if, else, for, while и do-while
      'no-else-return': 'warn', //чтобы не забывать удалять else после return

      // Архитектурные правила FSD
      'fsd-lint/no-public-api-sidestep': 'error',
      'fsd-lint/forbidden-imports': 'error',
      'fsd-lint/no-relative-imports': 'error',
      'fsd-lint/no-cross-slice-dependency': 'error',
      'fsd-lint/no-global-store-imports': 'error',
      'fsd-lint/no-ui-in-business-logic': 'error',
      // 'fsd-lint/ordered-imports': 'warn',
    },
  },
  // Исключения для корректной работы Next.js App Router и Shared слоя
  {
    files: [
      'src/app/**/*.{ts,tsx}',
      'src/shared/**/*.{ts,tsx}',
      '**/*.test.{ts,tsx}',
    ],
    rules: {
      'fsd-lint/forbidden-imports': 'off',
      'fsd-lint/no-cross-slice-dependency': 'off',
      'fsd-lint/no-global-store-imports': 'off',
      'fsd-lint/ordered-imports': 'off',
    },
  },
  prettierConfig,
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
