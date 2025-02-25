export default {
  props: ['count'],
  template: `
      <div class="cart-button">
        <div>Cart </div> 
        <div>{{ count }} Items</div>
      </div>
    `
};

