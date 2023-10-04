import { NextResponse } from "next/server";


export async function POST(
    request: Request
) {
    try {

    } catch (error) {
        console.log(error, "ERROR_SETTINGS")
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}