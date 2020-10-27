const WebSocket = require('ws');

/** Extend this class to provide RPC capabilities on a class via websockets */
module.exports = class SocketRPC {
  constructor(port) {
    const server = new WebSocket.Server({ port });
    server.on('connection', this.onConnection.bind(this));
    server.on('error', this.onError.bind(this));
    server.on('listening', this.onListening.bind(this));

    this.port = port;
    this.server = server;
  }

  onConnection(socket) {
    this.log('✨ client connected');
    socket.on('open', this.onSocketOpen.bind(this));
    socket.on('close', this.onSocketClose.bind(this));
    socket.on('error', this.onSocketError.bind(this));
    socket.on('message', this.onSocketMessage.bind(this, socket));
  }

  onError(error) {
    this.log(`⛔ ${error}`);
  }

  onListening() {
    this.log(`👂 listening on port ${this.port}`);
  }

  /** @param {WebSocket.Event} event */
  onSocketOpen() {}

  /** @param {WebSocket.Event} event */
  onSocketClose() {
    this.log('👋 client disconnected');
  }

  /** @param {Error} event */
  onSocketError(error) {
    this.onError(error);
  }

  /** @param {WebSocket} socket
   * @param {WebSocket.Data} data */
  onSocketMessage(socket, data) {
    console.log('🔔 recieved message:', data);

    // Unpack the message
    let method, args;
    try {
      [method, args] = this.unpackMessage(data);
    } catch (err) {
      this.log(`⛔ couldn't unpack message: ${err}`);
      socket.send(this.packError(err));
    }

    // Call the method with the provided arguments and send the return value
    try {
      // Check that the method exists
      if (typeof this[method] !== 'function')
        throw new Error(`⛔️ method '${method}' is undefined`);

      const result = this[method](args);
      socket.send(this.packData(result));
    } catch (err) {
      this.log(err);
      socket.send(this.packError(err));
    }
  }

  packError(err) {
    return JSON.stringify({ error: err });
  }

  packData(data) {
    return JSON.stringify({ payload: data });
  }

  unpackMessage(data) {
    const { payload } = JSON.parse(data);
    return payload;
  }

  log(...message) {
    console.log(`[🔌 (RPC) ${this.constructor.name}]`, ...message);
  }
};
