"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultaObstetro_controller_1 = require("../controllers/consultaObstetro.controller");
const controllerFichaIdentificacion = new consultaObstetro_controller_1.consultaObstetro();
const routerConsultaObstetro = (0, express_1.Router)();
const path = "/consultaObstetro";
// todo: get all patients
routerConsultaObstetro.get(`${path}/all`, (req, res) => {
    controllerFichaIdentificacion.getConsultasObstetro(req, res);
});
// todo: get by username
routerConsultaObstetro.get(`${path}/antecedentes/:expedienteId`, (req, res) => {
    controllerFichaIdentificacion.getAntecedentesPatients(req, res);
});
// todo: create a new patient
routerConsultaObstetro.post(`${path}/new`, (req, res) => {
    controllerFichaIdentificacion.createConsultaObstetro(req, res);
});
exports.default = routerConsultaObstetro;
