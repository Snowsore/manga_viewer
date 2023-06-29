import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export function GET(req) {
  const folders = fs.readdirSync(path.join("public", "mangas"));
  return NextResponse.json(folders);
}
