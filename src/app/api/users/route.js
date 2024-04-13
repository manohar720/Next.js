import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();

export function GET(request) {
  const users = [
    { name: "Murli Manohar", phone: "12345" },
    { name: "Manish", phone: "12345" },
    { name: "Kishor", phone: "12345" },
    { name: "Babban", phone: "12345" },
  ];
  return NextResponse.json(users);
}
export function PUT() {}
// NextRequest Object and NextResponse Object
export function POST(request) {
  const body = request.body;
  console.log(body);

  // console.log(request.method);
  // console.log(request.nextUrl.pathname);
  // console.log(request.cookies);
  // console.log(request.cookies.clear());
  return NextResponse.json({
    message: "posting user data",
  });
}
export function DELETE() {}
