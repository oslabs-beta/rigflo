import { SocketRPCClient } from './SocketRPCClient';

export class OASDocumentClient extends SocketRPCClient {
  constructor() {
    super('ws://localhost:8080/api');
  }

  async getPaths() {
    return this._call('getPaths');
  }
}
