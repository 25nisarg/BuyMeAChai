import NextAuth from 'next-auth'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import mongoose from 'mongoose';
// import user from '@/models/user';
import User from '@/models/User'
import connectDb from '@/db/connectDb';


export const authOptions = NextAuth({
    providers: [

        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),

    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "github") {
                
                await connectDb();             
                const currentUser = await User.findOne({ email: email })
                if (!currentUser) {
                    const newUser = new User({
                        email: user.email,
                        username: user.email.split("@")[0],
                    })
                }
                
                return true
            }
        },
        async session({ session, user, token }) {
            const dbUser = await User.findOne({email:session.user.email})
            session.user.name = dbUser.username
            return session
        },
    }
})

export { authOptions as GET, authOptions as POST }
// export async function GET(request) { }

// export async function HEAD(request) { }

// export async function POST(request) { }
