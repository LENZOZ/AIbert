import ChatMessage from "./ChatMessage";

function Chat() {
  return (
    <div className="h-full w-full overflow-auto">
      <div className="overflow-hidden">
        <div className="overflow-scroll mx-2 ">
          <ChatMessage message="Hola como va todo?" user={true} />
          <ChatMessage message="Hola! todo bien!" user={false} />
          <ChatMessage message="Hola como va todo?" user={true} />
          <ChatMessage message="Hola! todo bien!" user={false} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
