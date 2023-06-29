import { NextResponse } from "next/server";

export function GET(req, { params }) {
  console.log(params.name);
  return NextResponse.json([]);
}
