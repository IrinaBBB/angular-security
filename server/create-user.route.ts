import { Request, Response } from 'express';
import { db } from './database';
import { validatePassword } from './password-validation';
import { randomBytes } from './security.utils';
import { sessionStore } from './session-store';

const argon2 = require('argon2');

export function createUser(req: Request, res: Response): void {
    const credentials = req.body;
    const errors = validatePassword(credentials.password);

    if (errors.length > 0) {
        res.status(400).json({ errors });
    } else {
        createUserAndSession(res, credentials).then(() => {});
    }
}

async function createUserAndSession(res: Response, credentials): Promise<any> {
    const passwordDigest = await argon2.hash(credentials.password);
    const user = db.createUser(credentials.email, passwordDigest);

    const sessionId = await randomBytes(32).then((bytes) =>
        bytes.toString('hex')
    );

    console.log('sessionId: ' + sessionId);

    sessionStore.createSession(sessionId, user);

    res.cookie('SESSION_ID', sessionId, {
        httpOnly: true,
        secure: true,
    });
    res.header('Access-Control-Allow-Credentials');
    res.status(200).json({ id: user.id, email: user.email });
    console.log('User created');
}
