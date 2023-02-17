import {IncomingHttpHeaders} from 'http';

type Respondable = {
  writeHead: (statusCode: number, headers: object) => void,
  end: (data?: string) => void
}

declare function writeResponse (
  statusCode: number,
  message: string | object,
  response: Respondable
): void;

declare function writeResponse (
  statusCode: number,
  message: string | object,
  headers: IncomingHttpHeaders,
  response: Respondable
): void;

export default writeResponse;
