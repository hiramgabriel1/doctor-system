"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aFamiliares_controller_1 = require("../controllers/aFamiliares.controller");
const controllerAFamiliares = new aFamiliares_controller_1.aFamiliares();
const routerAFamiliares = (0, express_1.Router)();
const path = "/antecedentesFamiliares";
routerAFamiliares.get(`${path}/:expedienteId`, (req, res) => {
    controllerAFamiliares.getbyExpendiente(req, res);
});
routerAFamiliares.post(`${path}/new`, (req, res) => {
    controllerAFamiliares.createAFamiliares(req, res);
});
exports.default = routerAFamiliares;
