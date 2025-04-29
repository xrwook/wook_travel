import { Context } from '../../types/context'
import { Route, UUID } from '../../types/models'
import { CreateRouteInput, UpdateRouteInput, QueryResolverArgs } from '../../types/graphql'

export const routeResolver = {
  Query: {
    getRoutes: async (_: unknown, _args: unknown, { prisma }: Context): Promise<Route[]> => {
      return prisma.routes.findMany()
    },
    getRoute: async (_: unknown, { id }: QueryResolverArgs, { prisma }: Context): Promise<Route | null> => {
      return prisma.routes.findUnique({
        where: { id }
      })
    },
    myRoutes: async (_: unknown, _args: unknown, { prisma, userId }: Context): Promise<Route[]> => {
      if (!userId) return []

      return prisma.routes.findMany({
        where: { creator_id: userId }
      })
    },
    getRoutesByUserId: async (_: unknown, { creator_id, id }: { creator_id: string, id?: string }, { prisma }: Context): Promise<Route[]> => {
      return prisma.routes.findMany({
        where: {
          creator_id,
          ...(id && { id })
        },
        orderBy: { created_at: 'desc' }
      });
    }
  },
  Mutation: {
    createRoute: async (_: unknown,
      { title, description }: CreateRouteInput,
      { prisma, userId }: Context): Promise<Route> => {

      console.log("createRoute", { title, description, userId })
      // console.log("prisma", prisma )

      if (!userId) {
        console.log("userId 없음")
        throw new Error("인증이 필요합니다")
      }

      return prisma.routes.create({
        data: {
          title,
          description,
          creator_id: userId
        }
      })
    },
    updateRoute: async (_: unknown,
      { id, ...data }: UpdateRouteInput,
      { prisma, userId }: Context): Promise<Route> => {
      const route = await prisma.routes.findUnique({
        where: { id }
      })

      if (route?.creator_id !== userId) {
        throw new Error("수정 권한이 없습니다")
      }

      return prisma.routes.update({
        where: { id },
        data: {
          ...(data.title !== undefined && { title: data.title }),
          ...(data.description !== undefined && { description: data.description })
        }
      })
    },
    deleteRoute: async (_: unknown, { id }: { id: UUID }, { prisma, userId }: Context): Promise<boolean> => {
      const route = await prisma.routes.findUnique({
        where: { id }
      })

      if (route?.creator_id !== userId) {
        throw new Error("삭제 권한이 없습니다")
      }

      await prisma.routes.delete({
        where: { id }
      })
      return true
    }
  },
  Route: {
    creator: async (route: Route, _args: unknown, { prisma }: Context) => {
      if (!route.creator_id) return null
      return prisma.users.findUnique({
        where: { id: route.creator_id }
      })
    },
    places: async (route: Route, _args: unknown, { prisma }: Context) => {
      return prisma.places.findMany({
        where: { route_id: route.id },
        orderBy: { order: 'asc' }
      })
    }
  }
}