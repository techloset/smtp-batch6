import { NextResponse } from "next/server";
export const GET = ()=>{
console.log("GET call");
let services = {
    title:"A service",
    descritption: "A service description",
    image:"url"
}

return NextResponse.json(services);
}

export const POST =async (req)=>{

    const body = await req.json()
    console.log("body",body)

    // database
    
    // some working
    return NextResponse.json({message:"post method call"})
}

export const DELETE = ()=>{
     // some working
     return NextResponse.json({message:"DELETE method call"})
}


export const PUT = ()=>{
    // some working
    return NextResponse.json({message:"PUT method call"})
}