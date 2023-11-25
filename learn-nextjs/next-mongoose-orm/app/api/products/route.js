import { NextResponse } from "next/server"
import { productModel } from "../../../model/products"
import dbConnect from "../../../config/db"

dbConnect()

export const POST = async (req) => {
    try {
        const body = await req.json()
        console.log("body", body)
        if (body.title && body.description && body.price) {
            // database
            const product = new productModel(body)
            await product.save()
            return NextResponse.json({ message: "successfully product created" })
        }

        return NextResponse.json({ message: "All params required, price, title, description" })
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            error: JSON.stringify(error)
        })
    }
}


export const PUT = async (req) => {
    try {
        const body = await req.json()
        console.log("body", body)
        if (body.title && body.description && body.price) {
            // database
            await productModel.updateOne({ _id: body.id }, body)
            return NextResponse.json({ message: "successfully product created" })
        }

        return NextResponse.json({ message: "All params required, price, title, description" })
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            error: JSON.stringify(error)
        })
    }
}


export const DELETE = async (req) => {
    try {
        const body = await req.json()
        console.log("body", body)
        if (body.id) {
            // database
            await productModel.deleteOne({
                _id: body.id
            })
            return NextResponse.json({ message: "successfully product deleted" })
        }
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            error: JSON.stringify(error)
        })
    }
}