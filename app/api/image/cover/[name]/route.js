import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export function GET(req, { params }) {
  const { name } = params;
  const files = fs.readdirSync(path.join("public", "mangas", name));
  return NextResponse.json([`mangas/${name}/${files[0]}`]);
}
