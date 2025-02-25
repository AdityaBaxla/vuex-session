export default {
    props: ['item'],
    template: `<div>{{item.name}} | {{item.emoji}} | {{item.price}}
    <div>
    {{$store.state.count}}
    </div>
    <button @click="$store.dispatch('setTimeoutFunc')"> child button</button>
    </div>`,

}