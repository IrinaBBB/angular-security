const util = require('util');
const cryptoUtil = require('crypto');

export const randomBytes = util.promisify(cryptoUtil.randomBytes);
