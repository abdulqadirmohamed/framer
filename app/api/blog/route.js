import connectMongoDB from "@/libs/mongodb"
import Blog from "@/models/blog"
import { NextResponse } from "next/server"

export async function POST(request){
    const {title, tags, description} = await request.json()
    await connectMongoDB()
    await Blog.create({title, tags, description})

    return NextResponse.json({message: 'post created'}, {status: 201})
}