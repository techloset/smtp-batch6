import dbConnect from "@/config/db"
import { userModel } from "@/model/users";
import { NextResponse } from "next/server"
dbConnect();

export const GET =async (req, route) => {
       try {
              //  const data = await userModel.create()
               //  const data = await userModel.createMany()
        const data = await userModel.find()
        console.log("data",data)
        return NextResponse.json({ message: "success",users:data })

       } catch (error) {
        console.log("error",error);
        return NextResponse.json({ message: "error",error })
       }
    
}