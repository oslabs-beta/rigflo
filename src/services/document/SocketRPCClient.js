export class SocketRPCClient {
  constructor(url) {
    this.ws = new WebSocket(url);
    this.pendingMessages = [];
    this.ws.onmessage = this.onMessage.bind(this);

    this.isReady = new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });
  }

  onMessage(event) {
    console.log(event);

    const { payload, error } = this.unpackMessage(event.data);
    const { resolve, reject } = this.pendingMessages.pop();

    if (!resolve || !reject)
      throw new Error('received message has no request counterpart');

    // Check for a error
    if (error) reject(error);

    resolve(payload);
  }

  async _call(method, ...args) {
    const message = this.packMessage([method, ...args]);
    return new Promise((resolve, reject) => {
      this.pendingMessages.push({ resolve, reject });
      console.log('Sending message: ', message);
      this.ws.send(message);
    });
  }

  packMessage(data) {
    return JSON.stringify({
      payload: data,
    });
  }

  unpackMessage(data) {
    return JSON.parse(data);
  }
}
