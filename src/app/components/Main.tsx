import { musicAlbuns, randomAlbuns } from "@/data";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
  return (
    <main className="flex-1 p-6 pt-4 pb-8 ml-60">
      <div className="flex items-center gap-3">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>

        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {musicAlbuns.map((album, index) => (
          <a
            key={index}
            href="#"
            className="bg-white/5 max-h-20 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
          >
            <Image
              src={album.cover}
              alt="Capa do Album Phobia da banda Breaking Benjamin"
              width={104}
              height={104}
            />
            <strong>{album.name}</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
              <Play className="text-black fill-current" />
            </button>
          </a>
        ))}
      </div>

      <h2 className="font-semibold text-2xl mt-10">
        Made for Leandro Rodrigues
      </h2>

      <div className="grid grid-cols-8 gap-6 mt-4">
        {randomAlbuns.map((albuns, index) => (
          <a
            key={index}
            href="#"
            className="bg-white/5 flex flex-col gap-2 p-4 rounded-md hover:bg-white/10"
          >
            <Image
              src={albuns.image}
              className="w-full rounded-sm"
              alt="Capa do Album Phobia da banda Breaking Benjamin"
              width={175}
              height={175}
            />
            <strong className="font-semibold truncate">{albuns.name}</strong>
            <span className="text-base text-zinc-400  line-clamp-2 mb-3">
              {albuns.description}
            </span>
          </a>
        ))}
      </div>

      <h2 className="font-semibold text-2xl mt-10">recently played</h2>

      <div className="grid grid-cols-8 gap-6 mt-4">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <a
              key={index}
              href="#"
              className="bg-white/5 flex flex-col gap-2 p-4 rounded-md hover:bg-white/10"
            >
              <Image
                src="/myAlbumsCovers/startset-transmissions.jpg"
                className="w-full rounded-sm"
                alt="Capa do Album Phobia da banda Breaking Benjamin"
                width={175}
                height={175}
              />
              <strong className="font-semibold truncate">lorem ipsu</strong>
              <span className="text-base text-zinc-400  line-clamp-2 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                magnam nemo mollitia alias possimus harum ab laborum esse,
                beatae recusandae illum quasi officiis reiciendis ipsa
                perspiciatis? Iste, quod eius. Id.
              </span>
            </a>
          ))}
      </div>

      <footer className="mb-24 py-8 mt-16  pb-16 ">
        <hr className="border-t- border-gray-300" />
      </footer>
    </main>
  );
}
