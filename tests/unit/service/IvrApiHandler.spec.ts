import eichershopHandler from '@/service/eichershopApiHandler';
import axios from 'axios';

jest.mock('axios');
describe('eichershopApiHandlerTest', () => {
  const handler = new eichershopHandler();
  const axiosMock = jest.spyOn(axios, 'request');

  afterEach(() => {
    axiosMock.mockReset();
  });

  it('addCall() - forward response', async () => {
    axiosMock.mockResolvedValueOnce(({ data: { test: 'test' } }));

    await expect(handler.addCall('testID', 'testConnectId')).resolves.toEqual({ data: { test: 'test' } });
    expect(axiosMock).toHaveBeenCalled();
    expect(axiosMock).toHaveBeenCalledTimes(1);
  });

  it('addCall() - throw exception', async () => {
    axiosMock.mockRejectedValueOnce((new Error('testError')));
    await expect(handler.addCall('testID', 'testConnectId')).rejects.toThrowError('testError');
  });

  it('addCustomer() - forward response', async () => {
    axiosMock.mockResolvedValueOnce(({ data: { test: 'test' } }));

    await expect(handler.addCustomer('testID', 123, 0)).resolves.toEqual({ data: { test: 'test' } });
    expect(axiosMock).toHaveBeenCalled();
    expect(axiosMock).toHaveBeenCalledTimes(1);
  });

  it('addCustomer() - throw exception', async () => {
    axiosMock.mockImplementationOnce(() => Promise.reject(new Error('testError')));
    await expect(handler.addCustomer('testID', 123, 0)).rejects.toThrowError('testError');
  });

  it('getEntries() - forward response', async () => {
    axiosMock.mockImplementationOnce(() => Promise.resolve({ data: { test: 'test' } }));

    await expect(handler.getEntries('testID')).resolves.toEqual({ data: { test: 'test' } });
    expect(axiosMock).toHaveBeenCalled();
    expect(axiosMock).toHaveBeenCalledTimes(1);
  });

  it('getEntries() - throw exception', async () => {
    axiosMock.mockImplementationOnce(() => Promise.reject(new Error('testError')));
    await expect(handler.getEntries('testID')).rejects.toThrowError('testError');
  });
});
