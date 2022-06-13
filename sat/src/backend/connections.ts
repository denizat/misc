import { WebSocket } from 'ws'
import { sendMessage } from './message'
import { Dictionary } from './dictionary'
import * as uuid from 'uuid'
import { Handler } from './handler'

export const connectionData:
    { connections: Dictionary<WebSocket>, totalConnections: number }
    = { connections: {}, totalConnections: 0 }

// returns the uuid of the connection
export const addConnection = (socket: WebSocket): string => {
    let u = uuid.v4()
    connectionData.connections[u] = socket
    connectionData.totalConnections++
    return u

}

export const deleteConnection = (u: string) => {
    delete connectionData.connections[u]
    connectionData.totalConnections--
}

const sendConnectionTotal = (socket: WebSocket) => {
    sendMessage(socket, "updateConnectionTotal", 'connectionHandler', connectionData.totalConnections)
}
export const updateConnectionTotal = () => {
    for (let u in connectionData.connections) {
        sendConnectionTotal(connectionData.connections[u])
    }
}

// export const connectionHandler: Handler = {
//     initialConnection: (socket:WebSocket) => {
//         addConnection(socket)
//         updateConnectionTotal()
//     }
//     onMessage: () => { },
//     onClose: updateConnectionTotal
// }