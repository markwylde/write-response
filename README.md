# write-response
Send a response to a native node http(s) response object

## Example Usage
### json
```javascript
import writeResponse from 'write-response';
writeResponse(200, { hello: 'all good here' }, response);
```

### text
```javascript
import writeResponse from 'write-response';
writeResponse(200, 'all good here', response);
```

### with headers
```javascript
import writeResponse from 'write-response';
writeResponse(200, '<strong>HELLO</strong>', { 'Content-Type': 'text/html' }, response);
```

## License
This project is licensed under the terms of the MIT license.
