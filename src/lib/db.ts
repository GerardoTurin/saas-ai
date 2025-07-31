import { PrismaClient } from "@/generated/prisma"

// globalForPrisma: Aqui se define un objeto global para almacenar la instancia de PrismaClient.
const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}


// Se crea una instancia de PrismaClient. Si ya existe una instancia en el objeto global, se reutiliza.
export const prisma = globalForPrisma.prisma || new PrismaClient()


// Si no está en producción, se asigna la instancia de PrismaClient al objeto global para evitar múltiples instancias.
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma