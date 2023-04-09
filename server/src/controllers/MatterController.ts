import{ Request, Response} from "express";
import pool from "../database"


class MatterController{

    //El index me regresa todos los estudiantes
    public async index(req:Request, res:Response){
        //rest.send('ESTUDIANTES');
        //DESC es para ver la descripcion de la tabla students
        //pool.query('DESC student');
        const matter = await pool.query('SELECT * FROM matters');
        res.json(matter);
    }

    //Vamos a crear nuestro primer metodo para guardar en la base de datos.
    //Metodo create
    //Promise establece un canal de comunicacion promice con el servicio
    public async create(req:Request, res:Response):Promise<void>
    {
        await pool.query('INSERT INTO matters SET ?',[req.body]);
        //console.log(property)"message:string"
        res.json({Text: 'Datos de materia guardado'});
    }

    //Metodo delete
    //El id lo tomamos de una solicitud
    public async delete(req:Request, res:Response):Promise<void>
    {
        const {id} = req.params;
        await pool.query('DELETE FROM matters WHERE idMatter = ?',[id]);
        res.json({Text: 'Datos de materia borrados ' + id});
    }

    //Metodo update
    public async update (req:Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE matters SET ? WHERE idMatter = ?',[req.body, id]);
        res.json({Text: 'Datos de materia actualizados ' + id});
    }

    //Metodo detail //Aqui se pone any porque si regresa algo
    public async detail (req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const matter = await pool.query("SELECT * FROM matters WHERE idMatter = ?", [id]);
        if(matter.length > 0){
            console.log(matter[0]);
            return res.json(matter[0]);
        }
        else
        {
            res.status(404).json({text:'Materia no existe'})
        }
        //res.json({text: 'Detalle del estudiante' + req.params.id})
    }
}






export const matterController = new MatterController();
export default matterController; 
