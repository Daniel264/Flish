import React from "react";
import "./assets/tailwind.css";
import logo from './pixabay.jpg';
import background from './background.png'

console.log(logo);


function App() {
  return (
    <>
      <div className="bg-image bg-no-repeat bg-cover bg-center flex justify-between p-5 text-lg font-medium">
        <img className="w-16" src={logo} alt="Logo" />
        <div className="flex flex-row space-x-10">
          <button className="rounded-3xl h-10 ">Explore</button>
          <button className="rounded-3xl h-10">Log in</button>
          <button className="rounded-3xl bg-slate-400 h-10 px-4 py-2">Join</button>
          <button className="rounded-3xl bg-green-500 h-10 px-4 py-2 text-white">Upload</button>
        </div>
      </div>
      
    </>
  );
}

export default App;
