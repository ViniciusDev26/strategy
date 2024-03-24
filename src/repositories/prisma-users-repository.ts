import { ListParams, User, UsersRepository } from "../contracts/UserRepository";
import { prisma } from "./prisma"

export class PrismaUsersRepository implements UsersRepository {
  async list(params?: ListParams): Promise<User[]> {
    const users = prisma.user.findMany({
      where: {
        companyId: params?.companyId
      }
    });

    return users
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    return user
  }
}