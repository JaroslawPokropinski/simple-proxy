const express = require('express');
var proxy = require('express-http-proxy');
let port = 4000

const index = process.argv.indexOf('--url') + 1;
const portId = process.argv.indexOf('--port') + 1;
if (portId != 0 && portId < process.argv.length) {
    port = parseInt(process.argv[portId]);
}
if (index != 0 && index < process.argv.length) {
    const app = express();
    app.use('/', proxy(process.argv[index]));
    app.listen(port, () => console.log(`Proxy listening on port ${port}!`))
} else {
    console.log('Usage: proxy --url "www.site.com" [--port port]');
}

