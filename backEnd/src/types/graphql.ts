import { User, Place, Route, UUID } from './models'

// 입력 타입
export interface CreatePlaceInput {
  name: string
  address?: string
  lat: number
  lng: number
  memo?: string
  order: number
  route_id: UUID
}

export interface UpdatePlaceInput {
  id: UUID
  name?: string
  address?: string
  lat?: number
  lng?: number
  memo?: string
  order?: number
}

export interface CreateRouteInput {
  title: string
  description?: string
}

export interface UpdateRouteInput {
  id: UUID
  title?: string
  description?: string
}

export interface CreateUserInput {
  email: string
  name?: string
}

export interface UpdateUserInput {
  id: UUID
  name?: string
}

// 리졸버 인자 타입
export interface QueryResolverArgs {
  id?: UUID
  routeId?: UUID
}