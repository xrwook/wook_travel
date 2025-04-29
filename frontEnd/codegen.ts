import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: process.env.NUXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql',
  documents: './graphql/**/*.{ts,graphql}',

  generates: {
    './graphql/generated/': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-client-helpers',
      ],
      preset: 'client',
      presetConfig: {
        fragmentMasking: false, // 프래그먼트 타입 마스킹 해제
      },
    },
    './graphql/generated/hooks.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-vue-apollo'
      ],
      config: {
        withCompositionFunctions: true,
        vueApolloComposableImportFrom: '@vue/apollo-composable',
        skipTypename: false,
        dedupeOperationSuffix: true,
        vueCompositionApiImportFrom: 'vue',
        reactivityTransform: true, // Vue 3.2+ 반응성 변환 사용
        defaultBaseOptions: {
          // 필요한 경우 기본 옵션 설정
          // fetchPolicy: 'cache-and-network'
        }
      }
    }
  },

  ignoreNoDocuments: true,
}

export default config
