export interface User { id: string, name: string, role: string, companyId: string}
export interface ListParams {
  companyId?: string
}
export interface UsersRepository {
  findById: (id: string) => Promise<User | null>
  list: (params?: ListParams) => Promise<Array<User>>
}