const store = new Vuex.Store({
    // data
    state: {
        name: 'Aditya',
        count: 20,
        items: [
            { "name": "grape", "emoji": "🍇", "price": 30 },
            { "name": "orange", "emoji": "🍊", "price": 40 },
        ],
        users: null,
    },
    getters: {
        oneItem(state) {
            state.items[0];
        },
    },
    // functions that modify data
    mutations: { // syncronous
        changeCount(state) {
            state.count += 10;
        },
        addItem(state, item) {
            state.items.push(item);
        },
        addUsers(state, payload) {
            console.log("add user triggered")
            console.log(payload)
            state.users = payload;
        }
    },
    // function that can be async
    actions: {
        async setTimeoutFunc(context) {
            setTimeout(() => { context.commit('addItem', { "name": "pineapple", "emoji": "🍍", "price": 500 }) }, 1000)
        },
        async getInfo(context) {
            console.log('getInfo triggred')
            fetch('https://jsonplaceholder.typicode.com/users').then((res) => { console.log(res.ok); return res.json() }).then((data) => { console.log(data); context.commit("addUsers", data) }).catch((e) => console.log(e))
        }
    }

})




export default store;