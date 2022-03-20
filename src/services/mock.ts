/**
 * axios-mock-adapter Document for reference.
 * https://github.com/ctimmerm/axios-mock-adapter
 *
 */
import MockAdapter from 'axios-mock-adapter';
import { instance } from './api';
import mockData from './mockData';

export default () => {
  const mock = new MockAdapter(instance, { delayResponse: 500 });

  const { profile, draw } = mockData;

  mock.onGet('/profile').reply(() => [200, profile]);

  mock.onGet('/draw').reply(() => [200, draw]);
};
