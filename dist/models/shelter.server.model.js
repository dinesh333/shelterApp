'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Schema = _mongoose2.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    name: String,
    management: String,
    city: String,
    state: String, 
    zip: Number,
    comment: String
});

exports.default = _mongoose2.default.model('Shelter', Schema);
//# sourceMappingURL=shelter.server.model.js.map