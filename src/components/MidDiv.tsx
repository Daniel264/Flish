import axios from 'axios'
import { useEffect, useState } from 'react'

interface Photo {
  urls: {
    regular: string;
  };
}

const MidDiv = () => {


  const [photo, setPhoto] = useState<Photo[]>([]);
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get<Photo>(
          "https://api.unsplash.com/photos/random", 
          {
            headers: {
              Authorization: `Client-ID ${apiKey}`,
            }
          }
        )
        const photoAlone = response.data
        setPhoto([photoAlone])
      }
      catch(error) {
        console.error("Error fetching photo", error);
        
      }
    }
    fetchPhoto();
  }, [apiKey])
      

  return (
    <>
        <div className="flex flex-row">
          <div><h1 className="text-5xl font-semibold">Unsplash</h1>
          <p>The Internet's source for visuals.</p>
          <p>Powered by creators everywhere</p>
          
          </div>
          <div>
            {photo.length > 0 && <img className='h-64 w-64 rounded-lg' src={photo[0].urls.regular} />}
          </div>
          <div></div>
        </div>
    </>
  )
}

export default MidDiv