import Header from "@/components/layout/header";
import Player from "@/components/layout/player";
import { popularSongs } from "@/lib/data";
import React from "react";

export default function Home() {
  return (
    <section className="h-screen grid grid-cols-1 grid-rows-[200px_auto_80px] gap-y-2">
      <Header />
      <div className="grid grid-cols-[2fr_1fr] gap-x-5">
        {/* songs and albums */}
        <div className="space-y-3">
          {/* songs */}
          <div className="row-start-1 row-end-2">
            <h2 className="text-xl font-semibold">Popular</h2>
            <ul className="mt-1 shadow-md rounded-lg">
              {popularSongs.map((song) => (
                <li key={song.title} className="p-2 border-b last:border-b-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                      <span className="w-7 h-7 rounded-full bg-gray-300"></span>
                      <h3>{song.title}</h3>
                    </div>
                    <span className="text-sm text-gray-500">
                      {song.duration}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* albums */}
          <div className="col-start-1 col-end-2 row-start-2 row-end-3">
            <h2 className="text-xl font-semibold">Albums</h2>
            <ul>
              <li>Evolve</li>
              <li>Night Visions</li>
              <li>Smoke + Mirrors</li>
              <li>Mercury Act 1 & 2</li>
              <li>Loom</li>
            </ul>
          </div>
        </div>

        {/* videos */}
        <div className="row-span-2">
          <h2>Videos</h2>
          <ul>
            <li>Whatever it takes</li>
            <li>Follow You</li>
          </ul>
        </div>
      </div>
      <Player />
    </section>
  );
}
