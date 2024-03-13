import { createServer } from "http";
import { Server, Socket } from "socket.io";

import { getApp } from "@/server";

const server = createServer(getApp);

const io = new Server(server);

io.on("connection", (socket: Socket) => {
  console.log("a user connected");

  socket.on("chat message", (msg: string) => {
    console.log(`recived message client :${msg} `);
  });

  socket.emit("chat message", "Hello from server");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
