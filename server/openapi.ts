declare interface OASDocumentObject {
  openapi: VersionString;
  info: InfoObject;
  paths: Paths;
  servers?: ServerObject[];
  components?: ComponentsObject;
  security?: SecurityRequirementObject[];
  tags: TagObject[];
  externalDocs: ExternalDocumentationObject;
}
declare type VersionString = string;

declare interface InfoObject {
  title: string;
  version: string;
  description?: string;
  termsOfService?: string;
  contact?: ContactObject;
  license?: LicenseObject;
}

declare interface ContactObject {
  name?: string;
  url?: string;
  email?: string;
}

declare interface LicenseObject {
  name: string;
  url?: string;
}

declare interface ServerObject {
  url: string;
  description?: string;
  variables?: { [name: string]: ServerVariableObject };
}

declare interface ServerVariableObject {
  default: string;
  enum?: string[];
  description?: string;
}

declare type Reference = string;

declare type OrReferenceMap<T> = { [name: string]: T | Reference };
declare interface ComponentsObject {
  schemas: OrReferenceMap<SchemaObject>;
  responses?: OrReferenceMap<ResponseObject>;
  parameters?: OrReferenceMap<ParameterObject>;
  examples?: OrReferenceMap<ExampleObject>;
  requestBodies?: OrReferenceMap<RequestBodyObject>;
  headers?: OrReferenceMap<HeaderObject>;
  securitySchemas?: OrReferenceMap<SecuritySchemeObject>;
  links?: OrReferenceMap<LinkObject>;
  callbacks?: OrReferenceMap<CallbackObject>;
}

declare type PathString = string;
declare type Paths = { [path: string]: PathItemObject };

declare interface PathItemObject {
  $ref?: Reference;
  summary?: string;
  description?: string;
  get?: OperationObject;
  put?: OperationObject;
  post?: OperationObject;
  delete?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
  path?: OperationObject;
  trace?: OperationObject;
  servers?: ServerObject[];
  parameters?: (ParameterObject | Reference)[];
}

declare interface OperationObject {
  responses: ResponsesObject;
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocumentationObject;
  operationId?: string;
  parameters?: ParameterObject | Reference;
  requestBody?: RequestBodyObject | Reference;
  callbacks?: OrReferenceMap<CallbackObject>;
  deprecated?: boolean;
  security?: SecurityRequirementObject[];
  servers: ServerObject[];
}

declare interface ExternalDocumentationObject {
  url: string;
  description?: string;
}

// TODO: Check specification at https://swagger.io/specification/
declare type ParameterObject =
  | QueryParameterObject
  | HeaderParameterObject
  | PathParameterObject
  | CookieParameterObject;

interface _BaseParameter {
  name: string;
  description?: string;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?:
    | 'matrix'
    | 'label'
    | 'form'
    | 'simple'
    | 'spaceDelimited'
    | 'pipeDelimited'
    | 'deepObject';
  explode?: boolean;
  allowReserved?: boolean;
  schema?: SchemaObject | Reference;
  example?: any;
  examples?: OrReferenceMap<ExampleObject>;
  content?: { [name: string]: MediaTypeObject };
}
declare type QueryParameterObject = _BaseParameter & {
  in: 'query';
  required?: boolean;
};

declare type HeaderParameterObject = _BaseParameter & {
  in: 'header';
  required?: boolean;
};

declare type PathParameterObject = _BaseParameter & {
  in: 'path';
  required: true;
};

declare type CookieParameterObject = _BaseParameter & {
  in: 'cookie';
  required?: boolean;
};

declare interface RequestBodyObject {
  description?: string;
  required?: boolean;
  content: { [name: string]: MediaTypeObject };
}

declare interface MediaTypeObject {
  schema?: SchemaObject | Reference;
  example?: any;
  examples?: OrReferenceMap<ExampleObject>;
  encoding?: { [name: string]: EncodingObject };
}

declare interface EncodingObject {
  contentType?: string;
  headers?: OrReferenceMap<HeaderObject>;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
}

declare type HTTPStatusCode = number;
declare interface ResponsesObject {
  default: ResponseObject | Reference;
  [status: number]: ResponseObject | Reference;
}

declare interface ResponseObject {
  description: string;
  headers?: OrReferenceMap<HeaderObject>;
  content?: OrReferenceMap<MediaTypeObject>;
  links?: OrReferenceMap<LinkObject>;
}

// TODO: will need a parser for the expressions...
declare type OASExpression = string;

declare type CallbackObject = { [expression: string]: PathItemObject };

declare interface ExampleObject {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
}

declare interface LinkObject {
  operationRef?: string;
  operationId?: string;
  parameters?: { [name: string]: OASExpression | any };
  requestBody?: OASExpression | any;
  description?: string;
  server?: ServerObject;
}

declare type HeaderObject = Omit<ParameterObject, 'name' | 'in'>;

declare interface TagObject {
  name: string;
  description?: string;
  externalDocs?: ExternalDocumentationObject;
}

declare type ReferenceObject = { $ref: Reference };
// ? See here: https://json-schema.org/understanding-json-schema/index.html#
declare interface SchemaObject {
  title?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: boolean;
  enum?: any[];
  type?: string;
  allOf?: (SchemaObject | ReferenceObject)[];
  oneOf?: (SchemaObject | ReferenceObject)[];
  anyOf?: (SchemaObject | ReferenceObject)[];
  not?: SchemaObject | ReferenceObject;
  items?: SchemaObject | ReferenceObject;
  properties?: { [name: string]: SchemaObject | ReferenceObject };
  additionalProperties?: boolean | SchemaObject | ReferenceObject;
  description?: string;
  format?:
    | 'date-time'
    | 'date'
    | 'time'
    | 'email'
    | 'idn-hostname'
    | 'ipv4'
    | 'ipv6'
    | 'url'
    | 'url-reference'
    | 'iri'
    | 'iri-reference'
    | 'uri-template'
    | 'json-pointer'
    | 'relative-json-pointer'
    | 'regex';
  default?: any;
  nullable?: boolean;
  // ! We are not supporting polymorphism right now. We're just not.
  // discriminator?: Discriminator;
  readOnly?: boolean;
  writeOnly?: boolean;
  xml?: XMLObject;
  example?: any;
  deprecated?: boolean;
}

declare type XMLObject = SchemaObject & {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
};

declare interface SecuritySchemeObject {
  type: string;
  name: string;
  in: string;
  scheme: string;
  flows: OAuthFlowsObject;
  openIdConnectUrl: string;
  bearerFormat?: string;
  description?: string;
}

declare interface OAuthFlowsObject {
  implicit?: OAuthFlowObject;
  password?: OAuthFlowObject;
  clientCredentials?: OAuthFlowObject;
  authorizationCode?: OAuthFlowObject;
}

declare interface OAuthFlowObject {
  authorizationUrl: string;
  tokenUrl: string;
  refreshUrl?: string;
  scopes: { [name: string]: string };
}

declare type SecurityRequirementObject = string[];
