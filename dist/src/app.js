"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const swagger_ui_express_1 = tslib_1.__importDefault(require("swagger-ui-express"));
const Config_1 = require("./Config");
const logger_1 = require("./Utils/logger");
const DB_1 = require("DB");
const swager_json_1 = tslib_1.__importDefault(require("../swager.json"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Number(Config_1.PORT) || 5000;
        this.initializeRoutes();
        this.initializeMiddlewares();
        this.connectDatabase();
    }
    get getServer() {
        return this.app;
    }
    initializeMiddlewares() {
        // this.app.use(cors())
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    // define routes app
    initializeRoutes() {
        this.app.get("/", (reg, res, next) => {
            res.send("<h1>hello first project oop</h1>");
        });
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swager_json_1.default));
    }
    connectDatabase() {
        // const pool = new ConnectDatabase();
        // pool.connectDatabase();
        (0, DB_1.connectToSQLServer)();
    }
    // listing app on port => 3000
    listen() {
        this.app.listen(this.port, () => {
            logger_1.loggerDev.info(`this is listening on ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map