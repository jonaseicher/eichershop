import {
  VuexModule,
  Module,
} from 'vuex-class-modules';
import Article from './Article';
import store from './store';

@Module({ generateMutationSetters: true })
class CartStore extends VuexModule {
  articles: Article[] = [];
}
const cartStore = new CartStore({ store, name: 'cart' });
export default cartStore;
