import { idsmap, handlers, connections, ParsedMessage, frontendSend, addHandler } from "./lib"
import { WebSocket, WebSocketServer } from "ws"
import { v4 } from "uuid"
import { chessHandler, ChessMessage } from "./chessHandler"
const uuid = v4

addHandler(chessHandler)

const server = new WebSocketServer({ port: 8010 })

server.on('connection', socket => {
    console.log(idsmap);

    let thisUuid = uuid();
    connections.set(thisUuid, socket)

    socket.on('message', (message) => {
        let pm: ParsedMessage<any, any> = JSON.parse(message.toString())
        handlers.get(pm.handler).onMessage(pm, thisUuid)
    })

    handlers.forEach(handler => {
        handler.onOpen?.(thisUuid)
    })

    socket.on('close', () => {
        handlers.forEach(handler => {
            handler.onClose?.(thisUuid)
        })
    })


})

const newConnection = () => {
    let ws = new WebSocket("ws://localhost:8010")
    ws.on('open', (message) => {
        let outMessage: ChessMessage = {
            handler: 'chessHandler',
            action: 'join-game',
            data: 'hello'

        }
        frontendSend(ws, outMessage)

    })
    ws.on('message', (message) => {
        let pm: ParsedMessage<any, any> = JSON.parse(message.toString())
        console.log(pm);
        if (pm.handler == 'chessHandler') {
            pm = (pm as ChessMessage)
            console.log(pm);

            console.log(idsmap);

        }
    })
}

newConnection()
newConnection()