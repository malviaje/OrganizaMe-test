import {Router} from 'express';

import { userController } from '../controllers/userController'; //importa controlador para ejecutar CRUD

class User{
    public router: Router=Router();

    constructor(){
        this.config();
    }
    
    //rutar para ejecutar peticiones 
    config():void{
        this.router.get('/', userController.login);
    }

}

const user =new User();
export default user.router;