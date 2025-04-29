import { userResolver } from './user.resolver'
import { routeResolver } from './route.resolver'
import { placeResolver } from './place.resolver'

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...routeResolver.Query,
    ...placeResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...routeResolver.Mutation,
    ...placeResolver.Mutation
  },
  User: userResolver.User || {},
  Route: routeResolver.Route || {},
  Place: placeResolver.Place || {}
}