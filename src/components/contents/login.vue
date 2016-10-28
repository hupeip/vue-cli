<template>
    <div class="">
        username: <input type="tel" name="tel" v-model="tel"><br>
        password: <input type="password" name="pwd" v-model="pwd">
        <button type="button" @click="login">提交</button>
        <mt-cell title="标题" to="hi" is-link value="带连接" label="描述信息"></mt-cell>
        <mt-cell title="标题" icon="back" value="带图标"></mt-cell>
        <mt-cell title="标题" >
            <span class="text">tupian</span>
            <img src="../../assets/images/2.jpg" slot="icon" width="24" height="24" alt="" />
        </mt-cell>
        <!-- <mt-btn>rrr</mt-btn> -->
        <button type="button" name="button" @click="toast">toast</button>
        <button type="button" name="button" @click="indicator ">indicator </button>
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <li v-for="item in list">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Cell, Button, Toast, Indicator, Loadmore, InfiniteScroll } from 'mint-ui'
export default {
    data: function () {
        return {
            tel: '',
            pwd: '',
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
            // loading: false
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
        },
        toast () {
            let instance = Toast({
                message: '提示',
                duration: 20000,
                iconClass: 'mintui mintui-back'
            })
            setTimeout(() => {
                instance.close()
                console.log('finish')
            }, 2000)
        },
        indicator () {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'double-bounce'
            })
            setTimeout(() => {
                Indicator.close()
                console.log('finish')
            }, 3000)
        },
        loadMore () {
            this.loading = true
            setTimeout(() => {
                let last = this.list[this.list.length - 1]
                for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i)
                }
                this.loading = false
            }, 1000)
        }

    },
    components: {
        'mt-cell': Cell,
        'mt-btn': Button,
        Toast,
        Indicator,
        Loadmore,
        InfiniteScroll
    }
}
</script>

<style lang="less" scoped>
  .text{color: #ff0000;}
  li{padding: 15px;text-align: center;border-bottom: 1px solid #f0f0f0}
</style>
