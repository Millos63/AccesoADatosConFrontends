import { Router } from "express";
import { indexController } from "../controllers/IndexController";
import studentController from "../controllers/StudentController";

class IndexRoutes{

    //router como es atributo va con minuscula
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        //Estamos haciendo una ruta de default para el metodo
        //this.router.get('/',(req,res)=>res.send('hola'));
        this.router.get('/',indexController.index);
        //this.router.get('/api/StudentController',studentController.index);


    }
}
//Como es un objeto, ocuparemos camelCase
const indexRoutes = new IndexRoutes();

//No ponemos parentesis, porque estamos ocupando una propiedad de indexRoutes
export default indexRoutes.router; 
 


