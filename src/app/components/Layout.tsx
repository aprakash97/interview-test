import Image from "next/image";
import { BellDot, CircleUser, Plus, SlidersHorizontal } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar as a div */}
      <div className="w-64 flex-shrink-0 flex flex-col">
        <div className="h-16 p-4 font-bold text-lg border-b border-gray-400">
          <Image src="/logo.png" alt="Logo" width={90} height={120} />
        </div>
        <div className="flex-1 p-4 space-y-2 border-r border-gray-400">
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Home
          </a>
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">
            Settings
          </a>
        </div>
      </div>

      {/* Main content wrapper */}
      <div className="flex flex-col flex-1">
        {/* Header as div */}
        <div className="h-16 bg-white border-b border-gray-400 px-6 flex items-center justify-end-safe">
          <div className="h-14 flex items-center space-x-4">
            <button className="flex justify-between bg-[#3772FF] text-white py-2.5 text-xs px-5 rounded-lg items-center">
              <span className="mr-3">Create New Button</span>
              <Plus size={20}/>
            </button>
            <input
              type="text"
              className="border border-gray-400 rounded px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search Tasks"
              name="Search Tasks"
            />
            <SlidersHorizontal />
            <BellDot color="red" />
             <CircleUser size={32} />
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 mt-10 overflow-auto bg-gray-50">{children}</div>
      </div>
    </div>
  );
}
