import { useState, useEffect } from "react";

export const useImageGallery = () => {
  const [imageGallery, setImageGallery] = useState([]);

  useEffect(() => {
    // 从服务器获取图片集
    fetchImageGallery();
  }, []);

  const fetchImageGallery = async () => {
    try {
      // 发起获取图片集的请求
      const response = await fetch("https://example.com/api/image-gallery");
      const data = await response.json();
      setImageGallery(data);
    } catch (error) {
      console.error("Error fetching image gallery:", error);
    }
  };

  return imageGallery;
};

export const useCoverImages = () => {
  const [coverImages, setCoverImages] = useState([]);

  useEffect(() => {
    // 从服务器获取封面图片
    fetchCoverImage();
  }, []);

  const fetchCoverImage = async () => {
    try {
      // 发起获取封面图片的请求
      const response = await fetch("api/image/covers");
      const data = await response.json();
      setCoverImages(data);
    } catch (error) {
      console.error("Error fetching cover image:", error);
    }
  };

  return coverImages;
};
