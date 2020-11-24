const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

const { OASDocument } = require('./OASDocument');

const data = yaml.safeLoad(
  fs.readFileSync(path.resolve('server/data/petstore.yaml'), 'utf8'),
);

new OASDocument(data);

// console.log(document);
