import { Router } from "express"
import {studentMatterController} from "../controllers/StudentMatterController";

class StudentMatterRoutes{
    public router: Router = Router();

    constructor() {
        this.config();        
    }

    config():void{
        
        this.router.get('/', studentMatterController.index);
        
        //Aqui modificamos las URL
        
        //Metodo post : insertar, crear
        //Llamando al metodo
        this.router.post('/', studentMatterController.create);

        //Metodo delete
        //Asi le paso a postman ese id en la direccion
        this.router.delete('/:id/:idMatter', studentMatterController.delete);
        
        //Metodo update, se maneja como put 
        this.router.put('/:id/:idMatter', studentMatterController.update)

        //Metodo detail
        this.router.get('/:id/:idMatter', studentMatterController.detailStudentMatter)

        
        this.router.get('/student/:id', studentMatterController.detailStudent)
        this.router.get('/matter/:idMatter', studentMatterController.detailMatter)


    }
}

const studentMatterRoutes = new StudentMatterRoutes();
export default studentMatterRoutes.router;