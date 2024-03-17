"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
});
server.listen(3000);
console.log("Server running at http://localhost:3000/");
//# sourceMappingURL=index.js.map