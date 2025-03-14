import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const db = new PrismaClient();

export async function GET() {

    const places = await db.places.findMany();

    return NextResponse.json({
        message: "Response success!",
        status: 200,
        payload: places
    });
    
};

export async function POST(req) {
    const newPlace = await req.json();
    const place = await db.places.create({
        data: newPlace
    })
    return NextResponse.json({
        status: 201,
        message: "Created success!",
        payload: place
    });
    
};

export async function DELETE(req) {
    const place = await req.json();
    await db.places.delete({
        where: {
            place_id: place.place_id
        }
    })
    return NextResponse.json({
        message: "Deleted succes!"
    })
}

export async function PUT(req){

    const data = await req.json();
    // console.log(data)
    const place = await db.places.update({
        where: {
            place_id: data.place_id
        },
        data: {
            place_name: data.place_name,
            place_image: data.place_image,
            description: data.description
        }
    })
    return NextResponse.json({
        message: "Updated success!",
        status: 200,
        payload: place
    })
}