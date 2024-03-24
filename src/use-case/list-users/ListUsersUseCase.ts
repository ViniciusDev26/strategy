import { User, UsersRepository } from "../../contracts/UserRepository";
import { PrismaUsersRepository } from "../../repositories/prisma-users-repository";
import { createListUsersStrategy } from "./strategies/factory-strategy"

interface ListUsersUseCaseParams {
  userId: string
}

export interface ListUsersUseCaseStrategy {
  filter(loggedUser: User): Promise<User[]>
}

export class ListUsersUseCase {
  constructor(
    private readonly usersRepository: UsersRepository
  ){}

  async execute(params: ListUsersUseCaseParams) {
    const loggedUser = await this.usersRepository.findById(params.userId);
    if(!loggedUser) {
      return
    }
    const listUsersStrategy = createListUsersStrategy(loggedUser.role);

    const users = listUsersStrategy.filter(loggedUser);
    return users
  }
}

async function test() {
  const usersRepository = new PrismaUsersRepository()
  const useCase = new ListUsersUseCase(usersRepository, )
  const response = await useCase.execute({
    userId: "clu64vf4w0001e0ig16nyjrin",
  })

  // clu64vf4w0001e0ig16nyjrin = ADMIN
  // clu64v8is0000e0ighrva20i9 = COMMOM

  console.log(response)
}
test()