import { WebSocket } from "ws";
import { chessHandler } from "./chessHandler"
import { addConnection, deleteConnection, updateConnectionTotal } from "./connections"
import { ParsedMessage } from "./message";
import { Dictionary } from "./dictionary";
import { Handler } from "./handler"

const ws = WebSocket
const server = new ws.WebSocketServer({ port: 8010 });

const handlers: Dictionary<Handler> = {
    chessHandler: chessHandler,
}

server.on('connection', socket => {
    let thisUuid = addConnection(socket)
    updateConnectionTotal()
    chessHandler.initialConnection(thisUuid)
    socket.onmessage = (message) => {
        let parsedMessage: ParsedMessage = JSON.parse(message.data.toString())
        handlers[parsedMessage.handler].onMessage(parsedMessage, thisUuid)
    }
    socket.onclose = () => {
        deleteConnection(thisUuid)
        updateConnectionTotal()
    }

});