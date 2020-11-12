/**
 * @file
 * Helper functions for creating different components of the OpenAPI document
 */

const objects = {};

objects.document = ({
  openapi = '',
  info = objects.info(),
  paths = {},
  servers = [],
  components = objects.components(),
  security = [],
  tags = [],
  externalDocs = objects.externalDocs(),
} = {}) => ({
  openapi,
  info,
  paths,
  servers,
  components,
  security,
  tags,
  externalDocs,
});

objects.info = ({
  title = '',
  version = '',
  description = '',
  termsOfService = '',
  contact = objects.contact(),
  license = objects.license(),
} = {}) => ({
  title,
  version,
  description,
  termsOfService,
  contact,
  license,
});

objects.contact = ({ name = '', url = '', email = '' } = {}) => ({
  name,
  url,
  email,
});
objects.license = ({ name = '', url = '' } = {}) => ({ name, url });

objects.server = ({ url = '', description = '', variables = [] }) => ({
  url,
  description,
  variables,
});

objects.serverVariable = ({
  default_ = '',
  enum_ = [],
  description = '',
} = {}) => ({
  default: default_,
  enum: enum_,
  description,
});

objects.externalDocs = ({ url = '', description = '' } = {}) => ({
  url,
  description,
});

objects.components = ({
  schemas = {},
  responses = {},
  parameters = {},
  examples = {},
  requestBodies = {},
  headers = {},
  securitySchemas = {},
  links = {},
  callbacks = {},
} = {}) => ({
  schemas,
  responses,
  parameters,
  examples,
  requestBodies,
  headers,
  securitySchemas,
  links,
  callbacks,
});

export default objects;
