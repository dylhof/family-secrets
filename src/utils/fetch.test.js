import { fetchData, createOptions } from './fetch';
import * as mockData from '../mockData';

describe('Utils', () => {
  describe('fetchData', () => {
    const mockPath = '/families'

    it('should return families', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: jest.fn().mockImplementation(() => Promise.resolve(mockData.families)),
        status: 200
      }));
      const result = await fetchData(mockPath);
      expect(result).toEqual(mockData.families);
    })
  })
})