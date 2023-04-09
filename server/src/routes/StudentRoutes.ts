import { Router } from "express"
import {studentController} from "../controllers/StudentController";

class StudentRoutes{
    public router: Router = Router();

    constructor() {
        this.config();        
    }

    config():void{
        
        this.router.get('/', studentController.index);
        
        //Aqui modificamos las URL
        
        //Metodo post : insertar, crear
        //Llamando al metodo
        this.router.post('/', studentController.create);

        //Metodo delete
        //Asi le paso a postman ese id en la direccion
        this.router.delete('/:id', studentController.delete);
        
        //Metodo update, se maneja como put 
        this.router.put('/:id', studentController.update)

        //Metodo detail 
        this.router.get('/:id', studentController.detail)
    }
}

const studentRoutes = new StudentRoutes();
export default studentRoutes.router;