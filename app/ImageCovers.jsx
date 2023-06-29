import fs from "fs";
import path from "path";

export default async function ImageCovers(props) {
  const covers = fs.readdirSync(path.join("public", "mangas"));

  return covers.map((cover, index) => <ImageCover key={index} src={cover} />);
}

const ImageCover = async (props) => {
  const { src } = props;
  const cover = fs.readdirSync(path.join("public", "mangas", src))[0];

  return (
    <a href={`gallery/${src}`}>
      <img src={`mangas/${src}/${cover}`} alt="Boo" />
    </a>
  );
};
