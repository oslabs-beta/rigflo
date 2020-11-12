import objects from '../utils/objects';
import { normalize } from '../utils/normalize';

/**
 * @file
 * Initial normalized state representing an blank OpenAPI document
 */

const document = objects.document({
  openapi: '3.0.0',
  info: objects.info({
    title: 'My New API',
    version: '0.0.1',
  }),
  servers: [objects.server({ url: 'mynewapi.io/v1/' })],
  paths: {},
  components: objects.components(),
});

export default normalize(document);
