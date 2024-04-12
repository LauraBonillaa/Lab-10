function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();
    

    if (message) {
        const messagesContainer = document.getElementById("messages-container");
        const newMessage = document.createElement("div");
        newMessage.classList.add("message");
        newMessage.textContent = message;
        newMessage.classList.add("user-blue");
        console.log("prueba")

        console.log(messagesContainer)
        console.log(newMessage)

        messagesContainer.appendChild(newMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        messageInput.value = "";
       
    }
}
function sendMessage2(){
    const messageInput2 = document.getElementById("messageInput2");
    const message2 = messageInput2.value.trim();
    
    if (message2) {
        const messagesContainer = document.getElementById("messages-container");
        const newMessage = document.createElement("div");
        newMessage.classList.add("message");
        newMessage.textContent = message2;
        newMessage.classList.add("user-red");
        console.log("prueba")

        console.log(messagesContainer)
        console.log(newMessage)

        messagesContainer.appendChild(newMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        messageInput2.value = "";
    }
}
