import { FaEnvelope, FaClipboard, FaWifi, FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-purple-600 text-white w-16 h-fit mt-10 flex flex-col items-center py-8 rounded-full">
      <FaEnvelope className="text-2xl my-3 cursor-pointer hover:scale-125 hover:text-purple-200 transition-all duration-200" />
      <FaClipboard className="text-2xl my-3 cursor-pointer hover:scale-125 hover:text-purple-200 transition-all duration-200" />
      <FaWifi className="text-2xl my-3 cursor-pointer hover:scale-125 hover:text-purple-200 transition-all duration-200" />
      <FaQuestionCircle className="text-2xl my-3 cursor-pointer hover:scale-125 hover:text-purple-200 transition-all duration-200" />
    </div>
  );
};

export default Sidebar;
