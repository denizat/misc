import { WebSocket } from "ws";

export interface ParsedMessage {
    handler: string,
    type: string,
    data: any
}

export const sendMessage = (socket: WebSocket, type: string, handler: string, data: any) => {
    socket.send(JSON.stringify({
        handler: handler,
        type: type,
        data: data
    }))


}
