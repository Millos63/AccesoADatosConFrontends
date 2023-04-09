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
exports.matterController = void 0;
const database_1 = __importDefault(require("../database"));
class MatterController {
    //El index me regresa todos los estudiantes
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //rest.send('ESTUDIANTES');
            //DESC es para ver la descripcion de la tabla students
            //pool.query('DESC student');
            const matter = yield database_1.default.query('SELECT * FROM matters');
            res.json(matter);
        });
    }
    //Vamos a crear nuestro primer metodo para guardar en la base de datos.
    //Metodo create
    //Promise establece un canal de comunicacion promice con el servicio
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO matters SET ?', [req.body]);
            //console.log(property)"message:string"
            res.json({ Text: 'Datos de materia guardado' });
        });
    }
    //Metodo delete
    //El id lo tomamos de una solicitud
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM matters WHERE idMatter = ?', [id]);
            res.json({ Text: 'Datos de materia borrados ' + id });
        });
    }
    //Metodo update
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE matters SET ? WHERE idMatter = ?', [req.body, id]);
            res.json({ Text: 'Datos de materia actualizados ' + id });
        });
    }
    //Metodo detail //Aqui se pone any porque si regresa algo
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const matter = yield database_1.default.query("SELECT * FROM matters WHERE idMatter = ?", [id]);
            if (matter.length > 0) {
                console.log(matter[0]);
                return res.json(matter[0]);
            }
            else {
                res.status(404).json({ text: 'Materia no existe' });
            }
            //res.json({text: 'Detalle del estudiante' + req.params.id})
        });
    }
}
exports.matterController = new MatterController();
exports.default = exports.matterController;
