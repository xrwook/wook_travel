import { SupabaseClient } from '@supabase/supabase-js'
import { PrismaClient } from '@prisma/client'

export interface Context {
  supabase: SupabaseClient
  prisma: PrismaClient
  userId?: string // 인증된 사용자 ID (있는 경우)
}