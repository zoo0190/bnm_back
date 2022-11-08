import { jest } from '@jest/globals';
import { hello } from '../routes/api';

test('hello', () => {
  const req = {};
  const res = { send: jest.fn() };
  hello(req, res);
  expect(res.send.mock.calls.length).toBe(1);
  const [[data]] = res.send.mock.calls;
  expect(data).toEqual('Hello World!');
});
