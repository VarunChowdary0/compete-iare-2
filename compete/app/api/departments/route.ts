import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { departments } from "@/models/departmentSchema";

export async function GET() {
    try {
        const result = await db.select().from(departments).run();
        return NextResponse.json(result.rows); // No need for `.rows`, Drizzle returns an array
    } catch (error) {
        console.error("Database Error:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
