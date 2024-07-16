import React from "react";

export default function AboutMe() {
  return (
    <div className="h-screen bg-green-900 text-white flex items-center justify-center">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          My name is <span className="font-bold">Mahdy Hassan</span>
        </h2>
        <p className="text-xl">
          Welcome to my personal portfolio! I am a dedicated web developer with
          a passion for creating dynamic and responsive websites. With expertise
          in <span className="font-bold">HTML</span>,{" "}
          <span className="font-bold">CSS</span>,
          <span className="font-bold"> JavaScript</span>, and modern frameworks
          such as
          <span className="font-bold"> React</span>,{" "}
          <span className="font-bold">Bootstrap</span>, and{" "}
          <span className="font-bold">Tailwind</span>, I craft seamless user
          experiences. My skill set allows me to build visually appealing and
          highly functional web applications, ensuring both aesthetic quality
          and performance. Explore my projects to see how I bring innovative
          ideas to life on the web.
        </p>
      </div>
    </div>
  );
}
