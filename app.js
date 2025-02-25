

// const store = new Vuex.Store({
//     state: { // data that is accessable to all components
//         name: 'aditya'
//     },
//     getters: { // like computed properties
//         modifiedName(state) {
//             return "####" + state.name + "####"
//         }
//     },
//     mutations: { // functions that change state (cant be async)
//         changeName(state, newName) {
//             state.name = newName
//         }
//     },
//     actions: { // fuctions that can be async, they commit mutations
//         delayedNameChange(context) {
//             setTimeout(() => {
//                 context.commit('changeName', 'Pikachu')
//             }, 500)
//         }
//     }
// })
// new Vue({
//     template: `
//         <div>
//         <h1> Hello students </h1>
//         <h3> {{$store.state.name}}</h3>
//         <h3> {{$store.getters.modifiedName}}</h3>
//         <button @click="callMutation">changeName</button>
//         <button @click="callAction">change Name async </button>
//         </div>
//     `,
//     methods: {
//         callMutation() {
//             this.$store.commit('changeName', 'Tanisha')
//         },
//         callAction() {
//             this.$store.dispatch('delayedNameChange')
//         }
//     },
//     el: '#app',
//     store,
// })



const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    getters: {
        cartTotal(state) {
            return state.cart.reduce((total, product) => product.price + total, 0)
        },

        cartItems(state) {
            return state.cart.length;
        },
    },
    mutations: {
        add_to_cart(state, product) {
            state.cart.push(product)
        },
        add_to_products(state, product) {
            state.products.push(product)
        }
    },
    actions: {
        async get_data(context) {
            const res = await fetch('http://localhost:5000/items', {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            const data = await res.json()
            console.log(data)
            for (const product of data) {
                context.commit('add_to_products', product)
            }
        }
    }
})

Vue.component('product-list', {
    template: `
        <div>
            <div v-for="product in computedProducts">
                <span> {{product.emoji}} {{product.name}} | {{product.price}}</span>
                <button @click="addToCart(product)"> Add to Cart </button>
            </div>
            <button @click="action">Get Initial Data</button>
        </div>
    `,
    computed: {
        computedProducts() {
            return this.$store.state.products
        }
    },
    methods: {
        addToCart(product) {
            this.$store.commit('add_to_cart', product)
        },
        action() {
            this.$store.dispatch('get_data')
        }
    }
})

Vue.component('shopping-cart', {
    template: `<div>
            <h2> Cart </h2>
            <p> Total Amount :  {{$store.getters.cartTotal}}</p>
            <p> Total Items : {{$store.getters.cartItems}}</p>
        </div>
    `,
})

Vue.component('add-item', {
    template: `
        <div>
            <input v-model="name" placeholder="name">
            <input v-model="price" placeholder="price">
            <input v-model="emoji" placeholder="emoji">
            <button @click="addItem"> Add Item </button>
        </div>
    `,
    data() {
        return {
            name: "",
            price: "",
            emoji: "",
        }
    },
    methods: {
        addItem() {
            this.$store.commit('add_to_products', { id: this.$store.state.products.length + 1, name: this.name, price: Number(this.price), emoji: this.emoji })
        }
    }
})



new Vue({
    el: '#app',
    template: `
    <div>
        <product-list />
        <shopping-cart />
        <add-item />
    </div>
    `,
    store,
})
