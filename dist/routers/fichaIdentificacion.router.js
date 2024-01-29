"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fichaIdentificacion_controllers_1 = require("../controllers/fichaIdentificacion.controllers");
const controllerFichaIdentificacion = new fichaIdentificacion_controllers_1.fichaIdentificacion();
const routerFichaIdentificacion = (0, express_1.Router)();
const path = "/fichasIdentificacion";
// todo: get all patients
routerFichaIdentificacion.get(`${path}/all`, (req, res) => {
    controllerFichaIdentificacion.getPatients(req, res);
});
// todo: get by username
routerFichaIdentificacion.get(`${path}/filterName`, (req, res) => {
    controllerFichaIdentificacion.getPatientsByName(req, res);
});
// todo: show by filter
routerFichaIdentificacion.get(`${path}/filtered/:filter`, (req, res) => {
    controllerFichaIdentificacion.getPatientsFiltred(req, res);
});
// todo: create a new patient
routerFichaIdentificacion.post(`${path}/create-patient`, (req, res) => {
    controllerFichaIdentificacion.createFichaIdentificacion(req, res);
});
exports.default = routerFichaIdentificacion;
