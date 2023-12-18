function ChatMessage({message="Este es un mensaje de prueba el cual puede ser interpretado de diversas maneras para la finalidad que se estime conveniente.", user=false}) {
  return (
    <div className={" text-white font-poppins font-normal text-lg rounded-md w-fit max-w-[50%] h-fit px-2 py-1 mb-2 " + (user ? "ms-auto bg-logo-fondo" : "bg-logo-resalte-2") }>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage