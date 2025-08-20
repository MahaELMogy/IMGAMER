"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { StoreApi } from "../useGamesStore";
import Spinners from "../_componants/Spinners/Spinners";

export default function Shooter() {
  const { Games, funFetch, isLoading, error, errorMsg } = StoreApi();

  useEffect(() => {
    funFetch("shooter");
  }, []);

  if (isLoading) return <Spinners />;
  if (error) return <p>{errorMsg}</p>;
  return (
    <section>
      <div className="flex flex-wrap justify-between my-30 px-4">
        {Games?.map((game) => (
          <div key={game.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-5">
            <div className="bg-[#272121] text-[#F6E9E9] rounded-xl p-4 shadow-lg hover:shadow-[#E16428]/30 transition-all duration-300 min-h-[360px] flex flex-col justify-between">
              <div className="flex flex-col flex-grow">
                <Image
                  src={game?.thumbnail}
                  alt={game?.title}
                  width={300}
                  height={200}
                  className="w-full h-auto rounded object-cover mb-3"
                />
                <h3 className="text-lg font-semibold text-[#F1F1F1] line-clamp-1">
                  {game?.title}
                </h3>
                <p className="text-sm text-[#A0A3B1] mb-2 line-clamp-2">
                  {game?.short_description}
                </p>

                <div className="mt-auto">
                  <a
                    href={game?.freetogame_profile_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-[#E16428] hover:bg-[#c6501d] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
                    >
                      View Game
                    </button>
                  </a>
                </div>
              </div>

              <div>
                <span className="border-t border-[#FF7F11] block w-full h-0.5 mt-2"></span>
                <div className="flex flex-row justify-between mt-2 text-xs text-[#F1F1F1]">
                  <p className="line-clamp-1">
                    <strong className="text-[#FF7F11]">Genre:</strong>{" "}
                    {game?.genre}
                  </p>
                  <p className="line-clamp-1">
                    <strong className="text-[#FF7F11]">Platform:</strong>{" "}
                    {game?.platform}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
