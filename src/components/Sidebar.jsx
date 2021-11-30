import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  RssIcon,
  SearchIcon,
} from "@heroicons/react/solid";

import { PlusIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const session = useSession();

  return (
    <div className="p-5 text-gray-200  text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide pr-14">
      <div className="py-3">
        <img src="/images/Logo.png" alt="namesss" className="h-14" />
      </div>
      <div className="flex flex-col space-y-3 mt-4">
        <button className="flex items-center space-x-3 hover:bg-gray-900 py-1 px-2">
          <HomeIcon className="h-7 w-7 text-white" />
          <p className="text-white font-bold">Home</p>
        </button>
        <button className="flex items-center space-x-3 hover:bg-gray-900 py-1 px-2">
          <SearchIcon className="h-7 w-7" />
          <p className="font-semibold">Search</p>
        </button>
        <button className="flex items-center space-x-3 hover:bg-gray-900 py-1 px-2">
          <LibraryIcon className="h-7 w-7" />
          <p className="font-semibold">You'r Library</p>
        </button>
        <hr className="border-b-[0.1px] border-gray-900" />
        <button className="flex items-center space-x-3 hover:bg-gray-900 py-1 px-2">
          <PlusIcon className="h-7 w-7 text-black bg-white px-1 rounded-sm" />
          <p className="font-semibold">Create Playlist</p>
        </button>
        <button className="flex items-center space-x-3 hover:bg-gray-900 py-1 px-2">
          <HeartIcon className="h-7 w-7 text-gray-300 bg-indigo-600 px-1 rounded-sm" />
          <p className="font-semibold">Your episodes</p>
        </button>
        <button
          onClick={() => signOut()}
          className="px-4 py-1 text-white bg-green-600 rounded-full"
        >
          Logout
        </button>

        <hr className="border-b-[0.1px] border-gray-900" />
      </div>
      {/* PLALISTS */}
      <p>Playlist</p>
    </div>
  );
};

export default Sidebar;
