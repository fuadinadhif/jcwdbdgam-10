import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import { Role } from "../generated/prisma/enums.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };

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

export async function get() {}

export async function update() {}

export async function remove() {}
