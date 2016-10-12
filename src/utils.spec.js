var addField = require('./utils');

// do not truncate diffs
chai.config.truncateThreshold = 0;


describe('Test addField', function() {

  it('add empty field', function() {
    var schema = {
      'properties': {
        'one': {'one': 'foo'}
      }
    };
    addField(schema, {});
    var expected = {
      'properties': {
        'one': {'one': 'foo'}
      }
    };
    // console.log(JSON.stringify(expected, null, 2));
    // console.log(JSON.stringify(schema, null, 2));
    expect(expected).to.deep.equal(schema);
  });

  it('add simple field', function() {
    var schema = {
      'properties': {
        'one': {'one': 'foo'}
      }
    };
    addField(schema, {'two': {'two': 'bar'}});
    var expected = {
      'properties': {
        'one': {'one': 'foo'},
        'two': {'two': 'bar'}
      }
    };
    // console.log(JSON.stringify(expected, null, 2));
    // console.log(JSON.stringify(schema, null, 2));
    expect(expected).to.deep.equal(schema);
  });

});
