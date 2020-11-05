// export class DocumentDescendant {
//   constructor(parent) {
//     this.parent = parent;
//   }

//   /** Returns the OpenAPI document at the top of the document tree
//    * @returns {DocumentModel}
//    */
//   get root() {
//     let _root;
//     while (_root.parent) _root = _root.parent;
//     return _root;
//   }

//   toJSON() {
//     throw new Error('must implement toJSON()');
//   }
// }
