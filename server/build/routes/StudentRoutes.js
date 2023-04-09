"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StudentController_1 = require("../controllers/StudentController");
class StudentRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', StudentController_1.studentController.index);
        //Aqui modificamos las URL
        //Metodo post : insertar, crear
        //Llamando al metodo
        this.router.post('/', StudentController_1.studentController.create);
        //Metodo delete
        //Asi le paso a postman ese id en la direccion
        this.router.delete('/:id', StudentController_1.studentController.delete);
        //Metodo update, se maneja como put 
        this.router.put('/:id', StudentController_1.studentController.update);
        //Metodo detail 
        this.router.get('/:id', StudentController_1.studentController.detail);
    }
}
const studentRoutes = new StudentRoutes();
exports.default = studentRoutes.router;
