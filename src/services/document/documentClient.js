export class OASDocumentClient {
  constructor() {
    this.ws = undefined;
    this.url = 'ws://localhost:8080/api';
    this.pendingMessages = [];
  }

  /** Initialize the service */
  async init() {
    this.ws = new WebSocket(this.url);
    this.ws.onmessage = (event) => {
      console.log(event);
      const {
        // id,
        error,
        payload,
      } = JSON.parse(event.data);
      if (error !== undefined) {
        this.pendingMessages.pop().reject(error);
      }

      return this.pendingMessages.pop().resolve(payload);
    };
    return new Promise((resolve, reject) => {
      this.ws.onerror = reject;
      this.ws.onopen = resolve;
    });
  }

  async getPaths() {
    const response = await this._send('getPaths');
    return JSON.parse(response);
  }

  async _send(operation, ...args) {
    const id = Date.now();
    const message = JSON.stringify({
      id,
      payload: [operation, ...args],
    });
    return new Promise((resolve, reject) => {
      this.pendingMessages.push({ id, resolve, reject });
      this.ws.send(message);
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
