import { db } from './database';
import { sessionStore } from './session-store';

// tslint:disable-next-line:typedef
export function readAllLessons(req, res) {
    const sessionId = req.cookies.SESSION_ID;

    const isSessionValid = sessionStore.isSessionValid(sessionId);

    if (!isSessionValid) {
        res.sendStatus(403);
    } else {
        res.status(200).json({ lessons: db.readAllLessons() });
    }

    return res.status(200).json({ lessons: db.readAllLessons() });
}
