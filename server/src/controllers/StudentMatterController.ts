import{ Request, Response} from "express";
import pool from "../database"


class StudentMatterController{

    //El index me regresa todos los estudiantes
    public async index(req:Request, res:Response){
        //rest.send('ESTUDIANTES');
        //DESC es para ver la descripcion de la tabla students
        //pool.query('DESC student');
        const studentMatter = await pool.query('SELECT SM.*, S.*, M.* FROM Student_Matters SM, Student S, Matters M WHERE SM.id = S.id AND SM.idMatter = M.idMatter');
        res.json(studentMatter);
    }

    //Vamos a crear nuestro primer metodo para guardar en la base de datos.
    //Metodo create
    //Promise establece un canal de comunicacion promice con el servicio
    public async create(req:Request, res:Response):Promise<void>
    {
        await pool.query('INSERT INTO Student_Matters SET id = ?, idMatter = ?',[req.body.id, req.body.idMatter]);
        //console.log(property)"message:string"
        res.json({Text: 'Datos de estudiante guardado'});
    }

    //Metodo delete
    //El id lo tomamos de una solicitud
    public async delete(req:Request, res:Response):Promise<void>
    {
        const {id} = req.params;
        const {idMatter} = req.params;
        await pool.query('DELETE FROM Student_Matters WHERE id = ? AND idMatter = ?',[id, idMatter]);
        res.json({Text: 'Datos de estudiante borrados ' + id});
    }

    //Metodo update
    public async update (req:Request, res: Response):Promise<void>{
        const {id} = req.params;
        const {idMatter} = req.params;
        await pool.query('UPDATE Student_Matters SET id =?, idMatter = ? WHERE id = ?  AND idMatter = ?',[req.body.id, req.body.idMatter, id, idMatter]);
        res.json({Text: 'Datos de estudiante actualizados ' + id});
    }

    public async detailStudentMatter (req: Request, res:Response): Promise<any>{
        const {id} = req.params;
        const {idMatter} = req.params;
        const student = await pool.query("SELECT SM.id, S.firstName, S.lastName, SM.idMatter, M.nameMatter FROM Student_Matters SM, matters M, student S WHERE SM.idMatter = M.idMatter AND SM.id = S.id AND SM.id = ? AND SM.idMatter = ? ", [id, idMatter]);
        if(student.length > 0){
            console.log(student[0]);
            return res.json(student);
        }
        else
        {
            res.status(404).json({text:'Registro no existe'})
        }
    }

    //Metodo detail //Aqui se pone any porque si regresa algo
    public async detailStudent (req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const student = await pool.query("SELECT SM.id, M.nameMatter FROM Student_Matters SM, matters M, student S WHERE SM.idMatter = M.idMatter AND SM.id = S.id AND SM.id = ?", [id]);
        if(student.length > 0){
            console.log(student[0]);
            return res.json(student);
        }
        else
        {
            res.status(404).json({text:'Registro no existe'})
        }
        //res.json({text: 'Detalle del estudiante' + req.params.id})
    }

    
    public async detailMatter(req:Request, res:Response):Promise<any>{
        const {idMatter} = req.params
        const matter = await pool.query("SELECT SM.idMatter, S.FirstName, S.lastName FROM Student_Matters SM, matters M, student S WHERE SM.idMatter = M.idMatter AND SM.id = S.id AND SM.idMatter = ?", [idMatter]);
        if(matter.length > 0){
            console.log(matter[0]);
            return res.json(matter);
        }
        else
        {
            res.status(404).json({text:'Registro no existe'})
        }
    }
}






export const studentMatterController = new StudentMatterController();
export default studentMatterController; 



