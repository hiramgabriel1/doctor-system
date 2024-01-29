"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const fichaIdentificacion_router_1 = __importDefault(require("../routers/fichaIdentificacion.router"));
dotenv_1.default.config();
const server = (0, express_1.default)();
// todo: middlewares
server.use(express_1.default.json());
server.use((0, morgan_1.default)("dev"));
server.use((0, cors_1.default)());
// todo: endpoints
server.use(fichaIdentificacion_router_1.default);
const bootstrap = () => {
    try {
        server.listen(process.env.PORT);
        console.log(`http://localhost:${process.env.PORT}`);
    }
    catch (error) {
        console.error(error);
    }
};
bootstrap();
