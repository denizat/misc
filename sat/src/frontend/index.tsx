import React, { ChangeEvent, ChangeEventHandler } from "react";
import ReactDOM from "react-dom";
import { SocketComponent } from "./Socket"
import "./index.css"


class BoardAndChat extends React.Component<{}, { windowHeight: number, windowWidth: number, }> {
    constructor(props) {
        super(props)
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        }
        this.handleResize = this.handleResize.bind(this)
        window.addEventListener('resize', this.handleResize)
    }
    handleResize() {
        this.setState({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        })
    }
    render() {
        return (
            <div className={`flex ${this.state.windowWidth > this.state.windowHeight ? "flex-row" : "flex-col"}`}>
                <SocketComponent />
                <span>Chat</span>
                <div>Chat</div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <>
                <BoardAndChat />
            </>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app"));