import { connections, Handler, ParsedMessage, sendAll, sendMessage } from "./lib";

type UserAction =
    | 'sign-up'
    | 'log-in'
    | 'delete-account'
interface UserData {
    username: string
    // we hash the password client side
    hashedPassword: string
}

let users = new Map<string, UserData>()

export const userHandler: Handler = {
    handlerName: 'userHandler',
    onMessage: (m: ParsedMessage<UserAction, UserData>, id) => {
        switch (m.action) {
            case 'log-in': {
                if (users.get(m.data.username)?.hashedPassword === m.data.hashedPassword) {
                    let socket = connections.get(id)
                    connections.set(m.data.username, socket)
                    connections.delete(id)
                } else {
                    sendMessage(id, {
                        handler: 'userHandler',
                        action: 'failed-auth',
                        data: 'invalid username or password'
                    })
                }
            }
            // case 'sign-up': {
            //     if (m.data.username)
            // }
        }

    }
}
