import { Context } from '../../types/context'
import { CreatePlaceInput, UpdatePlaceInput, QueryResolverArgs } from '../../types/graphql'
import { Place, UUID } from '../../types/models'

export const placeResolver = {
  Query: {
    getPlaces: async (_parent: unknown, { routeId }: QueryResolverArgs, { prisma }: Context): Promise<Place[]> => {
      return prisma.places.findMany({
        where: { route_id: routeId },
        orderBy: { order: 'asc' }
      })
    },
    getPlace: async (_parent: unknown, { id }: QueryResolverArgs, { prisma }: Context): Promise<Place | null> => {
      return prisma.places.findUnique({
        where: { id }
      })
    }
  },
  Mutation: {
    createPlace: async (_parent: unknown, args: CreatePlaceInput, { prisma }: Context): Promise<Place> => {
      return prisma.places.create({
        data: {
          name: args.name,
          address: args.address,
          lat: args.lat,
          lng: args.lng,
          memo: args.memo,
          order: args.order,
          route_id: args.route_id
        }
      })
    },
    updatePlace: async (_parent: unknown, { id, ...data }: UpdatePlaceInput, { prisma }: Context): Promise<Place> => {
      return prisma.places.update({
        where: { id },
        data: {
          ...(data.name !== undefined && { name: data.name }),
          ...(data.address !== undefined && { address: data.address }),
          ...(data.lat !== undefined && { lat: data.lat }),
          ...(data.lng !== undefined && { lng: data.lng }),
          ...(data.memo !== undefined && { memo: data.memo }),
          ...(data.order !== undefined && { order: data.order })
        }
      })
    },
    deletePlace: async (_parent: unknown, { id }: { id: UUID }, { prisma }: Context): Promise<boolean> => {
      await prisma.places.delete({
        where: { id }
      })
      return true
    },
  },
  Place: {
    route: async (place: Place, _args: unknown, { prisma }: Context) => {
      if (!place.route_id) return null
      return prisma.routes.findUnique({
        where: { id: place.route_id }
      })
    }
  }
}