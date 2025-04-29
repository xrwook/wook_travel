import { gql } from '@apollo/client/core'

export const GET_ME = gql`
  query GetMe {
    me {
      id
      email
    }
  }
`
