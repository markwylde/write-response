export function writeJsonResponse (statusCode, message, headers, response) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
    ...headers
  });
  response.end(JSON.stringify(message));
}

export function writeTextResponse (statusCode, message, headers, response) {
  response.writeHead(statusCode, headers);
  response.end(message);
}

export function writeResponse (statusCode, message = '', headers, response) {
  if (arguments.length === 3) {
    response = headers;
    headers = undefined;
  }

  if (!statusCode) {
    throw Object.assign(new Error('You did not set a statusCode'), { code: 'NO_STATUS_CODE' });
  }

  if (!response) {
    throw Object.assign(new Error('You did not set a response object. Nowhere to send response.'), { code: 'NO_RESPONSE_OBJECT' });
  }

  if (typeof message === 'object') {
    writeJsonResponse(statusCode, message, headers || {}, response);
  } else {
    writeTextResponse(statusCode, message, headers || {}, response);
  }
}

export default writeResponse;
