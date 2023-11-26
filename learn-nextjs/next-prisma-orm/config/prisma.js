import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

// npm install prisma --save-dev   
// npx prisma init --datasource-provider mongodb
// npm install @prisma/client
// prisma generate