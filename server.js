// server.js
const WebSocket = require('ws');

// 创建 WebSocket 服务器实例
const wss = new WebSocket.Server({ port: 8081 });

// 当有客户端连接时触发
wss.on('connection', (ws) => {
  console.log('New client connected!');

  // 接收客户端发送的消息
  ws.on('message', (msg) => {
    console.log(`Received message => ${msg}`);
    
    // 可以在这里处理收到的消息并决定如何响应

    // 向客户端发送消息
    ws.send(`websocket回复你->：返回${msg}的消息`);
  });

  // 客户端关闭连接时触发
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is listening on port 8081');