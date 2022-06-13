import { WebSocket } from "ws"
export interface ParsedMessage<TAction, TData> {
    // which handler should get it
    handler: string,
    // what the handler should do with the data
    action: TAction,
    data: TData
}



export interface Handler {
    handlerName: string
    onOpen?: (id: string) => void,
    onMessage?: (message: ParsedMessage<any, any>, id: string) => void
    onClose?: (id: string) => void
}

export const handlers = new Map<string, Handler>()
export const addHandler = (handler: Handler) => {
    handlers.set(handler.handlerName, handler)
}

export const connections = new Map<string, WebSocket>()
export const sendMessage = (id: string, message: ParsedMessage<any, any>) => {
    connections.get(id).send(JSON.stringify(message))
}

export const sendAll = (message: ParsedMessage<any, any>) => {
    // export const sendAll = (message: ParsedMessage) => {
    connections.forEach((ws) => ws.send(JSON.stringify(message)))
}

export const frontendSend = (socket: WebSocket, message: ParsedMessage<any, any>) => {
    socket.send(JSON.stringify(message))
}

export let idsmap = []