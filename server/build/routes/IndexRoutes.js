"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IndexController_1 = require("../controllers/IndexController");
class IndexRoutes {
    constructor() {
        //router como es atributo va con minuscula
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Estamos haciendo una ruta de default para el metodo
        //this.router.get('/',(req,res)=>res.send('hola'));
        this.router.get('/', IndexController_1.indexController.index);
    }
}
//Como es un objeto, ocuparemos camelCase
const indexRoutes = new IndexRoutes();
//No ponemos parentesis, porque estamos ocupando una propiedad de indexRoutes
exports.default = indexRoutes.router;
