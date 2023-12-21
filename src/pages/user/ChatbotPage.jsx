// import Chat from "../../components/Chat";
import ChatBot from "../../components/ChatBot";
import SideBar from "../../components/SideBar";
// import { IoMdSend } from "react-icons/io";

function ChatbotPage() {
  return (
    <div className="flex bg-fondo">
      <SideBar />
      <div className="w-full h-screen p-4">
        <div className="w-full h-full grid grid-cols-1 place-content-between p-2 rounded-lg font-poppins bg-white space-y-3">
          <h1 className="text-center font-poppins font-bold text-4xl">
            ChatBot
          </h1>
          <ChatBot />
          {/* <Chat />
          <div className="flex py-2">
            <input
              className="w-full h-[50px] bg-neutral-200 rounded-lg pl-6 ml-2"
              type="text"
              placeholder="Mensaje para ChatBot"
            />
            <IoMdSend onClick={{}} className="fill-logo-fondo" size={50} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ChatbotPage;
