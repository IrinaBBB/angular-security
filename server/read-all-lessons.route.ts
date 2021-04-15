import { db } from './database';

// tslint:disable-next-line:typedef
export function readAllLessons(req, res) {
    return res.status(200).json(db.readAllLessons());
}
