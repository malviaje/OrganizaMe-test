import express,{ Application } from 'express'; //npm i @types/express -D para solucionar error

//rutas
import userRoutes from './routes/userRoutes';
import docRoutes from './routes/docRoutes';

//midleware
import morgan from 'morgan'; //npm i @types/morgan @types/cors -D para solucionar error
import cors from 'cors';

class Server{ //iniciara el servidor

    public app:Application; //definiendo tipo
    
    constructor(){ //iniciara express
        this.app=express();
        this.config();
        this.routes();

    }

    config():void{ //encargado de configurar app
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev')); //para ver peticiones
        this.app.use(cors());//pedir datos al servidor
        this.app.use(express.json()); //acepta formatos json (vercion integrada de body-parse)
        this.app.use(express.urlencoded({extended:false})) //para enviar formulario html
    }

    routes():void{ //definir rutas del servidor
        this.app.use('/routes/user',userRoutes);
        this.app.use('/routes/Doc',docRoutes);
    }

    start():void{ //inicialisar el servidor
        this.app.listen(this.app.get('port'),()=>{
            console.log('Servidor en puerto',this.app.get('port'));
        });
    }


}

const server = new Server(); 
server.start(); //ejecuta el servidor