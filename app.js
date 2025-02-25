import store from "./store.js"
import child from "./child.js"

new Vue({
    el: "#app",
    template: `<div> 
             <ul>
            <div v-for="user in $store.state.users">
                <li>{{user.name}}</li>
            </div>
            </ul>
            <button @click="test">test</button>              
            </div>`,
    data: {
        vueVar: 90,
    },
    methods: {
        test() {
            this.$store.dispatch("getInfo");
        }
    },
    components: { child },
    'store': store, // vuex is available 
})