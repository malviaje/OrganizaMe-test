import {Request,Response} from 'express';

import pool from '../database'; //import database


class DocController{

    //lista todos los documentos
    public async list (req:Request,res:Response){
    
        const doc = await pool.query('SELECT * FROM documento');
        res.json(doc);

    }
    
    //guarda un documento
    public async create(req: Request, res: Response): Promise<void> {
        const docData = {
            doc_id: null,
            doc_date: req.body.doc_date,
            doc_folio: req.body.doc_folio,
            doc_name_client: req.body.doc_name_client,
            doc_total: req.body.doc_total 
        }
        const result = await pool.query('INSERT INTO documento set ?', [docData]);
        res.json({ message: 'doc save' });
    }
    
    //borra un documento por id (params)
    public async delete(req: Request, res: Response): Promise<void> {
        const { doc_id } = req.params;
        await pool.query('DELETE FROM documento WHERE doc_id = ?', [doc_id]);
        res.json({ message: "The doc was deleted" });
    }
    
    //actualiza un documento por id (params)
    public async update(req: Request, res: Response): Promise<void> {
        const { doc_id } = req.params;
        const oldDoc = req.body;
        await pool.query('UPDATE Documento set ? WHERE doc_id = ?', [req.body, doc_id]);
        res.json({ message: "The game was Updated" });
    }
        
}

export const docController =new DocController();