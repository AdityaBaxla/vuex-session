import MainBody from "./components/MainBody.js"
import Navbar from "./components/Navbar.js"

new Vue({
    el: '#app',
    template: `
      <div class="root">
      <div class="main-container">
        <Navbar :cartItemCount="cartItemCount"></Navbar>
        <MainBody @add-to-cart="incrementCart" ></MainBody>
        </div>
      </div>
    `,
    data() {
        return {
            cartItemCount: 0
        };
    },
    methods: {
        incrementCart() {
            this.cartItemCount++;
        }
    },
    components: {
        "MainBody": MainBody,
        Navbar,
    }
});
