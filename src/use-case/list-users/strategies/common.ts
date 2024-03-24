import { User } from "@prisma/client"
import { UsersRepository } from "../../../contracts/UserRepository"
import { ListUsersUseCaseStrategy } from "../ListUsersUseCase"

export class CommonStrategy implements ListUsersUseCaseStrategy {
  constructor(
    private readonly usersRepository: UsersRepository
  ) {}

  async filter(loggedUser: User) {
    const users = await this.usersRepository.list({
      companyId: loggedUser.companyId
    })

    return users
  }
}