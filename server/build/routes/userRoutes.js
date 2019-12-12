"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController"); //importa controlador para ejecutar CRUD
class User {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //rutar para ejecutar peticiones 
    config() {
        this.router.get('/', userController_1.userController.login);
    }
}
const user = new User();
exports.default = user.router;
