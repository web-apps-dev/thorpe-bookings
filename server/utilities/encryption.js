/**
 * Created by imran on 31/07/2017.
 */
var crypto = require('crypto');

exports.createSalt = function () {
    return crypto.randomBytes(128).toString('base64');
};

exports.hashPwd = function(salt, pwd) {
    /* Hash Message Authentication Code */
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
};
