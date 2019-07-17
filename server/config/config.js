/**
 * Created by imran on 28/07/2017.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development:{
    db: 'mongodb://microsoft:rarelab5@ds249137.mlab.com:49137/thorpe-bookings',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production:{
    db: 'mongodb://farr-agent:multivision@ds063892.mongolab.com:63892/multivision_fa',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}