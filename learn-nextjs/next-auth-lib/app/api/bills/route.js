import { NextResponse } from "next/server"
import { prisma } from "../../../config/prisma";

export const POST = async(req)=>{
    try {
        const body = await req.json();
        console.log("body",body);
        const response = await prisma.bills.create({
            data: {
              consumerNumber: body?.consumerNumber,
              units: body?.units,
              address:body?.address,
              status: body?.status,
            },
          })
          console.log("response",response)
      return  NextResponse.json({message:"Succesffuly Bill created"})
    } catch (error) {
       return NextResponse.json({message:"something went wrong", error:JSON.stringify(error)})
    }

}


  export const PUT = async(req)=>{
    try {
        const body = await req.json();
        console.log("body",body);
        const post = await prisma.bills.update({
            where: { id: body.id },
            data: { status: body.status },
          })
        
          console.log("response",response)
      return  NextResponse.json({message:"Succesffuly Bill created"})
    } catch (error) {
       return NextResponse.json({message:"something went wrong", error:JSON.stringify(error)})
    }

}