const app = require('../../src/app');

describe('\'rental\' service', () => {
  it('registered the service', () => {
    const service = app.service('rental');
    expect(service).toBeTruthy();
  });
});
