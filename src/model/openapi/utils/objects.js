/**
 * @file
 * Helper functions for creating different components of the OpenAPI document
 */

/* eslint no-use-before-define: 0 */

const document = ({
  openapi = '',
  info = info(),
  paths = {},
  servers = [],
  components = components(),
  security = [],
  tags = [],
  externalDocs = externalDocs(),
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

const info = ({
  title = '',
  version = '',
  description = '',
  termsOfService = '',
  contact = contact(),
  license = license(),
} = {}) => ({
  title,
  version,
  description,
  termsOfService,
  contact,
  license,
});

const contact = ({ name = '', url = '', email = '' } = {}) => ({
  name,
  url,
  email,
});
const license = ({ name = '', url = '' } = {}) => ({ name, url });

const server = ({ url = '', description = '', variables = [] }) => ({
  url,
  description,
  variables,
});

const serverVariable = ({
  default_ = '',
  enum_ = [],
  description = '',
} = {}) => ({
  default: default_,
  enum: enum_,
  description,
});

const externalDocs = ({ url = '', description = '' } = {}) => ({
  url,
  description,
});

const components = ({
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

export default {
  document,
  info,
  contact,
  license,
  server,
  serverVariable,
  components,
  externalDocs,
};
