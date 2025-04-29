import { Context } from '../../types/context'
import { User } from '../../types/models'
import { CreateUserInput, UpdateUserInput, QueryResolverArgs } from '../../types/graphql'

export const userResolver = {
  Query: {
    getUsers: async (_parent: unknown, _args: unknown, { prisma }: Context): Promise<User[]> => {
      return prisma.users.findMany()
    },
    getUser: async (_parent: unknown, { id }: QueryResolverArgs, { prisma }: Context): Promise<User | null> => {
      return prisma.users.findUnique({
        where: { id }
      })
    },
    me: async (_parent: unknown, _args: unknown, { prisma, userId }: Context): Promise<User | null> => {
      if (!userId) return null

      return prisma.users.findUnique({
        where: { id: userId }
      })
    }
  },
  Mutation: {
    createUser: async (_parent: unknown,
      { email, name }: CreateUserInput,
      { prisma }: Context): Promise<User> => {
      return prisma.users.create({
        data: {
          email,
          name
        }
      })
    },
    updateUser: async (_parent: unknown,
      { id, name }: UpdateUserInput,
      { prisma, userId }: Context): Promise<User> => {
      if (id !== userId) {
        throw new Error("수정 권한이 없습니다")
      }

      return prisma.users.update({
        where: { id },
        data: { name }
      })
    }
  },
  User: {
    routes: async (user: User, _args: unknown, { prisma }: Context) => {
      return prisma.routes.findMany({
        where: { creator_id: user.id }
      })
    }
  }
}