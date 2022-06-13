
import React, { ChangeEvent, ChangeEventHandler } from "react";
import "./index.css"
import { Board } from "./Board"
import { ParsedMessage } from "../backend/message";

interface SocketComponentState {
    chessMessage: ParsedMessage | undefined
    connectionMessage: ParsedMessage | undefined
}
export class SocketComponent extends React.Component<{}, SocketComponentState> {
    socket: WebSocket
    constructor(props) {
        super(props)
        this.socket = new WebSocket(process.env.NODE_ENV === 'production' ? "wss://telci.org/ws/" : "ws://localhost:8010")
        this.state = {
            chessMessage: undefined,
            connectionMessage: undefined
        }
    }
    componentDidMount() {
        this.socket.onmessage = (event) => {
            let message: ParsedMessage = JSON.parse(event.data)
            switch (message.handler) {
                case 'chessHandler':
                    this.setState({
                        chessMessage: message
                    })
                    break;
                case 'connectionHandler':
                    this.setState({
                        connectionMessage: message
                    })
            }
        }
    }
    render() {
        return (
            <div>
                <Board message={this.state.chessMessage} socket={this.socket} />
            </div>
        )
    }
}