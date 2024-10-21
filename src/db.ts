import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = 
    globalForPrisma.prisma ?? 
    new PrismaClient({
        log: ['query'],
    })

    if (process.env.NODE_EV !== 'production') globalForPrisma.prisma = prisma