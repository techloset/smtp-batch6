import { NextResponse } from "next/server";

export async function GET(){
   console.log("call");
   return NextResponse.json({message:"successfully recevived"},{status:200})
}