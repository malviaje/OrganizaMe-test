import {Request,Response} from 'express';

import pool from '../database'; //import database


class UserController{

    
    // validar usuario
    public async login(req: Request, res: Response): Promise<any> {
        const userData = {
            user_name: req.body.user_name,
            user_password: req.body.user_password
        }
        const user = await pool.query('SELECT * FROM usuario WHERE user_name = ? AND user_password = ?', [userData.user_name,userData.user_password]);
        console.log(user.length);
        if (user.length ==! 0) {
            res.status(404).json({ text: "El usuario existe" });
        }
        res.status(404).json({ text: "Error" });
    }
        
}

export const userController =new UserController();