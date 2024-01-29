"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultaGineco_controller_1 = require("../controllers/consultaGineco.controller");
const consultGineco = new consultaGineco_controller_1.consultaGineco();
const routerGineco = (0, express_1.Router)();
// todo --> save consults & treatments
routerGineco.post("/consultagineco/new", (req, res) => {
    consultGineco.updateConsult(req, res);
});
