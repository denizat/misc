import { WebSocket, MessageEvent } from "ws";
import { connectionData, addConnection, deleteConnection } from "./connections"
import { Handler } from "./handler";
import { sendMessage, ParsedMessage } from './message'

// When the server gets a connection it makes a new socket.
// We put that socket into a dictionary with a UUID, 
// we do this instead of a normal array so that we can do cool things with unique
// users in the future

// when the socket gets a message it checks for the type of the message
// the type of the message should be uniform from the frontend and the back-
// end since we are just comparing strings.

// if the message type is "updateBoard" this means that the client has a new
// board state and wants to share it with everyone else
// so we take that board state and we send it to all of the other sockets

let board = "";
// we do this so we do not mistype the string. 
// If this is unnecessary we can just do a simple search and replace
const chessHandlerString = 'chessHandler'

const sendBoard = (socket: WebSocket) => {
    sendMessage(socket, "updateBoard", chessHandlerString, board)
}

export const chessHandler: Handler = {
    initialConnection: (thisUuid: string) => {
        sendBoard(connectionData.connections[thisUuid])
    },
    onMessage: (message: ParsedMessage, thisUuid: string) => {
        switch (message.type) {
            case 'updateBoard':
                board = (message.data as string)
                for (let u in connectionData.connections) {
                    sendBoard(connectionData.connections[u])
                }
                break
            default:
                // throw an error here
                break;
        }
    },
    onClose: () => { }
}
