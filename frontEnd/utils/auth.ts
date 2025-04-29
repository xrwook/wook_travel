import type { ApolloClient } from '@apollo/client/core'

export const setAuthToken = (token: string) => {
  if (process.client) {
    localStorage.setItem('token', token)
  }
}

export const removeAuthToken = () => {
  if (process.client) {
    localStorage.removeItem('token')
  }
}

export const getAuthToken = (): string | null => {
  if (process.client) {
    return localStorage.getItem('token')
  }
  return null
}

// 토큰이 만료되었을 때 Apollo 클라이언트 캐시 리셋
export const resetApolloCache = (client: ApolloClient<any>) => {
  client.resetStore()
}
