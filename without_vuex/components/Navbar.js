import CartButton from "./CartButton.js"

export default {

  template: `
      <div class="navbar">
        <h2>Navbar</h2>
        <a href="#">Github</a>
        <a href="#">Insta</a>
        <CartButton :count="cartItemCount"></CartButton>
      </div>
    `,
  components: { CartButton }
}
