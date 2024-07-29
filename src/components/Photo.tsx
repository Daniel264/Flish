import { useEffect, useState } from "react";
import "../assets/tailwind.css";
import axios from "axios";
import download from "../download.png";
import like from "../love.png";

interface Photo {
  urls: {
    regular: string;
  };
  alt_description: string;
  likes: string;
  id: string;
  downloads: string;
  tags: string;
  description: string;
  user: {
    name: string;
    username: string;
  };
  link: string;
}

const Photo = () => {
  const [photo, setPhoto] = useState<Photo[]>([]);
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        console.log(apiKey);
        const photoBatch1 = await axios.get<Photo[]>(
          "https://api.unsplash.com/photos/random?count=50",
          {
            headers: {
              Authorization: `Client-ID ${apiKey}`,
            },
          }
        );
        const photoBatch2 = await axios.get<Photo[]>(
          "https://api.unsplash.com/photos/random?count=50",
          {
            headers: {
              Authorization: `Client-ID ${apiKey}`,
            },
          }
        );

        const allPhotos = [...photoBatch1.data, ...photoBatch2.data];
        setPhoto(allPhotos);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };
    fetchPhoto();
  }, [apiKey]);

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const columns = 3;
  const photoColumns: Photo[][] = Array.from({ length: columns }, () => []);

  photo.forEach((photos, index) => {
    photoColumns[index % columns].push(photos);
  });

  return (
    <>
      {photo.length === 0 ? (
        <p>Loading Photos...</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 ">
          {photoColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col space-y-4">
              {column.map((photo, photoIndex) => (
                <div className="op-main relative hover:cursor-zoom-in hover:brightness-90 hover:backdrop-blur-sm">
                  <img
                    key={photoIndex}
                    className="w-full h-auto"
                    src={photo.urls.regular}
                    alt={photo.alt_description || "Random photo"}
                  />
                  <div className="op-city flex absolute top-0 right-0 opacity-0 py-1.5 px-1.5">
                    <button className="bg-w rounded-md py-1 px-2 m-1">
                      <img
                        onClick={() =>
                          handleDownload(photo.urls.regular, `${photo.id}.jpg`)
                        }
                        src={download}
                        alt=""
                        className="h-6"
                      />
                    </button>
                    <button className="bg-w rounded-md py-1 px-2 m-1">
                      <img src={like} alt="" className="h-6" />
                    </button>
                  </div>
                  <p className="op-city absolute bottom-0 left-6 text-white opacity-0">
                    {photo.user.name}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Photo;
