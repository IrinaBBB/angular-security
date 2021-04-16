import { Request, Response } from 'express';
import { db } from './database';

// tslint:disable-next-line:typedef
export function getUser(req: Request, res: Response) {
    const credentials = req.body;
}
