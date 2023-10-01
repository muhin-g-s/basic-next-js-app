import post from "@/models/post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (request) => {
    const url = new URL(request.url)
    const username = url.searchParams.get("username")

    try{
        await connect()
        const posts = await post.find(username && {username});

        return new NextResponse("This is api", {status:200})
    }catch(error){
        //console.log(error)
        return new NextResponse("Error rec to DB 1", {status:500})
    }
}

export const POST = async (request) => {
    const body = await request.json()

    const newPost = new post(body)

    try{
        await connect();

        await newPost.save()

        return NextResponse("Post created", {status:201})
    }catch(error){
        //console.log(error)
        return new NextResponse("Error rec to DB cr", {status:500})
    }
}