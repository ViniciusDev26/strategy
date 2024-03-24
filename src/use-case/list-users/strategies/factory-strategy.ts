import { PrismaUsersRepository } from "../../../repositories/prisma-users-repository"
import { ListUsersUseCaseStrategy } from "../ListUsersUseCase"
import { AdminStrategy } from "./admin"
import { CommonStrategy } from "./common"

export function createListUsersStrategy(role: string): ListUsersUseCaseStrategy {
  const usersRepository = new PrismaUsersRepository()
  const strategies = {
    ADMIN: new AdminStrategy(usersRepository),
    COMMOM: new CommonStrategy(usersRepository)
  }

  return strategies[role]
}