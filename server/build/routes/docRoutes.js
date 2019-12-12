"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const docController_1 = require("../controllers/docController"); //importa controlador para ejecutar CRUD
class Doc {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //rutar para ejecutar peticiones 
    config() {
        this.router.get('/', docController_1.docController.list);
        this.router.post('/', docController_1.docController.create);
        this.router.delete('/:doc_id', docController_1.docController.delete);
        this.router.put('/:doc_id', docController_1.docController.update);
    }
}
const doc = new Doc();
exports.default = doc.router;
