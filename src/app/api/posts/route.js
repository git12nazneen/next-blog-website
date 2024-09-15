import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const {searchParams} = new URL(req.url)
    const page = searchParams.get('page')
    const POST_PER_PAGE = 2;
    try {
        // console.log(prisma); // Debugging line
        // console.log(prisma.category); // Debugging line
        const categories = await prisma.category.findMany({
            take:POST_PER_PAGE,
            skip:POST_PER_PAGE * (page - 1),
        });

        return new NextResponse(JSON.stringify(categories), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error(err);
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong!' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
};
