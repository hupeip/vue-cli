<template lang="html">
    <div class="">
        <p>{{count}}</p>
        <button type="button" @click="add">+1</button>
        <input type="text" :value="count" @input="updateCount">


        <p>es6</p>
        <button type="button" @click="es6">button</button>
        <button type="button" @click="test">test</button>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
// import api from '../../../api'
export default {
    data () {
        return {
        }
    },
    computed: {
        ...mapGetters({
            count: 'count'
        })
    },
    methods: {
        add () {
            this.$store.dispatch('add')
        },
        updateCount (e) {
            this.$store.dispatch('updateCount', e.target.value)
        },
        es6 () {
            var fun1 = (x, ...args) => { console.log(args) }
            fun1(1, 2, 3)
            var fun2 = (x = 1, y = 2) => x + y
            console.log(fun2())
            var fun3 = x => x * x
            console.log(fun3(3))
            console.log(fun3 instanceof Function)
            console.log(typeof fun3)
        },
        test () {
            // api.showJobList({ 'openId': '1234', 'page': 1 }).then((data) => {
            //     console.log(data)
            // })
        }
    },
    components: {}
}
</script>

<style lang="css">
</style>
