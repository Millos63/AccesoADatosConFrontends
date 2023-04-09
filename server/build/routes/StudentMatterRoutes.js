"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StudentMatterController_1 = require("../controllers/StudentMatterController");
class StudentMatterRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', StudentMatterController_1.studentMatterController.index);
        //Aqui modificamos las URL
        //Metodo post : insertar, crear
        //Llamando al metodo
        this.router.post('/', StudentMatterController_1.studentMatterController.create);
        //Metodo delete
        //Asi le paso a postman ese id en la direccion
        this.router.delete('/:id/:idMatter', StudentMatterController_1.studentMatterController.delete);
        //Metodo update, se maneja como put 
        this.router.put('/:id/:idMatter', StudentMatterController_1.studentMatterController.update);
        //Metodo detail
        this.router.get('/:id/:idMatter', StudentMatterController_1.studentMatterController.detailStudentMatter);
        this.router.get('/student/:id', StudentMatterController_1.studentMatterController.detailStudent);
        this.router.get('/matter/:idMatter', StudentMatterController_1.studentMatterController.detailMatter);
    }
}
const studentMatterRoutes = new StudentMatterRoutes();
exports.default = studentMatterRoutes.router;
