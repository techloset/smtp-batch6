import { NextResponse } from "next/server"

var posts = [
    {
        id:1,
        title:"Nextjs13 course",
        description:"A detail description",
        image:"nextjs.png"
    },
    {
        id:2,
        title:"Typescript course",
        description:"A detail description",
        image:"typecription.png"
    }
]

export const GET = ()=>{
    // hard data la k 
    return NextResponse.json(posts)
}

export const POST = async (req)=>{
    const body = await req.json()

    posts.push(body)

    return NextResponse.json({message:"Post successfully created"})


}

export const DELETE = (req)=>{
   

   const id = new URL(req.url).searchParams.get("id")
   console.log("id",id);
   posts = posts.filter((post)=> post.id != id)

    return NextResponse.json({message:"Post successfully deleted"})


}

export const PUT = async (req)=>{
    const body = await req.json()
    
    posts = posts.map((post)=>{
        if (post.id == body.id) {
            return body
        }
        else {
            return post
        }
    })

    return NextResponse.json({message:"Post successfully updated"})
}