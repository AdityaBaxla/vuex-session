import CartItem from "./CartItem.js";

export default {
  template: `
      <div class="main-body">
        <h2>Main Body</h2>
        <CartItem :itemName="'Grape'" :itemEmoji="'🍇'" :price="10"></CartItem>
        <CartItem :itemName="'Carrot'" :itemEmoji="'🥕'" :price="15"></CartItem>
      </div>
    `,
  methods: {
    emitAddToCart() {
      this.$emit('add-to-cart');
    }
  },
  components: {
    CartItem,
  }
}