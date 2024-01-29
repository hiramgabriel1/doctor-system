"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aGineObst_controller_1 = require("../controllers/aGineObst.controller");
const controllerAGineObst = new aGineObst_controller_1.aGineObstController();
const routerAGineObst = (0, express_1.Router)();
const path = '/aGineObst';
routerAGineObst.get(`${path}/antecedentes/:expedienteId`, (req, res) => {
    controllerAGineObst.getAGineObstByExpediente(req, res);
});
routerAGineObst.post(`${path}/antecedentes/new`, (req, res) => {
    controllerAGineObst.createAGineObst(req, res);
});
exports.default = routerAGineObst;
