import dbConnect from "@/config/db"
import { userModel } from "@/model/users";
import { NextResponse } from "next/server"
dbConnect();

export const GET =async (req, route) => {
       try {
        const data = userModel.find()
        return NextResponse.json({ message: "success",users:data })

       } catch (error) {
        return NextResponse.json({ message: "error",error })
       }
    
}