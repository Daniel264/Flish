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
          <div className='w-fit pr-8 mt-28'><h1 className="text-5xl font-semibold font-serif">Flish</h1>
          <p className='text-2xl'>The Internet's source for visuals.</p>
          <p className='text-2xl'>Powered by creators everywhere</p>
          <input
                placeholder="search for images and illustrations"
                className="bg-gray-200 py-3 px-48 rounded-lg mt-16"
                type="text"
              />
          </div>
          <div className='mt-14 relative'>
            {photo.length > 0 && <img className='h-72 w-80 rounded-lg' src={photo[0].urls.regular} />}
            <div className='text-white absolute bottom-0 p-8 text-sm font-bold'>Discover Flish++<br />
            Unlimited Pictures<br />
            No Ads</div>

          </div>
          <div className='border border-black-500 border-1 ml-14 mt-14 rounded-lg h-72 p-5 w-72'>
              <p className='font-bold'>Collections</p>
          </div>
        </div>
    </>
  )
}

export default MidDiv