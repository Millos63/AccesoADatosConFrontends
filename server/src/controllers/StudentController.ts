import{ Request, Response} from "express";
import pool from "../database"


class StudentController{

    //El index me regresa todos los estudiantes
    public async index(req:Request, res:Response){
        //rest.send('ESTUDIANTES');
        //DESC es para ver la descripcion de la tabla students
        //pool.query('DESC student');
        const student = await pool.query('SELECT * FROM student');
        res.json(student);
    }

    //Vamos a crear nuestro primer metodo para guardar en la base de datos.
    //Metodo create
    //Promise establece un canal de comunicacion promice con el servicio
    public async create(req:Request, res:Response):Promise<void>
    {
        await pool.query('INSERT INTO student SET ?',[req.body]);
        //console.log(property)"message:string"
        res.json({Text: 'Datos de estudiante guardado'});
    }

    //Metodo delete
    //El id lo tomamos de una solicitud
    public async delete(req:Request, res:Response):Promise<void>
    {
        const {id} = req.params;
        await pool.query('DELETE FROM student WHERE id = ?',[id]);
        res.json({Text: 'Datos de estudiante borrados ' + id});
    }

    //Metodo update
    public async update (req:Request, res: Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE student SET ? WHERE id = ?',[req.body, id]);
        res.json({Text: 'Datos de estudiante actualizados ' + id});
    }

    //Metodo detail //Aqui se pone any porque si regresa algo
    public async detail (req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const student = await pool.query("SELECT * FROM student WHERE id = ?", [id]);
        if(student.length > 0){
            console.log(student[0]);
            return res.json(student[0]);
        }
        else
        {
            res.status(404).json({text:'Estudiante no existe'})
        }
        //res.json({text: 'Detalle del estudiante' + req.params.id})
    }
}






export const studentController = new StudentController();
export default studentController; 



