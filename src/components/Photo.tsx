import { useEffect, useState } from "react";
import "../assets/tailwind.css";
import axios from "axios";

interface Photo {
  urls: {
    regular: string;
  };
  alt_description: string;
}

const Photo = () => {
  const [photo, setPhoto] = useState<Photo[]>([]);
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        console.log(apiKey);
        const response = await axios.get<Photo[]>(
          "https://api.unsplash.com/photos/random?count=50",
          {
            headers: {
              Authorization: `Client-ID ${apiKey}`,
            },
          }
        );
        console.log(response.data);
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };
    fetchPhoto();
  }, [apiKey]);

  const columns = 3;
  const photoColumns: Photo[][] = Array.from({ length: columns }, () => []);

  photo.forEach((photos, index) => {
    photoColumns[index % columns].push(photos);
  })

  return (
    <>
    {photo.length === 0 ? (
      <p>Loading Photos...</p>
    ) : (
      <div className="grid grid-cols-3 gap-4">
        {photoColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col space-y-4">
            {column.map((photo, photoIndex) => (
              <img
                key={photoIndex}
                className="w-full h-auto"
                src={photo.urls.regular}
                alt={photo.alt_description || "Random photo"}
              />
            ))}
          </div>
        ))}
      </div>
    )}
  </>
  );
};

export default Photo;
