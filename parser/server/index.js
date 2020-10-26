const WebSocket = require('ws');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const { OASDocument } = require('..');

const data = yaml.safeLoad(
  fs.readFileSync(path.resolve('parser/data/petstore.yaml'), 'utf8'),
);

const document = new OASDocument(data);

const wss = new WebSocket.Server({ port: 9999 });

wss.on('connection', function connection(socket) {
  socket.on('message', function (data) {
    try {
      const { payload } = JSON.parse(data);
      const response = handleMessage(payload);
      socket.send(JSON.stringify(response));
    } catch (err) {
      console.log(err);
      socket.send(JSON.stringify({ error: err }));
    }
  });
});

function handleMessage(payload) {
  console.log('[WS Server] 🔔 recieved message:', payload);
  const [fn, ...args] = payload;
  // Make sure the method exists
  if (!document[fn])
    return {
      error: new Error(`method ${fn} is not defined on the document`),
    };
  // Execute the method with the arguments and return the result
  const result = document[fn](args);
  return {
    payload: result,
  };
}
