export class OASDocumentClient {
  constructor() {
    this.ws = undefined;
    this.url = 'localhost:8080';
    this.pendingMessages = {};
  }

  /** Connect the client */
  init() {
    this.ws = new WebSocket(this.url);
    this.ws.onmessage = ({ data }) => {
      if (data.error) return this.pendingMessages[data.id].reject(data.error);
      return this.pendingMessages[data.id].resolve(data.payload);
    };
  }

  async paths() {
    const response = await this._send('paths');
    return JSON.parse(response);
  }

  async _send(operation, ...args) {
    const id = Date.now();
    const message = JSON.stringify({
      id,
      payload: [operation, ...args],
    });
    this.ws.send(message);
    return new Promise((resolve, reject) => {
      this.pendingMessages[id] = { resolve, reject };
    });
  }
}

/*

import { OASDocumentClient } from './client';

const document = new OASDocumentClient();

const path = await document.paths();


{
  "get": Operation
  "post":
  "delete":
}

*/
