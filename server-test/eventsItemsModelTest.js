var chai = require('chai');
var expect = chai.expect;
var eventsItems = require('../server/eventsItems/eventsItemsModel.js');

// Adds support for assertions on array elements
// https://github.com/chaijs/Chai-Things#examples
chai.use(require('chai-things'));
 
describe('eventsItems Model', function () {
  var testForEventItem;

  beforeEach(function () {
    testForEventItem = [
    {
     eventItemName: "Cake",
     eventId: ["{}"],
     eventNumber: ["{}"],
     eventDesc: ["{}"],
     eventPhoto: ["{}"]
    }
    ];

    eventsItems.setAll(testForEventItem);
  });
  

});
