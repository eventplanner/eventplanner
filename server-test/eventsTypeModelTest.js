var chai = require('chai');
var expect = chai.expect;
var eventsTypes = require('../server/eventsType/eventsTypeModel.js');

// Adds support for assertions on array elements
// https://github.com/chaijs/Chai-Things#examples
chai.use(require('chai-things'));
 
describe('eventsType Model', function () {
  var testForEventsType;

  beforeEach(function () {
    testForEventsType = [
    {
        eventName: "Wedding",
        eventId:"1",
        eventDesc:"",
        eventPhoto:"",
        eventsItems:[{cake},{flowers}]
    },
      {
        eventName: "Birthday",
        eventId:"2",
        eventDesc:"",
        eventPhoto:"",
        eventsItems:[{cake},{themes}]

    },
    ];

    eventsTypes.setAll(testForEventsType);
  });
  

});
