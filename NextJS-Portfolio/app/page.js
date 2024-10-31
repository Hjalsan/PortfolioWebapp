import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto font-montserrat bg-white">
      <div className="flex flex-col h-screen">
        {/* First element centered */}
        <div className="flex-1 p-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl">PORTFOLIO</h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl">Portfolio</h1>
        </div>

        {/* Second element with responsive visibility */}
        <div className="flex flex-row justify-between">
          <div
            style={{ width: "300px", height: "300px" }}
            className="bg-red-500 hidden xl:block"
          ></div>
          <div
            style={{ width: "800px", height: "300px" }}
            className="bg-gray-700 ml-auto"
          ></div>
        </div>
      </div>

      {/* Additional content below the main section */}
      <div className="h-screen bg-gray-200">
        <p>Additional content below the main section...</p>
      </div>
    </div>
  );
}
