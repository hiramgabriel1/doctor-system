"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const descripcionGineco_controller_1 = require("../controllers/descripcionGineco.controller");
const controllerDescipcionGineco = new descripcionGineco_controller_1.descripcionGineco();
const routerDescipcionGineco = (0, express_1.Router)();
// todo: get by username
routerDescipcionGineco.get(`descipcionGineco/:expedienteId`, (req, res) => {
    controllerDescipcionGineco.getDescipcionGinecobyExpediente(req, res);
});
// todo: create a new patient
routerDescipcionGineco.post(`descipcionGineco/new`, (req, res) => {
    controllerDescipcionGineco.createDescripcionGineco(req, res);
});
exports.default = routerDescipcionGineco;
