import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './graphql/schemas'
import { resolvers } from './graphql/resolvers'
import { supabase } from './services/supabase'
import { Context } from './types/context'
import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'
const jwt = require('jsonwebtoken');
// const jwtToken = jwt.sign({ userId: "7dfbc7c0-b494-4139-862d-79aeb7c417e3" }, "your-secret-key", { expiresIn: '30d' });
dotenv.config()
console.log(`process.env.ENV ==> ${process.env.ENV}`);

const prisma = new PrismaClient()

// 토큰 검증 함수
const getUserIdFromToken = (token: string): string | null => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { userId: string }
    return decoded.userId
  } catch (error) {
    return null
  }
}

async function startServer() {
  // Apollo Server 인스턴스 생성
  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
  })

  // 서버 시작
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }): Promise<Context> => {
      // 개발 환경에서 임시로 사용할 유저 ID
      const devUserId = process.env.ENV === 'DEV'
        ? "7dfbc7c0-b494-4139-862d-79aeb7c417e3" // 테스트 유저 ID
        : undefined;

      // 실제 토큰 처리 로직
      let userId = devUserId; // 개발 환경용 기본값
      const token = req.headers.authorization?.replace('Bearer ', '');
      
      if (token) {
        const id = getUserIdFromToken(token);
        if (id) userId = id;
      } else if (process.env.ENV === 'DEV') {
      }
      
      return {
        supabase,
        prisma,
        userId
      };
    },
    listen: { port: Number(process.env.PORT) || 4000 }
  })

  console.log(`🫠  GraphQL 서버 실행 중: ${url}`)
}

startServer().catch((err) => {
  console.error('서버 시작 실패:', err)
  process.exit(1)
})