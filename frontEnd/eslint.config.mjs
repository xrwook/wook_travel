import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    "no-unused-vars": "error", // 사용하지 않는 변수 경고 비활성화
    "@typescript-eslint/no-unused-vars": "error", // TypeScript에서 사용하지 않는 변수 경고 비활성화
    '@typescript-eslint/no-explicit-any': 'warn', // any 타입 사용 경고
    'vue/no-unused-components': 'warn', // 사용하지 않는 Vue 컴포넌트 경고
    'vue/no-unused-vars': 'error', // 사용하지 않는 Vue 변수 경고
    'vue/multi-word-component-names': 'error', // 컴포넌트 이름 규칙 강제화
    "double-quote-style": ["error", "single"], // 문자열에 single quote 사용
  },
  plugins: ['@typescript-eslint', 'prettier'], // 추가 플러그인
})
