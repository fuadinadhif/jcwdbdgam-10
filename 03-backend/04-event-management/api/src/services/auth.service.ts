import { Role } from "../generated/prisma/enums.js";
import { prisma } from "../lib/prisma.lib.js";

interface IUserData {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export async function create(userData: IUserData) {
  await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role,
    },
  });
}
