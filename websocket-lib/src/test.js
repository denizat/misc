var $6RHXb$ws = require("ws");
var $6RHXb$uuid = require("uuid");

const $6324ce8b5bc4dc81$export$455ce229eb3d2472 = new Map();
const $6324ce8b5bc4dc81$export$a4e09611e30da72e = (handler)=>{
    $6324ce8b5bc4dc81$export$455ce229eb3d2472.set(handler.handlerName, handler);
};
const $6324ce8b5bc4dc81$export$ab9f7df4498d2fd5 = new Map();
const $6324ce8b5bc4dc81$export$465cb47180de50f0 = (id, message)=>{
    $6324ce8b5bc4dc81$export$ab9f7df4498d2fd5.get(id).send(JSON.stringify(message));
};
const $6324ce8b5bc4dc81$export$f067eef904a6fc49 = (message)=>{
    // export const sendAll = (message: ParsedMessage) => {
    $6324ce8b5bc4dc81$export$ab9f7df4498d2fd5.forEach((ws)=>ws.send(JSON.stringify(message))
    );
};
const $6324ce8b5bc4dc81$export$f233ca124b542f1b = (socket, message)=>{
    socket.send(JSON.stringify(message));
};
let $6324ce8b5bc4dc81$export$78683aede43c3b07 = [];





let $020e686908a3c9a1$var$games = new Map();
const $020e686908a3c9a1$var$defaultBoard = [
    'brbnbbbqbkbbbnbr',
    'wrwnwbwqwkwbwnbr', 
];
$6324ce8b5bc4dc81$export$78683aede43c3b07.push(200);
let $020e686908a3c9a1$var$handlerName = 'chessHandler';
const $020e686908a3c9a1$export$41598c9754731cf8 = {
    handlerName: $020e686908a3c9a1$var$handlerName,
    onMessage: (m, id)=>{
        switch(m.action){
            case 'start-game':
                $020e686908a3c9a1$var$games.set(id, {
                    currentBoard: $020e686908a3c9a1$var$defaultBoard,
                    currentTurn: 'white',
                    history: [],
                    players: [
                        id,
                        ''
                    ]
                });
            case 'leave-game':
            case 'join-game':
                $6324ce8b5bc4dc81$export$78683aede43c3b07.push(200);
                console.log(m);
                console.log($6324ce8b5bc4dc81$export$78683aede43c3b07);
                $6324ce8b5bc4dc81$export$465cb47180de50f0(id, {
                    handler: $020e686908a3c9a1$var$handlerName,
                    action: 'hello',
                    data: 'null and void'
                });
        }
    }
};


const $f70fb9bb51374e81$var$uuid = $6RHXb$uuid.v4;
$6324ce8b5bc4dc81$export$a4e09611e30da72e($020e686908a3c9a1$export$41598c9754731cf8);
const $f70fb9bb51374e81$var$server = new $6RHXb$ws.WebSocketServer({
    port: 8010
});
$f70fb9bb51374e81$var$server.on('connection', (socket)=>{
    console.log($6324ce8b5bc4dc81$export$78683aede43c3b07);
    let thisUuid = $f70fb9bb51374e81$var$uuid();
    $6324ce8b5bc4dc81$export$ab9f7df4498d2fd5.set(thisUuid, socket);
    socket.on('message', (message)=>{
        let pm = JSON.parse(message.toString());
        $6324ce8b5bc4dc81$export$455ce229eb3d2472.get(pm.handler).onMessage(pm, thisUuid);
    });
    $6324ce8b5bc4dc81$export$455ce229eb3d2472.forEach((handler)=>{
        handler.onOpen?.(thisUuid);
    });
    socket.on('close', ()=>{
        $6324ce8b5bc4dc81$export$455ce229eb3d2472.forEach((handler)=>{
            handler.onClose?.(thisUuid);
        });
    });
});
const $f70fb9bb51374e81$var$newConnection = ()=>{
    let ws = new $6RHXb$ws.WebSocket("ws://localhost:8010");
    ws.on('open', (message)=>{
        let outMessage = {
            handler: 'chessHandler',
            action: 'join-game',
            data: 'hello'
        };
        $6324ce8b5bc4dc81$export$f233ca124b542f1b(ws, outMessage);
    });
    ws.on('message', (message)=>{
        let pm = JSON.parse(message.toString());
        console.log(pm);
        if (pm.handler == 'chessHandler') {
            console.log(pm);
            console.log($6324ce8b5bc4dc81$export$78683aede43c3b07);
        }
    });
};
$f70fb9bb51374e81$var$newConnection();
$f70fb9bb51374e81$var$newConnection();


//# sourceMappingURL=test.js.map
