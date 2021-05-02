import ApiService from '@/service/Api.service';
import tokenStore from '@/store/TokenStore';
import axios, { AxiosResponse, Method } from 'axios';

jest.mock('axios');
tokenStore.accessToken = 'testToken';

class TestApiService extends ApiService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  get(url: string): Promise<AxiosResponse<unknown>> {
    return super.get(url);
  }

  post(url: string, data?: unknown, params?: unknown): Promise<AxiosResponse<unknown>> {
    return super.post(url, data, params);
  }

  put(url: string, params: unknown): Promise<AxiosResponse<unknown>> {
    return super.put(url, params);
  }

  request(
    url: string,
    method?: Method,
    data?: unknown,
    params?: unknown,
    headers?: unknown,
    baseURL?: undefined|string,
  ): Promise<AxiosResponse<unknown>> {
    return super.request(url, method, data, params, headers, baseURL);
  }
}

describe('Api.service test', () => {
  const service = new TestApiService();
  const axiosMock = jest.spyOn(axios, 'request');

  afterEach(() => {
    axiosMock.mockReset();
  });

  it('request() with min Params - forward axios with baseURL, Bearer and GET', async () => {
    axiosMock.mockResolvedValueOnce(({ data: { test: 'test' } }));

    await expect(service.request('aUrl', undefined, '', '', undefined, undefined)).resolves.toEqual({ data: { test: 'test' } });
    expect(axiosMock).toHaveBeenCalled();
    expect(axiosMock).toHaveBeenCalledWith({
      baseURL: 'http://localhost:8281/',
      data: '',
      headers: { Authorization: 'Bearer testToken' },
      method: 'GET',
      params: '',
      url: 'aUrl',
    });
  });

  it('request() with all Params: forward', async () => {
    axiosMock.mockResolvedValueOnce(({ data: { test: 'test' } }));

    await expect(service.request('aUrl', 'GET', { aDataProp: 'test' }, { aParam: 'test' }, { aHeaderProp: 'test' }, 'aBaseUrl')).resolves.toEqual({ data: { test: 'test' } });
    expect(axiosMock).toHaveBeenCalled();
    expect(axiosMock).toHaveBeenCalledWith({
      baseURL: 'aBaseUrl',
      data: { aDataProp: 'test' },
      headers: { aHeaderProp: 'test' },
      method: 'GET',
      params: { aParam: 'test' },
      url: 'aUrl',
    });
  });

  it('request(): Throw', async () => {
    axiosMock.mockRejectedValueOnce((new Error('testError')));

    await expect(service.request('aUrl', undefined, '', '', undefined, undefined)).rejects.toThrowError('testError');
    expect(axiosMock).toHaveBeenCalled();
  });

  it('get()', async () => {
    axiosMock.mockResolvedValueOnce(({ data: { test: 'test' } }));

    await expect(service.get('aUrl')).resolves.toEqual({ data: { test: 'test' } });
    expect(axiosMock).toHaveBeenCalled();
  });

  it('put()', async () => {
    axiosMock.mockResolvedValueOnce(({ data: { test: 'test' } }));

    await expect(service.put('aUrl', { aParam: 'test' })).resolves.toEqual({ data: { test: 'test' } });
    // expect(axiosMock).toHaveBeenCalled();
    expect(axiosMock).toHaveBeenCalledWith({
      baseURL: 'http://localhost:8281/',
      data: null,
      headers: { Authorization: 'Bearer testToken' },
      method: 'PUT',
      params: { aParam: 'test' },
      url: 'aUrl',
    });
  });

  it('post() with all opt. params', async () => {
    axiosMock.mockResolvedValueOnce(({ data: { test: 'test' } }));

    await expect(service.post('aUrl', { aDataProp: 'test' }, { aParam: 'test' })).resolves.toEqual({ data: { test: 'test' } });
    expect(axiosMock).toHaveBeenCalled();
    expect(axiosMock).toHaveBeenCalledWith({
      baseURL: 'http://localhost:8281/',
      headers: { Authorization: 'Bearer testToken' },
      method: 'POST',
      data: { aDataProp: 'test' },
      params: { aParam: 'test' },
      url: 'aUrl',
    });
  });

  it('post() without opt. params', async () => {
    axiosMock.mockResolvedValueOnce(({ data: { test: 'test' } }));

    await expect(service.post('aUrl')).resolves.toEqual({ data: { test: 'test' } });
    expect(axiosMock).toHaveBeenCalled();
    expect(axiosMock).toHaveBeenCalledWith({
      baseURL: 'http://localhost:8281/',
      data: undefined,
      headers: { Authorization: 'Bearer testToken' },
      method: 'POST',
      params: undefined,
      url: 'aUrl',
    });
  });
});
