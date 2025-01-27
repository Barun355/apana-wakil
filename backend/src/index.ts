require("dotenv").config();
import WebSocket, {WebSocketServer} from "ws"

import { app } from "./app";

const PORT = process.env.BACKEND_PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export const wss = new WebSocketServer({server})

