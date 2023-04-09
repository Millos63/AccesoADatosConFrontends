import { Router } from "express"
import {matterController} from "../controllers/MatterController";

class MatterRoutes{
    public router: Router = Router();

    constructor() {
        this.config();        
    }

    config():void{
        
        this.router.get('/', matterController.index);
        
        //Aqui modificamos las URL
        
        //Metodo post : insertar, crear
        //Llamando al metodo
        this.router.post('/', matterController.create);

        //Metodo delete
        //Asi le paso a postman ese id en la direccion
        this.router.delete('/:id', matterController.delete);
        
        //Metodo update, se maneja como put 
        this.router.put('/:id', matterController.update)

        //Metodo detail 
        this.router.get('/:id', matterController.detail)
    }
}

const matterRoutes = new MatterRoutes();
export default matterRoutes.router;