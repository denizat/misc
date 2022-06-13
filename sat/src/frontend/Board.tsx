import React, { ChangeEvent, ChangeEventHandler } from "react";
import { ParsedMessage } from "../backend/message";
import "./index.css"
import { pieces } from "./pieces";



let NODE_ENV = process.env.NODE_ENV

const initBoard = (): string[][] => {
    let board: string[][] = []
    for (let i = 0; i < 8; i++) {
        board.push([])
        for (let j = 0; j < 8; j++) {
            board[i].push('')
        }
    }
    board[0] = ['rd', 'nd', 'bd', 'qd', 'kd', 'bd', 'nd', 'rd']
    board[1] = ['pd', 'pd', 'pd', 'pd', 'pd', 'pd', 'pd', 'pd']
    board[6] = ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl']
    board[7] = ['rl', 'nl', 'bl', 'ql', 'kl', 'bl', 'nl', 'rl']
    return board
}





interface BoardProps {
    message: ParsedMessage | undefined, socket: WebSocket
}
interface BoardState {
    board: string[][],
    p: undefined | number[],
    connectionTotal: number | undefined
    windowWidth: number
    windowHeight: number
    flipped: boolean
}

export class Board extends React.Component<BoardProps, BoardState> {
    constructor(props) {
        super(props)
        let board = this.props.message?.data
        if (board === undefined || board == '') {
            board = initBoard();
        }
        this.state = {
            board: board,
            p: undefined,
            connectionTotal: undefined,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            flipped: false
        }
        this.handleMove = this.handleMove.bind(this)
        this.updateBoard = this.updateBoard.bind(this)
        this.sendMessage = this.sendMessage.bind(this)

        this.handleResize = this.handleResize.bind(this)
        window.addEventListener('resize', this.handleResize)
    }

    handleResize() {
        this.setState({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        })
    }

    sendMessage(handler, type, data) {
        let message: ParsedMessage = {
            handler: handler,
            type: type,
            data: data
        }
        this.props.socket.send(JSON.stringify(message))
    }
    // update the board state and send a socket message
    updateBoard(_board) {
        this.sendMessage('chessHandler', 'updateBoard', _board)
        // this.setState({
        //     board: _board
        // })
    }
    handleMove(b, x, y) {
        let p = this.state.p
        if (p == undefined) {
            if (b[y][x] == '') {
                return
            }
            this.setState({
                p: [x, y]
            })
            return
        }
        // we need to do this because p == [x,y] does not work for some reason
        if ((p[0] == x && p[1] == y) || b[p[1]][p[0]] == '') {
            this.setState({
                p: undefined
            })
            return
        }


        let r = b[y]
        r[x] = b[p[1]][p[0]]
        b[p[1]][p[0]] = ''

        b[y] = r
        this.updateBoard(b)
        this.setState({
            p: undefined
        })
    }

    render() {
        let width = window.innerWidth
        let height = window.innerHeight
        let widthIsGreater = width > height
        let sideLength = (widthIsGreater ? height : width) / 8
        const isSelected = (x, y) => {
            let p = this.state.p
            if (p === undefined) {
                return false
            }
            return p[0] == x && p[1] == y
        }
        let board = this.props.message?.data
        if (board === undefined || board == '') {
            board = initBoard();
        }
        let flp = this.state.flipped
        const flip = (n, v) => {
            return flp ? v.length - 1 - n : n
        }
        return (
            <div className={`flex ${widthIsGreater ? "flex-row" : "flex-col"}`}>
                {/* <div className={`grid ${widthIsGreater ? "grid-cols-2" : "grid-rows-2"}`}> */}
                <div>
                    {
                        (flp ? board.slice().reverse() : board).map((v, i) => {
                            return (<div className="flex-row flex" key={flip(i, board)}>
                                {
                                    (flp ? v.slice().reverse() : v).map((e, j) => {
                                        return (
                                            <div
                                                onClick={() => this.handleMove(board, flip(j, v), flip(i, board))}
                                                style={{ width: sideLength, height: sideLength }}
                                                className={`hover:bg-yellow-400 ${isSelected(flip(j, v), flip(i, board)) ? "bg-white-0" : (i % 2 == j % 2 ? "bg-yellow-200" : 'bg-yellow-900')}`} key={flip(j, v)}>
                                                {e in pieces
                                                    ? <img
                                                        style={{ width: sideLength, height: sideLength }}
                                                        className="bg-cover" src={pieces[e]} />
                                                    : null}
                                            </div>)
                                    })
                                }
                            </div>)
                        })
                    }</div>
                <div style={{ width: sideLength }}>
                    <button onClick={() => this.updateBoard(initBoard())}>Reset</button>
                    <button onClick={
                        () => this.setState({ flipped: !this.state.flipped })
                    }>Flip Board</button>
                    {/* <div>Total Connections: {this.state.connectionTotal?.toString()}</div> */}
                </div>
            </div >
        )
    }
}