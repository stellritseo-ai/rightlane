import { createServer } from "http";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3001;

const httpServer = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("JRM Chat Relay Server is running.");
});

const io = new Server(httpServer, {
  cors: {
    origin: "*", // Allow developer environments
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log(`[Socket] Connection established: ${socket.id}`);

  // Join a specific room based on the ChatSession ID
  socket.on("join-room", (sessionId) => {
    socket.join(`room:${sessionId}`);
    console.log(`[Socket] Client ${socket.id} joined room: room:${sessionId}`);
  });

  // Relay message to everyone in the room (client and admin)
  socket.on("new-message", ({ sessionId, message }) => {
    console.log(`[Socket] New message in room:${sessionId} from ${message.sender}`);
    socket.to(`room:${sessionId}`).emit("receive-message", message);
  });

  socket.on("disconnect", () => {
    console.log(`[Socket] Connection disconnected: ${socket.id}`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`[Relay] Server listening on port ${PORT}`);
});
