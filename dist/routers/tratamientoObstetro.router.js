"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tratamientoObstetro_controller_1 = require("../controllers/tratamientoObstetro.controller");
const tratamientoObstetro = new tratamientoObstetro_controller_1.tratamientoObstetroController();
const routerTratamientoObstetro = (0, express_1.Router)();
// todo --> save consults & treatments
routerTratamientoObstetro.get("/tratamientos/:expedienteId", (req, res) => {
    tratamientoObstetro.getTratamientosByExpediente(req, res);
});
