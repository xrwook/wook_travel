import { defineNuxtPlugin } from '#app'
import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { provideApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin(nuxtApp => {
  // HTTP 연결 설정
  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql',
  })

  // 에러 처리 미들웨어
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(
          `[GraphQL 에러]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      })
    }
    if (networkError) {
      console.error(`[네트워크 에러]: ${networkError}`)
    }
  })

  // 인증 헤더 설정
  const authLink = setContext((_, { headers }) => {
    // 클라이언트 사이드에서만 토큰을 가져옴
    const token = process.client ? localStorage.getItem('token') : null

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  })

  // Apollo 클라이언트 생성
  const apolloClient = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    // 개발 모드에서 디버깅 활성화
    ...(process.dev && {
      connectToDevTools: true,
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
        },
      },
    }),
  })

  // composable에서 사용하도록 제공
  provideApolloClient(apolloClient)

  // nuxt app에서 사용할 수 있도록 주입
  nuxtApp.provide('apollo', apolloClient)
})
