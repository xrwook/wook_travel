import { useNuxtApp } from '#app'
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client/core'

export const useApollo = () => {
  const nuxtApp = useNuxtApp()
  return nuxtApp.$apollo as ApolloClient<NormalizedCacheObject>
}
