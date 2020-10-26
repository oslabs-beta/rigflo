const WebSocket = require('ws');

/** Extend this class to provide RPC capabilities on a class via websockets */
module.exports = class SocketRPC {
  constructor(port) {
    const server = new WebSocket.Server({ port });
    server.on('connection', this.onConnection.bind(this));
    server.on('error', this.onError.bind(this));
    server.on('listening', this.onListening.bind(this));
  }

  onConnection(socket) {
    this.log('✨ client connected');
    socket
      .on('open', this.onSocketOpen.bind(this))
      .on('close', this.onSocketClose.bind(this))
      .on('error', this.onSocketError.bind(this))
      .on('message', this.onSocketMessage.bind(this));
  }

  onError(error) {
    this.log(`⛔ ${error}`);
  }

  onListening() {
    this.log(`👂 listening on port ${this.port}`);
  }

  onSocketOpen(event) {}

  onSocketClose(event) {}

  /** @param {WebSocket.ErrorEvent} event */
  onSocketError(event) {}

  onSocketMessage() {}

  log(...message) {
    console.log(`[🔌 (RPC) ${this.constructor.name}]`, ...message);
  }
};
