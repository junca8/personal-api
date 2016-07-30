var id = 3;
var specialUser = {
  user: "junca8",
  pin: 8888
};
var error = {error: "you suck"}

module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },

  generateId: function(req, res, next) {
    req.body.id = id;
    id++;
    next();
  },

  verifyUser: function(req, res, next) {
    if (specialUser.user === req.params.username && specialUser.pin === parseInt(req.params.pin)) {
      next();
    }
    else {
      res.send(error);
    }
  }

};
