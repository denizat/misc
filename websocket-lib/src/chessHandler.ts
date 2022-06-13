import { Handler, idsmap, ParsedMessage, sendAll, sendMessage } from "./lib";

type Board = string[]
type Move = string

interface Game {
    currentBoard: Board
    history: Move[]
    currentTurn: 'black' | 'white'
    players: Array<string>
}

type ChessAction =
    | 'start-game'
    | 'join-game'
    | 'leave-game'
    | 'make-move'
    | 'undo-move'
    | 'update-board'

export type ChessMessage = ParsedMessage<ChessAction, any>

let games = new Map<string, Game>()

const defaultBoard = [
    'brbnbbbqbkbbbnbr',
    'wrwnwbwqwkwbwnbr',
]

idsmap.push(200)

let handlerName = 'chessHandler'

export const chessHandler: Handler = {
    handlerName: handlerName,
    onMessage: (m: ChessMessage, id) => {
        switch (m.action) {
            case 'start-game': {
                games.set(id, {
                    currentBoard: defaultBoard,
                    currentTurn: 'white',
                    history: [],
                    players: [id, '']
                })
            }
            case 'leave-game': {
            }
            case 'join-game': {
                idsmap.push(200)
                console.log(m);
                console.log(idsmap);
                sendMessage(id, {
                    handler: handlerName,
                    action: 'hello',
                    data: 'null and void'
                })


            }

        }
    }
}
