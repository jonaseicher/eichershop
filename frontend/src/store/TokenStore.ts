import {
  VuexModule,
  Module,
} from 'vuex-class-modules';
import store from './store';

@Module({ generateMutationSetters: true })
class TokenStore extends VuexModule {
  accessToken = '';
}
const tokenStore = new TokenStore({ store, name: 'token' });
export default tokenStore;
