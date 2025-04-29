export type UUID = string

export interface User {
  id: UUID
  email: string
  name?: string | null
  routes?: Route[]
}

export interface Route {
  id: UUID
  title: string
  description?: string | null
  creator_id?: UUID | null
  created_at?: Date | null
  places?: Place[]
  creator?: User | null
}

export interface Place {
  id: UUID
  name: string
  address?: string | null
  lat: number
  lng: number
  memo?: string | null
  order: number
  route_id?: UUID | null
  created_at?: Date | null
  route?: Route | null
}