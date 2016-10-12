const _ = require('lodash');

// add field to existing json schema
var addField = function(schema, field) {
  return _.merge(schema, {'properties': field});
};

module.exports = addField;