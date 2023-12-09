import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../../../config/prisma"


const authOptions = {

    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    console.log("credentials", credentials.username, credentials.password);
                    // await prisma.user.create({
                    //     data: {
                    //         email: credentials.username,
                    //         name: "Naveed",
                    //         password: credentials.password,
                    //         address: "address"
                    //     }
                    // })
                    // ORM  prisma.find({where:})
                    const user = await prisma.user.findFirst({
                        where: {
                            AND: [
                                { email: credentials.username },
                                { password: credentials.password },
                            ],
                        },

                    })
                    console.log("user by prisma", user);
                    if (user) {
                        return user
                    }
                    return null
                } catch (error) {
                    console.log("error", error);
                    return null
                }

            }
        })
        // ,
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
        //   })


    ],
    secret: process.env.NEXTAUTH_SECRET,
    // pages: {
    //     signIn: '/login',
    //   }
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }