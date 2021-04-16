import { Request, Response } from 'express';
import { sessionStore } from './session-store';

// tslint:disable-next-line:typedef
export function logout(req: Request, res: Response) {
    const sessionId = req.cookies.sessionId;

    sessionStore.destroySession(sessionId);
    res.clearCookie('SESSION_ID');

    res.sendStatus(200);
}
