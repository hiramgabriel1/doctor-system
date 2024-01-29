"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aPersonales_controller_1 = require("../controllers/aPersonales.controller");
const controllerAPersonales = new aPersonales_controller_1.aPersonales();
const routerAPersonales = (0, express_1.Router)();
const path = "/antecedentesPersonales";
// todo: get by username
routerAPersonales.get(`${path}/:expedienteId`, (req, res) => {
    controllerAPersonales.getbyExpediente(req, res);
});
// todo: create a new patient
routerAPersonales.post(`${path}/new`, (req, res) => {
    controllerAPersonales.createAPersonales(req, res);
});
exports.default = routerAPersonales;
