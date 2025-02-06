import React from "react";
import { Coins } from "lucide-react";
import react, { useState, useEffect } from "react";
import TypewriterEffect from "./TypewriterEffect";


function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-4 bg-yellow-500/40"
              style={{
                right: `${i * 30}px`,
                transform: "skew(-20deg)",
              }}
            />
          ))}
        </div>
      </div>



{/* ************************************************************************************************************************************** */}
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">







{/* ************************************************************************************************************************************** */}
        {/* Navbar */}
        <header className="flex items-center gap-4 mb-10 ml-5">
          <div className="flex items-center gap-2">
            <Coins className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold cursor-pointer">BINANCE</span>
            <span className="text-yellow-500 text-2xl font-bold cursor-pointer">NFT</span>
          </div>
          <div className="h-8 w-px bg-yellow-500/30 mx-4" />
          <span className="text-2xl font-bold text-yellow-500 cursor-pointer hover:text-white">
            CRISTIANO RONALDO
          </span>

          <span className="flex ml-[21%]">
            <ul className="flex space-x-8 text-[20px]">
              <li className=" hover:text-yellow-500 cursor-pointer">Home</li>
              <li className=" hover:text-yellow-500 cursor-pointer">About</li>
              <li className=" hover:text-yellow-500 cursor-pointer">Contact</li>
              <li className=" hover:text-yellow-500 cursor-pointer">Language</li>
            </ul>
            <button className="mx-2 ml-12 bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors">LOGIN</button>
            <button className="  bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors">SIGNUP</button>           
          </span>
        </header>
{/* ************************************************************************************************************************************** */}






{/* ************************************************************************************************************************************** */}
        {/* Hero Section */}
        <div className="grid grid-cols- lg:grid-cols-2 items-center min-h-[30vh] ">
          <div className="space-y-5">
            <div>
              <div>
                <span className="text-yellow-500 text-9xl font-extrabold ml-5">
                  FOREVER
                </span>
              </div>
            </div>
            <span className="text-white text-9xl font-extrabold ml-5">CR7</span>
          </div>
        </div>

        <h2 className="text-5xl font-bold text-yellow-500 mt-5 ml-5 tracking-[18px]">THE GOAT</h2>

        <div className="space-y-4">
          <div className="flex items-center gap-4 mt-[80px] ml-5">
            <span className="text-2xl">3.7.23</span>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors">
              BINANCE
            </button>
          </div>

          <p className="text-gray-400 text-[16px] max-w-md ml-5">
            Risk Warning: The value of your NFT may go down or up. NFTs are
            subject to high market risk. Binance is not responsible for
            verifying the identity, legitimacy or authenticity of any NFT.
          </p>
        </div>
      </div>
{/* ************************************************************************************************************************************** */}







{/* ************************************************************************************************************************************** */}
      {/* Image Section */}
      <div className="">
        <img
          src="/images/lastnft.png"
          alt="Athlete silhouette"
          className="absolute -right-[-7%] bottom-[-80px] w-[900px] h-[600px] object-contain rounded-lg"
        />
      </div>
{/* ************************************************************************************************************************************** */}






{/* ************************************************************************************************************************************** */}
      <TypewriterEffect/>
{/* ************************************************************************************************************************************** */}







    </div>
  );
}
{/* ************************************************************************************************************************************** */}

export default App;
