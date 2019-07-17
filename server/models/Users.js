/**
 * Created by imran on 31/07/2017.
 */

var mongoose = require('mongoose'),
  encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: {type: String, required: '{PATH} is required'},
  lastName: {type: String, required: '{PATH} is required'},
  userName: {
    type: String,
    required: '{PATH} is required',
    unique: true
  },
  salt: {type: String, required: '{PATH} is required'},
  hashed_pwd: {type: String, required: '{PATH} is required'},
  roles: [String]
});

userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
  hasRole: function (role) {
    return this.roles.indexOf(role) > -1;
  }
};

//model
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'imran');
      User.create({firstName: 'Imran', lastName: 'Malik', userName: 'imran', salt: salt, hashed_pwd: hash, roles: ['admin'] });
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'joe');
      User.create({firstName: 'Joe', lastName: 'Bloggs', userName: 'joe', salt: salt, hashed_pwd: hash, roles: ['admin'] });
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'john');
      User.create({firstName: 'John', lastName: 'Donn', userName: 'john', salt: salt, hashed_pwd: hash, roles: []});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'jenny');
      User.create({firstName: 'Jenny', lastName: 'Penny', userName: 'jenny', salt: salt, hashed_pwd: hash});
    }
  })
};

exports.createDefaultUsers = createDefaultUsers;

