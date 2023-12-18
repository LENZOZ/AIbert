import ChatMessage from "./ChatMessage";

function Chat() {
  return (
    <div className="h-[82%] w-full overflow-auto">
      <div className="overflow-hidden">
        <div className="overflow-scroll ">
          <ChatMessage message="Hola como va todo?" user={true} />
          <ChatMessage message="Hola! todo bien!" user={false} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
