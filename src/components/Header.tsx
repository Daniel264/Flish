import "../assets/tailwind.css";
import logo from "../pixabay.jpg";

const Header = () => {
  return (
    <div>
      <div className=" bg-no-repeat bg-cover bg-center h-screen flex flex-col justify-between">
        <div className="bg-image max-h-fit pb-40">
          <div className=" flex justify-between p-5 text-lg font-normal">
            <img className="w-16 h-16 rounded-full" src={logo} alt="Logo" />
            <div className="flex flex-row space-x-10">
              <button className="rounded-3xl text-white h-10">Explore</button>
              <button className="rounded-3xl text-white h-10">Log in</button>
              <button className="rounded-3xl text-white bg-white bg-opacity-20 h-10 px-4 py-2">
                Join
              </button>
              <button className="rounded-3xl bg-green-500 h-10 px-4 py-2 text-white">
                Upload
              </button>
            </div>
          </div>
          <div className="items-center justify-center pt-14">
            <p className="text-4xl font-bold pb-3 text-white text-center">
              Stunning royalty-free images & royalty-free stock
            </p>
            <p className="text-lg text-white text-center pb-4">
              Over 4.6 million+ high quality stock images, videos and music
              shared by our talented community
            </p>
            <div className="flex flex-row justify-center">
              <input
                placeholder="search for all images on ..."
                className=" placeholder:text-left px-72 py-4 rounded-3xl"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
