import { useSession } from "next-auth/react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";

const colors = [
  "from-indigo-500",
  "fron-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

const MusicProfile = () => {
  const session = useSession();
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);
  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center space-x-2 bg-gray-800 cursor-pointer py-1 rounded-full px-2">
          {session?.data?.user?.image ? (
            <img
              src={session?.data?.user?.image}
              alt="somename"
              className="rounded-full h-10 w-10"
            />
          ) : (
            <UserIcon className="text-white bg-gray-600 h-9 rounded-full px-2 py-2" />
          )}
          <h2 className="text-white text-sm font-semibold">
            {session?.data?.user?.name}
          </h2>
          <ChevronDownIcon className="h-5 text-white" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      ></section>
    </div>
  );
};

export default MusicProfile;
