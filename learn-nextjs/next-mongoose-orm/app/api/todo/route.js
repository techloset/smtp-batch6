import {NextResponse} from "next/server"
export const GET = ()=>{
    return NextResponse.json({message:"GET method call /api/todo path"})
}

export const POST = (req)=>{
    const title = new URL(req.url).searchParams.get("title")
    
    const desc = new URL(req.url).searchParams.get("description")

    return NextResponse.json({message:"POSt method call /api/todo path", data:title,desc})
}