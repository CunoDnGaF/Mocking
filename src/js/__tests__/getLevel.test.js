import getLevel from '../getLevel.js';
import fetchData from '../http.js';
jest.mock('../http.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call fetchData for response ok', () => {
    fetchData.mockReturnValue({
      status: 'ok',
      level: '25',
    });
    expect(getLevel(25)).toEqual('Ваш текущий уровень: 25');
});

test('should call fetchData for response not ok', () => {
  fetchData.mockReturnValue({
    status: 'not found'
  });
  expect(getLevel(25)).toEqual('Информация об уровне временно недоступна');
});
