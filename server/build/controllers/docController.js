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
class DocController {
    //lista todos los documentos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield database_1.default.query('SELECT * FROM documento');
            res.json(doc);
        });
    }
    //guarda un documento
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const docData = {
                doc_id: null,
                doc_date: req.body.doc_date,
                doc_folio: req.body.doc_folio,
                doc_name_client: req.body.doc_name_client,
                doc_total: req.body.doc_total
            };
            const result = yield database_1.default.query('INSERT INTO documento set ?', [docData]);
            res.json({ message: 'doc save' });
        });
    }
    //borra un documento por id (params)
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { doc_id } = req.params;
            yield database_1.default.query('DELETE FROM documento WHERE doc_id = ?', [doc_id]);
            res.json({ message: "The doc was deleted" });
        });
    }
    //actualiza un documento por id (params)
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { doc_id } = req.params;
            const oldDoc = req.body;
            yield database_1.default.query('UPDATE Documento set ? WHERE doc_id = ?', [req.body, doc_id]);
            res.json({ message: "The game was Updated" });
        });
    }
}
exports.docController = new DocController();
