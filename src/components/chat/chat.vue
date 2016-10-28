<template>
    <div class="g-wrap">
        <div class="m-nav">
            <list></list>
        </div>
        <div class="m-bd">
            <div class="name">
              小丸子
            </div>
            <message></message>
        </div>
    </div>
</template>

<script>
import list from './list.vue'
import message from './message.vue'
export default {
    data: function () {
        return {
            msg: 'www'
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.msg = 'e'
        })
    },
    computed: {},
    methods: {},
    components: { list, message }
}
</script>

<style scoped lang="less">
  .g-wrap{margin: 20px auto; width: 800px; height: 600px; overflow: hidden;}
  .m-nav{position: absolute; width: 200px; height: 600px; background-color: #2e3238;}
  .m-bd{margin-left: 200px; height: 100%; background-color: #f9f9f9;}
  .name{padding: 15px; font-size: 14px;text-align: center;}
</style>
