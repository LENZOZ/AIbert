import SideBar from "../../components/SideBar";

function ChatbotPage() {
  return (
    <div className="flex bg-fondo">
      <SideBar />
      <div className="w-full h-screen p-2">
        <div className="w-full h-full p-2 rounded-lg font-poppins bg-white space-y-3">
          <h1>Chatbot</h1>
        </div>
      </div>
    </div>
  );
}

export default ChatbotPage;
