const SocketRPC = require('./SocketRPC');

class OASDocument extends SocketRPC {
  constructor(obj) {
    super(9999);
    if (obj.openapi !== '3.0.0')
      throw new Error('unsupported OpenAPI version.');
    this.object = obj;

    this.info = obj.info;
    this.server = obj.servers;
    this.paths = new Paths(this, obj.paths);
    this.components = new Components(this, obj.components);
  }

  toYAML(elements) {
    const isEdge = (el) => el.source || el.target;

    const edges = [];
    const nodes = [];

    // Sort the nodes and edges
    elements.forEach((el) => (isEdge(el) ? edges : nodes).push(el));

    // Connect the nodes to get this:
    /* 
      {
        paths: {
          'pathName': {
            method: 'GET',
            description: 'such a cool path',
            paths: {
              'subPathName': {
                method: 'GET',
                description: 'such a cool path',
              }
            }
          }
        }
      }
    */

    // Format the path nodes
    nodes.forEach(({ id, type, data: { path, method, description } }, i) => {
      nodes[i] = { id, type, path, method, description, paths: {} };
    });

    console.log('NODES', nodes);
    console.log('EDGES', edges);

    // Connect all the edges
    edges.forEach(({ source, target }) => {
      // Find the source and target nodes
      const sourceNode = nodes.find((n) => n.id === source);
      const targetNode = nodes.find((n) => n.id === target);

      // Note: this only works if every target has exactly one source
      sourceNode.paths[targetNode.path] = targetNode;
    });

    const root = nodes.find((n) => n.type === 'input');
    return root;
  }

  // TODO
  // /** Loads a document from the filesystem */
  // load() {

  // }

  /** Get a list of paths */
  getPaths() {
    // TODO: fix this
    return this.object.paths;
  }

  /** Get a list of schemas  */
  schemas() {
    return this.components.schemas;
  }

  /** Resolve a reference
   * @param {string} refString
   */
  ref(refString) {
    // TODO: validate the refString and make this actually useful
    const path = refString.slice(1).split('/');
    return path.reduce((obj, p) => obj[p], this.object);
  }
}

/** Children of the root document should extend this class to
 *  if they need access to the root document.
 */
class OASDocumentProxy {
  constructor(document, object) {
    /** The root OpenAPI document */
    this.root = document;
    /** The JSON data backing this object */
    this.object = object;
  }
}

class Paths extends OASDocumentProxy {
  constructor(document, pathsObj) {
    super(document, pathsObj);
    this.paths = Object.entries(pathsObj).reduce(
      (obj, [pathname, methods]) => ({
        [pathname]: new Path(this.root, methods),
        ...obj,
      }),
      {},
    );
  }

  get(pathname) {
    // TODO: throw error when the pathname doesn't exist
    return this.paths[pathname];
  }
}

class Path extends OASDocumentProxy {
  constructor(document, pathObj) {
    super(document, pathObj);
    this.methods = Object.keys(this.object);
  }
}

class Components extends OASDocumentProxy {
  constructor(document, componentsObj) {
    super(document, componentsObj);
    this.schemas = new Schemas(componentsObj.schemas);
  }
}

class Schemas extends OASDocumentProxy {
  constructor(document, schemasObject) {
    super(document, schemasObject);
    this.object = schemasObject;
  }
}

module.exports = {
  OASDocument,
};
