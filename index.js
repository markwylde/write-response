const ErrorWithObject = require('error-with-object');

function sendJsonResponse (statusCode, message, headers, response) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
    ...headers
  });
  response.end(JSON.stringify(message, null, 2));
}

function sendTextResponse (statusCode, message, headers, response) {
  response.writeHead(statusCode, headers);
  response.end(message);
}

function sendResponse (statusCode, message = '', headers, response) {
  if (arguments.length === 3) {
    response = headers;
    headers = undefined;
  }

  if (!statusCode) {
    throw new ErrorWithObject({ code: 'NO_STATUS_CODE', message: 'You did not set a statusCode' });
  }

  if (!response) {
    throw new ErrorWithObject({
      code: 'NO_RESPONSE_OBJECT',
      message: 'You did not set a response object. Nowhere to send response.'
    });
  }

  if (typeof message === 'object') {
    sendJsonResponse(statusCode, message, headers || {}, response);
  } else {
    sendTextResponse(statusCode, message, headers || {}, response);
  }
}

module.exports = sendResponse;
