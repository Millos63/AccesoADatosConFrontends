import{ Request, Response} from "express";

class StudentController{
    public index(req:Request, rest:Response){
        rest.send('ESTUDIANTES');
    }
}

export const studentController = new StudentController();
export default studentController; 



