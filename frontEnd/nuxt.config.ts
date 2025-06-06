// import { createResolver } from '@nuxt/kit';
// const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      graphqlEndpoint: process.env.NUXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql',
    },
  },
  routeRules: {
    '/**': {
    },
  },
  devtools: { enabled: true },
  pages: true,
  experimental: {
    componentIslands: 'auto',
    payloadExtraction: false,
  },
  components: true,
  imports: {
    autoImport: true,
  },
  typescript: {
    typeCheck: true,
    builder: 'vite',
    tsConfig: {
      include: ['**/*.ts', '**/*.vue'],
      exclude: ['node_modules/**', 'dist/**'],
    },
  },
  app: {
    buildAssetsDir: '_nuxt',
    head: {
      title: 'wook',
      htmlAttrs: { lang: 'ko' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap',
        },
      ],
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    optimizeDeps: {
      include: ['tslib'],
    },
  },
  nitro: {
    externals: {
      external: [],
      inline: ['tslib'],
    },
  },
  // css: [resolve('./assets/style/style.scss')],
});
