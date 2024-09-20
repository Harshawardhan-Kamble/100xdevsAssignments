import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export  async function GET (){
return Response.json({
    name:"Harshawardhan",
    email:"Kamble"
})
}
export async function POST(req:NextApiRequest,res:NextApiResponse){
    const {username,password}= await req.body
    const user=await prisma.user.create({
        data:{
            username,password
        }
    })
    console.log(username,password)
    return Response.json({
    user
    })
}