import { UsersRepository } from "../../../contracts/UserRepository";
import { ListUsersUseCaseStrategy } from "../ListUsersUseCase";

export class AdminStrategy implements ListUsersUseCaseStrategy {
  constructor(
    private readonly usersRepository: UsersRepository
  ) {}

  async filter() {
    const users = await this.usersRepository.list();
    return users
  }
}