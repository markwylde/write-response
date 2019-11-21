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

test('with no status code', t => {
  t.plan(1);

  const mockResponse = {
    writeHead: function (statusCode, headers) {
    },

    end: function (data) {
    }
  };

  try {
    sendResponse(null, 'testing', mockResponse);
  } catch(error) {
    t.equal(error.code, 'NO_STATUS_CODE');
  }
});

test('with no response object', t => {
  t.plan(1);

  try {
    sendResponse(200, 'testing', null);
  } catch(error) {
    t.equal(error.code, 'NO_RESPONSE_OBJECT');
  }
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
