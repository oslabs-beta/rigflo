import { SocketRPCClient } from './SocketRPCClient';

export class OASDocumentClient extends SocketRPCClient {
  constructor() {
    super('ws://localhost:8080/api');
  }

  async getPaths() {
    return this._call('getPaths');
  }

  async toYAML(elements) {
    return this._call('toYAML', elements);
  }
}

// class OASDocument {
//   constructor() {
//     this.object = {};
//   }

//   setInfo(obj) {
//     this.object.info = obj;
//   }

//   async loadFile() {
//     // Connect to backend and get the file
//     this.object = JSON.parse(fileContents);
//   }

//   getElements() {}

//   getSchemas() {

//   }

//   getPaths() {

//   }
// }

// class Path {
//   constructor() {

//   }

//   methods() {

//   }

//   /** Returns the parameters of the path */
//   params() {

//   }
// }
