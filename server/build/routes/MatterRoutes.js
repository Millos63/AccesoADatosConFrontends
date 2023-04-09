"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MatterController_1 = require("../controllers/MatterController");
class MatterRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', MatterController_1.matterController.index);
        //Aqui modificamos las URL
        //Metodo post : insertar, crear
        //Llamando al metodo
        this.router.post('/', MatterController_1.matterController.create);
        //Metodo delete
        //Asi le paso a postman ese id en la direccion
        this.router.delete('/:id', MatterController_1.matterController.delete);
        //Metodo update, se maneja como put 
        this.router.put('/:id', MatterController_1.matterController.update);
        //Metodo detail 
        this.router.get('/:id', MatterController_1.matterController.detail);
    }
}
const matterRoutes = new MatterRoutes();
exports.default = matterRoutes.router;
