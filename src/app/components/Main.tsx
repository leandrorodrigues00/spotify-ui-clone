import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
  return (
    <main className="flex-1 p-6">
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
        <a
          href="#"
          className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/bestAlbum.jpg"
            alt="Capa do Album Phobia da banda Breaking Benjamin"
            width={104}
            height={104}
          />
          <strong>Phobia</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
            <Play className="text-black fill-current" />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/bestAlbum.jpg"
            alt="Capa do Album Phobia da banda Breaking Benjamin"
            width={104}
            height={104}
          />
          <strong>Phobia</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
            <Play className="text-black fill-current" />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/bestAlbum.jpg"
            alt="Capa do Album Phobia da banda Breaking Benjamin"
            width={104}
            height={104}
          />
          <strong>Phobia</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
            <Play className="text-black fill-current" />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/bestAlbum.jpg"
            alt="Capa do Album Phobia da banda Breaking Benjamin"
            width={104}
            height={104}
          />
          <strong>Phobia</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
            <Play className="text-black fill-current" />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/bestAlbum.jpg"
            alt="Capa do Album Phobia da banda Breaking Benjamin"
            width={104}
            height={104}
          />
          <strong>Phobia</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
            <Play className="text-black fill-current" />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/bestAlbum.jpg"
            alt="Capa do Album Phobia da banda Breaking Benjamin"
            width={104}
            height={104}
          />
          <strong>Phobia</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
            <Play className="text-black fill-current" />
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-2xl mt-10">
        Made for Leandro Rodrigues
      </h2>

      <div className="grid grid-cols-8 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            src="/bestAlbum.jpg"
            className="w-full"
            alt="Capa do Album Phobia da banda Breaking Benjamin"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in read and more
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            src="/bestAlbum.jpg"
            className="w-full"
            alt="Capa do Album Phobia da banda Breaking Benjamin"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in read and more
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            src="/bestAlbum.jpg"
            className="w-full"
            alt="Capa do Album Phobia da banda Breaking Benjamin"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in read and more
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            src="/bestAlbum.jpg"
            className="w-full"
            alt="Capa do Album Phobia da banda Breaking Benjamin"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in read and more
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            src="/bestAlbum.jpg"
            className="w-full"
            alt="Capa do Album Phobia da banda Breaking Benjamin"
            width={120}
            height={120}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in read and more
          </span>
        </a>
      </div>
    </main>
  );
}
