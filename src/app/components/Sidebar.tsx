import { Heart, HomeIcon, Library, Plus, Search } from "lucide-react";
import { playlistsName } from "@/data";

export function SiderBar() {
  return (
    <aside className="w-60 bg-zinc-950 p-6 pt-8  fixed h-screen">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-3.5 mt-10">
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-[#b3b3b3]"
        >
          <Search />
          Search
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-[#b3b3b3]"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <button className="flex  gap-3  text-sm font-semibold text-[#b3b3b3] mt-10">
        <div className="bg-[#b3b3b3] rounded-sm w-6 h-6  flex items-center justify-center ">
          <Plus size={18} className="text-zinc-200 fill-current" />
        </div>
        Create a playlist
      </button>

      <button className="flex  gap-3  text-sm font-semibold text-[#b3b3b3] mt-5">
        <div className="bg-gradient-to-br from-purple-900 to-green-200   rounded-sm w-6 h-6  flex items-center justify-center ">
          <Heart size={12} className="text-zinc-200 fill-current" />
        </div>
        Liked songs
      </button>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        {playlistsName.map((playlist, index) => (
          <a
            key={index}
            href="#"
            className="text-sm text-zinc-400 hover:text-zinc-100"
          >
            {playlist}
          </a>
        ))}
      </nav>
    </aside>
  );
}
