import { prisma } from "../src/lib/prisma.lib.js";
import {} from "../src/generated/prisma/client.js";
import { faker } from "@faker-js/faker";
import { Role } from "@prisma/client";
// async function seed() {
//   try {
//     /* ----------------------------- Delete old data ---------------------------- */
//     await prisma.user.deleteMany();
//     console.info(`All old data has been deleted 🚮`);
//     /* ----------------------------- Create new data ---------------------------- */
//     const customers: User[] = [
//       {
//         id: 1,
//         name: "Fadli Zon",
//         email: "fadlizon@mail.com",
//         password: "newpass",
//         role: "CUSTOMER",
//         createdAt: new Date("2024-11-12"),
//         updatedAt: new Date("2024-11-12"),
//         deletedAt: null,
//       },
//       {
//         id: 2,
//         name: "Ayu Lestari",
//         email: "ayu.lestari@mail.com",
//         password: "password123",
//         role: "CUSTOMER",
//         createdAt: new Date("2024-12-01"),
//         updatedAt: new Date("2024-12-05"),
//         deletedAt: null,
//       },
//       {
//         id: 3,
//         name: "Rizky Pratama",
//         email: "rizky.pratama@mail.com",
//         password: "securepass",
//         role: "CUSTOMER",
//         createdAt: new Date("2024-12-10"),
//         updatedAt: new Date("2024-12-15"),
//         deletedAt: null,
//       },
//       {
//         id: 4,
//         name: "Siti Rahmawati",
//         email: "siti.rahmawati@mail.com",
//         password: "rahma2024",
//         role: "CUSTOMER",
//         createdAt: new Date("2025-01-03"),
//         updatedAt: new Date("2025-01-08"),
//         deletedAt: null,
//       },
//       {
//         id: 5,
//         name: "Dimas Saputra",
//         email: "dimas.saputra@mail.com",
//         password: "dimassap",
//         role: "CUSTOMER",
//         createdAt: new Date("2025-01-10"),
//         updatedAt: new Date("2025-01-18"),
//         deletedAt: null,
//       },
//     ];
//     const eventOrganizers: User[] = [
//       {
//         id: 6,
//         name: "Andi Wijaya",
//         email: "andi.wijaya@mail.com",
//         password: "organizer123",
//         role: "EVENT_ORGANIZER",
//         createdAt: new Date("2024-10-05"),
//         updatedAt: new Date("2024-10-10"),
//         deletedAt: null,
//       },
//       {
//         id: 7,
//         name: "Putri Maheswari",
//         email: "putri.maheswari@mail.com",
//         password: "putriEO",
//         role: "EVENT_ORGANIZER",
//         createdAt: new Date("2024-11-02"),
//         updatedAt: new Date("2024-11-06"),
//         deletedAt: null,
//       },
//       {
//         id: 8,
//         name: "Bima Prakoso",
//         email: "bima.prakoso@mail.com",
//         password: "bimaevent",
//         role: "EVENT_ORGANIZER",
//         createdAt: new Date("2024-11-18"),
//         updatedAt: new Date("2024-11-25"),
//         deletedAt: null,
//       },
//       {
//         id: 9,
//         name: "Nabila Azzahra",
//         email: "nabila.azzahra@mail.com",
//         password: "nabilaEO",
//         role: "EVENT_ORGANIZER",
//         createdAt: new Date("2024-12-07"),
//         updatedAt: new Date("2024-12-12"),
//         deletedAt: null,
//       },
//       {
//         id: 10,
//         name: "Rafi Hidayat",
//         email: "rafi.hidayat@mail.com",
//         password: "rafievent",
//         role: "EVENT_ORGANIZER",
//         createdAt: new Date("2025-01-02"),
//         updatedAt: new Date("2025-01-09"),
//         deletedAt: null,
//       },
//     ];
//     await prisma.user.createMany({ data: [...customers, ...eventOrganizers] });
//     console.info(`Seeding finished successfully 😊`);
//   } catch (error) {
//     await prisma.$disconnect();
//     console.error(`Failed to seed data 😭`);
//     console.error(error);
//   } finally {
//     process.exit(1);
//   }
// }
async function seed() {
    try {
        /* ----------------------------- Delete old data ---------------------------- */
        await prisma.user.deleteMany();
        console.info(`All old data has been deleted 🚮`);
        /* ----------------------------- Create new data ---------------------------- */
        const customers = Array.from({ length: 15 }).map((element) => ({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            role: Role.CUSTOMER,
        }));
        const eventOrganizers = Array.from({ length: 15 }).map((element) => ({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            role: Role.EVENT_ORGANIZER,
        }));
        await prisma.user.createMany({ data: [...customers, ...eventOrganizers] });
        console.info(`Seeding finished successfully 😊`);
    }
    catch (error) {
        await prisma.$disconnect();
        console.error(`Failed to seed data 😭`);
        console.error(error);
    }
    finally {
        process.exit(1);
    }
}
seed();
//# sourceMappingURL=seed.js.map