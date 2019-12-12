import {Router} from 'express';

import { docController } from '../controllers/docController'; //importa controlador para ejecutar CRUD

class Doc{
    public router: Router=Router();

    constructor(){
        this.config();
    }

    //rutar para ejecutar peticiones 
    config():void{
        this.router.get('/',docController.list);
        this.router.post('/',docController.create);
        this.router.delete('/:doc_id',docController.delete);
        this.router.put('/:doc_id',docController.update);
    }

}

const doc =new Doc();
export default doc.router;