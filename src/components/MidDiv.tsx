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
        <div className="flex flex-row px-14">
          <div className='w-2/4 mt-28'><h1 className="text-5xl font-semibold font-serif">Flish</h1>
          <p className='text-2xl'>The Internet's source for visuals.</p>
          <p className='text-2xl'>Powered by creators everywhere</p>
          <input
                placeholder="search for images and illustrations"
                className="bg-gray-200 py-3 px-48 rounded-lg "
                type="text"
              />
          </div>
          <div className='mt-14'>
            {photo.length > 0 && <img className='h-64 w-72 rounded-lg' src={photo[0].urls.regular} />}
          </div>
          <div></div>
        </div>
    </>
  )
}

export default MidDiv