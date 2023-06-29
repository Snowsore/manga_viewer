import fs from "fs";
import path from "path";
import Image from "next/image";

export default function Gallery({ params }) {
  const name = decodeURI(params.name);
  const images = fs.readdirSync(path.join("public/mangas", name));

  return images.map((image, index) => (
    <Image
      key={index}
      src={`/mangas/${name}/${image}`}
      width={2000}
      height={2000}
      alt="Boo"
    />
  ));
}
