// import { PrismaClient } from '@prisma/client'
// export const db = new PrismaClient()

import mongoose from 'mongoose';

const connection = {

}
async function dbConnect() {
    if (connection.isConnected) {
        return
    }
   const db = await mongoose.connect(process.env.DATABASE_URL)
   console.log("db",db);
   connection.isConnected = db.connections[0].readyState;
}

export default dbConnect