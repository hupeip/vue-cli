<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <router-link :to="{ path: 'hi' }">to hi</router-link>
      <counter></counter>
      <p>total:{{count * 4}}</p>
  </div>
</template>

<script>
import api from '../../../api'
import counter from './hi.vue'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    created () {
        console.log(api)
        api.login({ 'openId': '1234', 'page': 1 }).then(response => {
            console.log('ok')
        },
        response => {
            console.log('error')
        })
    },
    computed: {
        ...mapGetters({
            count: 'count'
        })
    },
    components: {
        counter
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
