var userController = require('../users/userController.js');
var eventsTypeController = require('../eventsType/eventsTypeController.js');
var eventsItemsController = require('../eventsItems/eventsItemsController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {

  //
  app.post('/api/users/signin', userController.signin);//enter user to website
  app.post('/api/users/signup', userController.signup);//user register
  app.get('/api/users/signedin', userController.checkAuth);//if user sign in ,check auth
  app.get('/api/user/:id',userController.getUser);


  app.get('/api/events',eventsTypeController.getallEvents);
  app.get('/api/events/event',eventsTypeController.getEvent);

  app.get('/api/eventsItems',eventsItemsController.getallEventsItems);
  app.get('/api/eventsItems/eventItems',eventsItemsController.getEventItems);
  

 
  // // If a request is sent somewhere other than the routes above,
  // // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

