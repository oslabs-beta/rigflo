const WebSocket = require('ws');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const { OASDocument } = require('..');

const data = yaml.safeLoad(
  fs.readFileSync(path.join(__dirname, '/parser/data/petstore.yaml'), 'utf8'),
);

const document = new OASDocument(data);

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    try {
      const response = handleMessage(data);
      ws.send(JSON.stringify(response));
    } catch (err) {
      ws.send(JSON.stringify({ error: err }));
    }
  });
});

function handleMessage(data) {
  const { id, payload } = JSON.parse(data);
  const [fn, ...args] = payload;

  // execute the operation
  const result = document[fn](args);
  return {
    id,
    payload: result,
  };
}
