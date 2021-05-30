const socket = io("http://localhost:8000")

const form = document.getElementById("send-container")
const messageInput = document.getElementById("messageInp")
const messageContainer = document.querySelector(".container")

const append1 = (message,position)=>{
    const messageElement = document.createElement("div");
    messageElement.innerHTML = message;
    messageElement.classList.add("message");
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

const name1 = prompt("Enter your name to join")
socket.emit("new-user-joined",name1);

socket.on("user-joined",name1=>{
    append1(`${name1} joined the chat`,'right');
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append1(`You: ${message}`,'right');
    socket.emit("send",message);
    messageInput.value = "";
})

socket.on("receive",data=>{
    append1(`${data.name1} : ${data.message} `,'left');
});


socket.on("left",name=>{
    append1(`${name} left the chat`,'left');
});