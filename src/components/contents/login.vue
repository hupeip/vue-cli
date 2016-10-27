<template>
    <div class="">
        username: <input type="tel" name="tel" v-model="tel"><br>
        password: <input type="password" name="pwd" v-model="pwd">
        <button type="button" @click="login">提交</button>
        <p>{{msg}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: function () {
        return {
            tel: '',
            pwd: ''
        }
    },
    computed: {
        ...mapGetters({
            msg: 'msg'
        })
    },
    methods: {
        login () {
            // this.$store.dispatch('login', { 'phoneNum': this.tel, 'psw': this.pwd })
            this.$store.dispatch('login', { 'openId': '1234', 'page': 1 })
            // api.login({ 'phoneNum': this.tel, 'psw': this.pwd }).then(response => {
            //     console.log('ok')
            // },
            // response => {
            //     console.log('error')
            // })
        }

    },
    components: {}
}
</script>

<style lang="css">
</style>
