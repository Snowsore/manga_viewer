import Image from "next/image";
import fs from "fs";
import path from "path";

export default function Home() {
  return (
    <main>
      <ImageCovers />
    </main>
  );
}

const ImageCovers = async (props) => {
  const covers = fs.readdirSync(path.join("public", "mangas"));

  return covers.map((cover, index) => <ImageCover key={index} src={cover} />);
};

const ImageCover = async (props) => {
  const { src } = props;
  const cover = fs.readdirSync(path.join("public", "mangas", src))[0];

  return (
    <a href={`gallery/${src}`}>
      <Image
        src={`/mangas/${src}/${cover}`}
        width={2000}
        height={2000}
        alt="Boo"
      />
    </a>
  );
};
