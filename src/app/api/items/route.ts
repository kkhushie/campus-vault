import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, description, category, condition, price, imageUrls } = body;

    if (!title || !category || !condition) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!price || price <= 0) {
      return NextResponse.json({ error: "Invalid price" }, { status: 400 });
    }

    // TEMP ownerId (until auth)
    const ownerId = "TEMP_USER_ID"; // replace after auth

    const item = await prisma.item.create({
      data: {
        title,
        description,
        category,
        condition,
        price,
        imageUrls: imageUrls || [],
        type: "SALE",
        status: "ACTIVE",
        ownerId,
      },
    });

    return NextResponse.json(item);
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
