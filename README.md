# Write Response
[![Build Status](https://travis-ci.org/markwylde/write-response.svg?branch=master)](https://travis-ci.org/markwylde/write-response)
[![David DM](https://david-dm.org/markwylde/write-response.svg)](https://david-dm.org/markwylde/write-response)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/markwylde/write-response)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/markwylde/write-response)](https://github.com/markwylde/write-response/releases)
[![GitHub](https://img.shields.io/github/license/markwylde/write-response)](https://github.com/markwylde/write-response/blob/master/LICENSE)

Send a response to a native node http(s) response object

## Example Usage
### json
```javascript
const writeResponse = require('write-response');
writeResponse(200, { hello: 'all good here'}, response);
```

### text
```javascript
const writeResponse = require('write-response');
writeResponse(200, 'all good here', response);
```

### with headers
```javascript
const writeResponse = require('write-response');
writeResponse(200, '<strong>HELLO</strong>', { 'Content-Type': 'text/html' }, response);
```

## License
This project is licensed under the terms of the MIT license.
