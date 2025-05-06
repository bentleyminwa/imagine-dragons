import Header from "@/components/layout/header";
import Player from "@/components/layout/player";
import React from "react";

export default function Home() {
  return (
    <section className="h-screen bg-purple-400 grid grid-cols-1 grid-rows-[250px_auto_100px]">
      <Header />
      <div className="bg-[#f4f4f4] text-black rounded-tl-3xl rounded-tr-3xl">
        <h1>body content</h1>
      </div>
      <Player />
    </section>
  );
}
