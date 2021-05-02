import { mount } from '@vue/test-utils';
import Something from '@/Something.vue';
import stompStore from '@/store/StompStore';
import axios from 'axios';

jest.mock('axios');

describe('Something.vue', () => {
  test('given Something when sendToKafka expect post to contain agentId', () => {
    const wrapper = mount(Something, {
      propsData: {
        agentId: 'musterma',
        accessToken: 'randomToken',
      },
    });

    expect(wrapper.find('button[data-cy="websockets-wc-disconnent"]').isVisible()).toBeTruthy();
    expect(wrapper.find('button[data-cy="websockets-wc-connect"]').exists()).toBeFalsy();
    const axiosPost = jest.spyOn(axios, 'post');

    wrapper.find('button[data-cy="websockets-wc-send-to-kafka"]').trigger('click');

    expect(axiosPost).toHaveBeenCalledWith(expect.stringContaining('/scs/eichershop/kafka/interactionevent'), expect.objectContaining({ agentLoginId: 'musterma' }), expect.anything());
  });

  test('given Something when get messages expect stomp message to be visible', async () => {
    const wrapper = mount(Something, {
      propsData: {
        agentId: 'musterma',
        accessToken: 'randomToken',
      },
    });

    const message = {
      headers: { 'message-id': '12345', destination: '/all' }, body: 'agent: --hidden--ma', command: 'TEST', isBinaryBody: false, binaryBody: new Uint8Array(),
    };
    stompStore.addMessage(message);

    expect(wrapper.find('h3 + div').text()).toContain('/all: agent: --hidden--ma');
  });
});
