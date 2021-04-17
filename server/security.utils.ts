import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';

const util = require('util');
const cryptoUtil = require('crypto');

export const randomBytes = util.promisify(cryptoUtil.randomBytes);
export const signJwt = util.promisify(cryptoUtil.randomBytes);

const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');
const RSA_PUBLIC_KEY = fs.readFileSync('./demos/public.key');
const SESSION_DURATION = 240;

export async function createSessionToken(userId: string): Promise<string> {
    return jwt.sign({}, RSA_PRIVATE_KEY, {
        algorithm: 'RS256',
        expiresIn: SESSION_DURATION,
        subject: userId,
    });
}
