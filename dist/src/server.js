"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const app = new app_1.default();
const server = app.listen();
exports.default = server;
//# sourceMappingURL=server.js.map