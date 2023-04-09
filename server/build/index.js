"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//**Importamos desde nuestro paquete express. Para automatizar tareas */
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const IndexRoutes_1 = __importDefault(require("./routes/IndexRoutes"));
const StudentRoutes_1 = __importDefault(require("./routes/StudentRoutes"));
const MatterRoutes_1 = __importDefault(require("./routes/MatterRoutes"));
const StudentMatterRoutes_1 = __importDefault(require("./routes/StudentMatterRoutes"));
//Declaramos la clase server
class Server {
    /**
     *
     */
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //Metodo que no regresa nada
    config() {
        //Set: Establecer
        //Si ya existe un servidor express te regresa el puerto donde esta trabajando o escuchando, si no lo definimos
        //En el puerto 3000
        this.app.set('port', process.env.PORT || 3000);
        // Aqui ocupamos morgan
        this.app.use((0, morgan_1.default)('dev'));
        // Angular pedira los datos al servidor.
        this.app.use((0, cors_1.default)());
        // Va a entender los archivos serializados de express.json
        // Va a entender json
        this.app.use(express_1.default.json());
        // Esta linea nos va a ayudar a usar formularios html
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', IndexRoutes_1.default);
        this.app.use('/api/students', StudentRoutes_1.default);
        this.app.use('/api/matters', MatterRoutes_1.default);
        this.app.use('/api/studentsMatters', StudentMatterRoutes_1.default);
    }
    start() {
        //Servidores siempre escuchan a los puertos
        this.app.listen(this.app.get('port'), () => { console.log("Servidor en el puerto", this.app.get('port')); });
    }
}
// Creamos el objeto Server con el operador new\
const server = new Server();
server.start();
