import { HomeIcon, Library, Search } from "lucide-react";

export function SiderBar() {
  return (
    <aside className="w-60 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brazil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Anri - Remember Summer Days
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hydrogen
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          BTS - Run
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          The Hu - Wolf Totem
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Reol - No title
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Yu Yu Hakusho Opening Full
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Level Up Lofi
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Five Finger Death Punch
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Lofi Fruits Music
        </a>
      </nav>
    </aside>
  );
}
