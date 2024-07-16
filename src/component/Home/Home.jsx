import React from "react";
import mycharts from "../../assets/mycharts.png";

export default function Home() {
  return (
    <div className="h-screen bg-green-900 flex flex-wrap justify-center items-center md:px-20">
      <div>
        <img src={mycharts} alt="My Charts" className="w-full" />
      </div>
      <div>
        <h1 className="text-white text-center">
          Stay on top of your business with our advanced platform, offering
          detailed customer transaction records <br /> dynamic charts to help
          you make informed decisions.
        </h1>
      </div>
    </div>
  );
}
