export class OASDocument {
  constructor(obj) {
    if (obj.openapi !== '3.0.0')
      throw new Error('unsupported OpenAPI version.');
    this.object = obj;

    this.info = obj.info;
    this.server = obj.servers;
    this.paths = new Paths(obj.paths);
    this.components = new Components(obj.components);
  }

  /** Get a list of paths */
  paths() {
    return this.paths;
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
        [pathname]: new Path(methods),
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
