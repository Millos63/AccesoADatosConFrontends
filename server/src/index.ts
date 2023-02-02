//**Importamos desde nuestro paquete express. Para automatizar tareas */
import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/IndexRoutes';
import studentRoutes from './routes/StudentRoutes'
//Declaramos la clase server
class Server
{
    //Variable publica de tipo Application
    public app: Application 
    /**
     *
     */
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    //Metodo que no regresa nada
    config(): void
    {
        //Set: Establecer
        //Si ya existe un servidor express te regresa el puerto donde esta trabajando o escuchando, si no lo definimos
        //En el puerto 3000
        this.app.set('port', process.env.PORT || 3000);
        // Aqui ocupamos morgan
        this.app.use(morgan('dev'));
        // Angular pedira los datos al servidor.
        this.app.use(cors());
        // Va a entender los archivos serializados de express.json
        // Va a entender json
        this.app.use(express.json());
        // Esta linea nos va a ayudar a usar formularios html
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void
    {

        this.app.use('/',indexRoutes);
        this.app.use('/api/students',studentRoutes);
    }

    start(): void
    {
        //Servidores siempre escuchan a los puertos
        this.app.listen(this.app.get('port'), () => {console.log("Servidor en el puerto", this.app.get('port'))});
    }


}

// Creamos el objeto Server con el operador new\
const server = new Server();

server.start(); 

