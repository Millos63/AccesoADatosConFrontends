import{ Request, Response} from "express";

class IndexController{
    public index(req:Request, rest:Response){
        rest.send({text: 'Api esta en /api/students'});
    }
}

export const indexController = new IndexController();


