import io from 'socket.io-client';


const socket =  io();

socket.on('chat message', (meg :string) => {
    console.log("recived messaged")
})

socket.emit('chat message',( msg:string) => {
   console.log(msg);
})