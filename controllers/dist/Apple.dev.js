"use strict";

var Apple = require('../models/Apple'); // List of all Apple


exports.Apple_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Apple list');
}; // for a specific shoe.


exports.Apple_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Apple detail: ' + req.params.id);
}; // Handle Apple create on POST.


exports.Apple_create_post = function _callee(req, res) {
  var document, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.body);
          document = new Apple();
          document.Apple_colour = req.body.Apple_colour;
          document.Apple_price = req.body.Apple_prize;
          document.Apple_quantity = req.body.Apple_quantity;
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(document.save());

        case 8:
          result = _context.sent;
          res.send(result);
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](5);
          res.status(500);
          res.send("{\"error\": ".concat(_context.t0, "}"));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 12]]);
}; // Handle Apple delete form on DELETE.


exports.Apple_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: Apple delete DELETE ' + req.params.id);
}; // Handle Apple update form on PUT.


exports.Apple_update_put = function (req, res) {
  res.send('NOT IMPLEMENTED: Apple update PUT' + req.params.id);
};

exports.Apple_list = function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Apple.find());

        case 3:
          theApples = _context2.sent;
          res.send(theApples);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context2.t0, "}"));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // VIEWS
// Handle a show all view


exports.Apple_view_all_Page = function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Apple.find());

        case 3:
          theApples = _context3.sent;
          res.render('Apple', {
            title: 'Apple Search Results',
            results: theApples
          });
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500);
          res.send("{\"error\": ".concat(_context3.t0, "}"));

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};
//# sourceMappingURL=Apple.dev.js.map
