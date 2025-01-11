'use client';
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Chart from "../components/Chart";
import { FaComment, FaClipboardCheck, FaWifi } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-blue-100 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-700">ExcuseMe</h1>
          <nav className="space-x-6 text-gray-600">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">Support</a>
            <a href="#" className="hover:text-black">My Account</a>
          </nav>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="New Messages" value="85" responseRate={75} icon={<FaComment />} />
          <Card title="New Leads" value="21" responseRate={62} icon={<FaClipboardCheck />} />
          <Card title="Achievements" value="95" responseRate={85} icon={<FaWifi />} />
        </div>

        {/* Chart Section */}
        <Chart />
      </div>
    </div>
  );
}
