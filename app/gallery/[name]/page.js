const fs = require("fs");
const path = require("path");

export default function Gallery({ params }) {
  const name = decodeURI(params.name);
  const images = fs.readdirSync(path.join("public/mangas", name));

  return images.map((image, index) => (
    <img key={index} src={`/mangas/${name}/${image}`} />
  ));
}
