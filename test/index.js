const test = require('tape');
const sendResponse = require('../');

test('send text', t => {
  t.plan(3);

  const mockResponse = {
    writeHead: function (statusCode, headers) {
      t.equal(statusCode, 200);
      t.deepEqual(headers, {});
    },

    end: function (data) {
      t.equal(data, 'testing');
    }
  };

  sendResponse(200, 'testing', mockResponse);
});

test('send json', t => {
  t.plan(3);

  const mockResponse = {
    writeHead: function (statusCode, headers) {
      t.equal(statusCode, 200);
      t.deepEqual(headers, {
        'Content-Type': 'application/json'
      });
    },

    end: function (data) {
      t.equal(data, '{"testing":"123"}');
    }
  };

  sendResponse(200, { testing: '123' }, mockResponse);
});

test('send text with headers', t => {
  t.plan(3);

  const mockResponse = {
    writeHead: function (statusCode, headers) {
      t.equal(statusCode, 200);
      t.deepEqual(headers, {
        'Content-Type': 'text/other'
      });
    },

    end: function (data) {
      t.equal(data, 'testing');
    }
  };

  sendResponse(200, 'testing', { 'Content-Type': 'text/other' }, mockResponse);
});
