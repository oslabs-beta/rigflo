const validate = require('./utils');

const RequiredString = { type: String, required: true };

export function openApiDocument(obj) {
  const message = validate.object(obj, {
    openapi: RequiredString,
    info: { type: Info, required: true },
    paths: { type: Paths, required: true },
    servers: { type: Array, items: Server },
    components: { type: Components },
    security: { type: Array, items: SecurityRequirement },
    tags: { type: Tags },
    externalDocs: { type: ExternalDocumentation },
  });
  if (message) throw new Error(message);
  return true;
}

function Info(obj) {
  return validate.object(obj, {
    title: RequiredString,
    version: RequiredString,
    description: { type: String },
    termsOfService: { type: String },
    contact: { type: Contact },
    license: { type: License },
  });
}

function Contact(obj) {
  return validate.object(obj, {
    name: { type: String },
    url: { type: String },
    email: { type: String },
  });
}

function License(obj) {
  return validate.object(obj, {
    name: RequiredString,
  });
}

function Server(obj) {
  return validate.object(obj, {
    url: RequiredString,
    description: { type: String },
    // variables:
  });
}
