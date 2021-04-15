import { Request, Response } from 'express';
import { db } from './database';
import { USERS } from './database-data';
const argon2 = require('argon2');

export function createUser(req: Request, res: Response): void {
    const credentials = req.body;

    argon2.hash(credentials.password).then((passwordDigest) => {
        const user = db.createUser(credentials.email, passwordDigest);
        console.log(USERS);

        res.status(200).json({ id: user.id, email: user.email });
    });
}
