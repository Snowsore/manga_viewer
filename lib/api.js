const baseURL = "http://localhost:3000";

const api = {
  getCovers: async () => {
    const res = await fetch(`${baseURL}/api/image/covers`);
    const json = await res.json();
    return json;
  },
  getCover: async (name) => {
    const res = await fetch(`${baseURL}/api/image/cover/${name}`);
    const json = await res.json();
    return json;
  },
  getGallery: async (name) => {
    const res = await fetch(`${baseURL}/api/image/gallery/${name}`);
    const json = await res.json();
    return json;
  },
};

export default api;
