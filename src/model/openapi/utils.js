import { v4 as uuidv4 } from 'uuid';

// TODO: method for adding __id keys according to some "schema"
// Example of what I have in mind:
/*
attachIdentifiers(obj, {
  servers: [true],
  paths: {
    _key: true // attaches an id to object values on the path keys
  },
  components: {
    schemas: {
      _key: true
    }
  }
});
*/

// export function attachEntityIdentifiers(obj, schema) {
//   Object.entries(schema).forEach(([key, value]) => {
//   });
// }

// TODO: method for pruning the __id keys according to some "schema"

/*
pruneIdentifiers(obj, {
  servers: [true],
  paths: {
    _key: true // attaches an id to object values on the path keys
  },
  components: {
    schemas: {
      _key: true
    }
  }
});
*/
