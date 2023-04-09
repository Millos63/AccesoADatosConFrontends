"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentMatterController = void 0;
const database_1 = __importDefault(require("../database"));
class StudentMatterController {
    //El index me regresa todos los estudiantes
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //rest.send('ESTUDIANTES');
            //DESC es para ver la descripcion de la tabla students
            //pool.query('DESC student');
            const studentMatter = yield database_1.default.query('SELECT SM.*, S.*, M.* FROM Student_Matters SM, Student S, Matters M WHERE SM.id = S.id AND SM.idMatter = M.idMatter');
            res.json(studentMatter);
        });
    }
    //Vamos a crear nuestro primer metodo para guardar en la base de datos.
    //Metodo create
    //Promise establece un canal de comunicacion promice con el servicio
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Student_Matters SET id = ?, idMatter = ?', [req.body.id, req.body.idMatter]);
            //console.log(property)"message:string"
            res.json({ Text: 'Datos de estudiante guardado' });
        });
    }
    //Metodo delete
    //El id lo tomamos de una solicitud
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { idMatter } = req.params;
            yield database_1.default.query('DELETE FROM Student_Matters WHERE id = ? AND idMatter = ?', [id, idMatter]);
            res.json({ Text: 'Datos de estudiante borrados ' + id });
        });
    }
    //Metodo update
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { idMatter } = req.params;
            yield database_1.default.query('UPDATE Student_Matters SET id =?, idMatter = ? WHERE id = ?  AND idMatter = ?', [req.body.id, req.body.idMatter, id, idMatter]);
            res.json({ Text: 'Datos de estudiante actualizados ' + id });
        });
    }
    detailStudentMatter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { idMatter } = req.params;
            const student = yield database_1.default.query("SELECT SM.id, S.firstName, S.lastName, SM.idMatter, M.nameMatter FROM Student_Matters SM, matters M, student S WHERE SM.idMatter = M.idMatter AND SM.id = S.id AND SM.id = ? AND SM.idMatter = ? ", [id, idMatter]);
            if (student.length > 0) {
                console.log(student[0]);
                return res.json(student);
            }
            else {
                res.status(404).json({ text: 'Registro no existe' });
            }
        });
    }
    //Metodo detail //Aqui se pone any porque si regresa algo
    detailStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const student = yield database_1.default.query("SELECT SM.id, M.nameMatter FROM Student_Matters SM, matters M, student S WHERE SM.idMatter = M.idMatter AND SM.id = S.id AND SM.id = ?", [id]);
            if (student.length > 0) {
                console.log(student[0]);
                return res.json(student);
            }
            else {
                res.status(404).json({ text: 'Registro no existe' });
            }
            //res.json({text: 'Detalle del estudiante' + req.params.id})
        });
    }
    detailMatter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idMatter } = req.params;
            const matter = yield database_1.default.query("SELECT SM.idMatter, S.FirstName, S.lastName FROM Student_Matters SM, matters M, student S WHERE SM.idMatter = M.idMatter AND SM.id = S.id AND SM.idMatter = ?", [idMatter]);
            if (matter.length > 0) {
                console.log(matter[0]);
                return res.json(matter);
            }
            else {
                res.status(404).json({ text: 'Registro no existe' });
            }
        });
    }
}
exports.studentMatterController = new StudentMatterController();
exports.default = exports.studentMatterController;
