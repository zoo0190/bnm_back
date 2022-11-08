import { jest } from '@jest/globals';
import request from 'supertest';
import { server } from '../bnm.js';

// beforeEach(async () => {
// });

afterEach(() => server.close());

const makeQuery = (query) => {
  const rets = [];
  for (const k in query) {
    rets.push(`${k}=${query[k]}`);
  }
  return rets.join('&');
};

const makeUrl = ({ appid, version, schemas, idcmd, query }) =>
  `/api/${appid}/${version}/${schemas}/${idcmd}?${makeQuery(query)}`;

describe('makeQuery & makeUrl', () => {
  const pq = {
    appid: 'www',
    version: '0.0.1',
    schemas: 'users',
    idcmd: 'all',
    query: { searchStr: '11', offset: 10 },
  };

  test('makeQuery', () => {
    const searchParam = makeQuery(pq.query);
    const searchParam2 = makeQuery();
    expect(searchParam).toEqual('searchStr=11&offset=10');
    expect(searchParam2).toEqual('');
  });

  test('makeUrl', () => {
    const searchParam = makeQuery(pq.query);
    const expectData = `/api/${pq.appid}/${pq.version}/${pq.schemas}/${pq.idcmd}?${searchParam}`;
    const res = makeUrl(pq);
    expect(res).toEqual(expectData);
  });
});
