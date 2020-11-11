const fs = require('fs/promises');
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';
import { normalize, schema } from 'normalizr';
import { denormalize } from 'normalizr';

function tagObjectsWithID(obj) {
  const getChildValues = (parent) =>
    // NOTE: this does not support nested arrays, but does support an array of objects with properties of type array
    Object.values(parent)
      .filter((e) => typeof e === 'object')
      .reduce(
        (objects, value) =>
          Array.isArray(value)
            ? [
                ...objects,
                value.filter((e) => !Array.isArray(e) && typeof e === 'object'),
              ]
            : [...objects, value],
        [],
      );

  obj.__id = uuidv4();
  const children = getChildValues(obj);
  while (children.length) {
    const child = children.pop();
    child.__id = uuidv4();
    children.push(...getChildValues(child));
  }
}

(async () => {
  const contents = JSON.parse(
    await fs.readFile(`${__dirname}/data/petstore.json`, 'utf-8'),
  );

  tagObjectsWithID(contents);

  const schemaSchema = new schema.Entity(
    'schemas',
    {},
    {
      idAttribute: (value) => value.__id,
    },
  );

  const componentsSchema = {
    schemas: new schema.Values(schemaSchema),
  };

  const serverSchema = new schema.Entity(
    'servers',
    {},
    {
      idAttribute: (value) => value.__id,
    },
  );

  const operationSchema = new schema.Entity(
    'operations',
    {},
    {
      idAttribute: (value) => value.operationId || uuidv4(),
    },
  );

  // Describes the operations available on a single path.
  const pathItemSchema = new schema.Entity(
    'paths',
    {
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
    },
    {
      idAttribute: (value) => value.__id,
    },
  );

  const document = new schema.Object({
    servers: [serverSchema],
    paths: new schema.Values(pathItemSchema),
    components: componentsSchema,
  });

  const normalized = normalize(contents, document);
  const denormalized = denormalize(
    normalized.result,
    document,
    normalized.entities,
  );

  console.log(JSON.stringify(normalized, null, ' '));
})();
