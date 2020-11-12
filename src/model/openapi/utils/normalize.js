import { v4 as uuidv4 } from 'uuid';
import {
  normalize as _normalize,
  denormalize as _denormalize,
  schema,
} from 'normalizr';

// Constants
const idKey = '__id';
const identFn = (e) => e;
const documentSchema = buildSchema();

/** Normalizes a JSON representation of an OpenAPI document.
 * @param {object} document
 * @returns {object}
 */
export function normalize(document) {
  attachEntityIDs(document);
  const normed = _normalize(document, documentSchema);
  return fixMissingEntityKeys(normed);
}

/** Denormalizes an already normalized JSON representation of an OpenAPI document
 *  back to its original state.
 * @param {object} document
 * @returns {object}
 */
export function denormalize({ result, entities }) {
  const denormed = _denormalize(result, documentSchema, entities);
  return removeEntityIDs(denormed);
}

/** Adds keys for non-existent entities in the 'entities' object from the normalized result
 * for consistency.
 */
function fixMissingEntityKeys(document) {
  ['servers', 'paths', 'operations', 'schemas'].forEach((key) => {
    if (!document.entities[key]) document.entities[key] = {};
  });
  return document;
}

/**
 * Attaches UUID keys to the parts of the OpenAPI document that need to be
 * uniquely identified.
 */
function attachEntityIDs(document) {
  return modifyDocumentIDs(document, {
    array(array) {
      array.forEach(
        (element) => isPOJO(element) && (element[idKey] = uuidv4()),
      );
    },
    object(object) {
      Object.values(object).forEach(
        (value) => isPOJO(value) && (value[idKey] = uuidv4()),
      );
    },
  });
}

/**
 * Removes any previoulsy added UUID keys to the OpenAPI document.
 */
function removeEntityIDs(document) {
  return modifyDocumentIDs(document, {
    array(array) {
      array.forEach((element) => isPOJO(element) && delete element[idKey]);
    },
    object(object) {
      Object.values(object).forEach(
        (value) => isPOJO(value) && delete value[idKey],
      );
    },
  });
}

function modifyDocumentIDs(
  documentObject,
  fns = { array: identFn, object: identFn },
) {
  const { servers, paths, components } = documentObject;

  // Servers
  fns.array(servers);

  // Paths & Operations
  fns.object(paths);
  Object.values(paths).forEach((path) => fns.object(path));

  // Components & Schemas
  fns.object(components);
  fns.object(components.schemas);

  return documentObject;
}

function isPOJO(value) {
  return !Array.isArray(value) && typeof value === 'object';
}

/** Builds the document schema for normalizr */
function buildSchema() {
  const Entity = (key, _schema = {}) =>
    new schema.Entity(key, _schema, {
      idAttribute: (value) => value[idKey],
    });

  // Servers
  const serverSchema = Entity('servers');

  // Paths
  const operationSchema = Entity('operations');
  const pathSchema = Entity('paths', {
    get: operationSchema,
    put: operationSchema,
    post: operationSchema,
    delete: operationSchema,
    options: operationSchema,
    head: operationSchema,
    path: operationSchema,
    trace: operationSchema,
    servers: [serverSchema],
    // parameters: operationSchema,
  });

  // Components
  const schemaSchema = Entity('schemas');
  const componentsSchema = {
    schemas: new schema.Values(schemaSchema),
  };

  // OpenApi Document
  return {
    servers: [serverSchema],
    paths: new schema.Values(pathSchema),
    components: componentsSchema,
  };
}
