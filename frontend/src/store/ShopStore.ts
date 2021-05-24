import {
  VuexModule,
  Module,
} from 'vuex-class-modules';
import { Article } from './Article';
import store from './store';

@Module({ generateMutationSetters: true })
class ShopStore extends VuexModule {
  articles: Article[] = [
    {
      name: 'Eicher Diesel Alu Schild',
      description: 'Wir können das Eicher Diesel Alu-Schild in Original 2,5mm Dicke wieder liefern. Mit bereits fertig lackiertem roten Schriftzug und das auch noch zu einem vergünstigten Preis von 35  statt vorher unlackiert für 39 ! Achtung begrenzte Anzahl!',
      tags: ['neu', 'accessory'],
      price: 35.00,
      amountInCart: 0,
      id: 8039,
      image: 'http://eicher-freunde.de/shop/eicher_diesel_alu_schild_gr.jpg',
    },
    {
      name: 'Keramik-Tasse',
      description: 'Hochwertige Keramik-Tasse in weiß mit modernem Design.\nMit Eicher-Diesel Logo.\nSpülmaschinenfest.\nCa. 10cm hoch, 8cm Durchmesser',
      tags: ['accessory'],
      price: 8.00,
      amountInCart: 0,
      id: 8006,
      image: 'http://eicher-freunde.de/shop/tasse_mit_logo.jpg',
    },
    // {
    //   id: 1033,
    //   name: 'Säuglings-Body',
    //   price: 20.00,
    //   image: undefined,
    //   tags: ['clothing'],
    //   description: '',
    //   amountInCart: 0,
    // },
    {
      id: 1016,
      name: 'Kinder T-Shirt',
      price: 18.00,
      image: 'http://eicher-freunde.de/shop/kinder-t-shirt_gr.jpg',
      tags: ['clothing'],
      description: '',
      amountInCart: 0,
    },
    {
      id: 1032,
      name: 'Die Eicher Raubtierkappe',
      price: 27.00,
      image: 'http://eicher-freunde.de/shop/raubtierkappe_gr.jpg',
      tags: ['clothing'],
      description: '',
      amountInCart: 0,
    },
    {
      id: 1025,
      name: 'Soft Shell Bodywarmer Weste, rot',
      price: 60.00,
      image: 'http://eicher-freunde.de/shop/softshell_weste_gr.jpg',
      tags: ['clothing'],
      description: '',
      amountInCart: 0,
    },
    {
      id: 1026,
      name: 'Strickfleece-Jacke blaumeliert',
      price: 45.00,
      image: 'http://eicher-freunde.de/shop/strickjacke_gr.jpg',
      tags: ['clothing'],
      description: '',
      amountInCart: 0,
    },
    // {
    //   id: 1028,
    //   name: 'Softshell Jacke, blau',
    //   price: 77.00,
    //   image: undefined,
    //   tags: ['clothing'],
    //   description: '',
    //   amountInCart: 0,
    // },
    // {
    //   id: 1024,
    //   name: 'Halstüchlein für Babys',
    //   price: 12.00,
    //   image: undefined,
    //   tags: ['clothing'],
    //   description: '',
    //   amountInCart: 0,
    // },
    {
      id: 1023,
      name: 'Mütze mit gestricktem Eicherfreunde Logo',
      price: 10.00,
      image: 'http://eicher-freunde.de/shop/strickmuetze_gr.jpg',
      tags: ['clothing'],
      description: '',
      amountInCart: 0,
    },
    // {
    //   id: 1007,
    //   name: 'Herren Polo-Shirt',
    //   price: 30.00,
    //   image: undefined,
    //   tags: ['clothing'],
    //   description: '',
    //   amountInCart: 0,
    // },
    {
      id: 1010,
      name: 'Kappe, navyblau',
      price: 10.00,
      image: 'http://eicher-freunde.de/shop/kappe_neu.jpg',
      tags: ['clothing'],
      description: '',
      amountInCart: 0,
    },
    // {
    //   id: 1011,
    //   name: 'Sweatshirt, navyblau',
    //   price: 30.00,
    //   image: undefined,
    //   tags: ['clothing'],
    //   description: '',
    //   amountInCart: 0,
    // },
  ];

  addToCart(id: number, amount: number) {
    const article = this.getArticle(id);
    article.amountInCart += amount;
    if (article.amountInCart < 0) article.amountInCart = 0;
  }

  getArticle(id: number): Article {
    const article = this.articles.find((a) => a.id === id);
    if (!article) throw new Error(`Article with id ${id} not found!`);
    return article;
  }

  getCartArticles(): Article[] {
    return this.articles.filter((a) => a.amountInCart > 0);
  }

  getCartNumberOfProducts(): number {
    if (this.getCartArticles().length === 0) return 0;
    return this.getCartArticles().map((a) => a.amountInCart).reduce((previous, current) => previous + current);
  }

  getCartTotalPrice(): number {
    if (this.getCartArticles().length === 0) return 0;
    return this.getCartArticles().map((a) => a.price * a.amountInCart).reduce((previous, current) => previous + current);
  }
}
const shopStore = new ShopStore({ store, name: 'shop' });
export default shopStore;
