"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //npm i @types/express -D para solucionar error
//rutas
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const docRoutes_1 = __importDefault(require("./routes/docRoutes"));
//midleware
const morgan_1 = __importDefault(require("morgan")); //npm i @types/morgan @types/cors -D para solucionar error
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); //para ver peticiones
        this.app.use(cors_1.default()); //pedir datos al servidor
        this.app.use(express_1.default.json()); //acepta formatos json (vercion integrada de body-parse)
        this.app.use(express_1.default.urlencoded({ extended: false })); //para enviar formulario html
    }
    routes() {
        this.app.use('/routes/user', userRoutes_1.default);
        this.app.use('/routes/Doc', docRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start(); //ejecuta el servidor
