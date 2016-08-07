var userController = require('../users/userController.js');
var cakeController = require('../cake/cakeController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {

  app.post('/api/users/signin', userController.signin);

  app.post('/api/users/signup', userController.signup);
  
  app.get('/api/users/signedin', userController.checkAuth);

  app.get('/api/user/:id',userController.getUser);

   app.get('/api/cake',cakeController.allCakes);
  
   app.post('/api/addCake',cakeController.newCake);

  app.get('/api/cake/:id',cakeController.getCake);

 app.post('/api/applyCake',cakeController.applyCake);

  app.get('/api/users',userController.allUser);

  // // app.get('/api/links/', linksController.allLinks);
  // // app.post('/api/links/', linksController.newLink);

  // // If a request is sent somewhere other than the routes above,
  // // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

