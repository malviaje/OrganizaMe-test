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
const database_1 = __importDefault(require("../database")); //import database
class UserController {
    // validar usuario
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = {
                user_name: req.body.user_name,
                user_password: req.body.user_password
            };
            const user = yield database_1.default.query('SELECT * FROM usuario WHERE user_name = ? AND user_password = ?', [userData.user_name, userData.user_password]);
            console.log(user.length);
            if (user.length == !0) {
                res.status(404).json({ text: "El usuario existe" });
            }
            res.status(404).json({ text: "Error" });
        });
    }
}
exports.userController = new UserController();
