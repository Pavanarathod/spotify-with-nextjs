import MusicProfile from "./MusicProfile";
import Sidebar from "./Sidebar";

const Application = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <MusicProfile />
      </main>
    </div>
  );
};

export default Application;
