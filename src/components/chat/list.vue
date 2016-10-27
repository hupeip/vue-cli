<template>
    <ul class="m-list">
        <li :class="{ action: index == 0 }" @click="select(0)">
            <a href="#" >
                <div class="left">
                    <img src="../../assets/images/1.jpg" alt="" />
                </div>
                <div class="right">
                    <div class="name">weixin</div>
                    <div class="content">今天天气不错</div>
                </div>
            </a>
        </li>
        <li :class="{ action: index == 1 }" @click="select(1)">
            <a href="#">
                <div class="left">
                    <img src="../../assets/images/2.jpg" alt="" />
                </div>
                <div class="right">
                    <div class="name">路飞</div>
                    <div class="content">今天天气不错</div>
                </div>
            </a>
        </li>
        <li :class="{ action: index == 2 }" @click="select(2)">
            <a href="#">
                <div class="left">
                    <img src="../../assets/images/3.jpg" alt="" />
                </div>
                <div class="right">
                    <div class="name">小丸子</div>
                    <div class="content">今天天气不错</div>
                </div>
            </a>
        </li>
        <li :class="{ action: index == 3 }" @click="select(3)">
            <a href="#">
                <div class="left">
                    <img src="../../assets/images/3.jpg" alt="" />
                </div>
                <div class="right">
                    <div class="name">小丸子</div>
                    <div class="content">今天天气不错</div>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    data: function () {
        return {
            index: 0
        }
    },
    computed: {},
    methods: {
        select (index) {
            this.index = index
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
.m-list{background-color: #eee;}
ul li{}
a{display: block; padding: 12px;}
a:hover {
   background-color: rgba(181, 181, 181, 0.1);
}
.action{background-color: rgba(175, 179, 173, 0.4)}
.left{position: absolute; width: 40px; height: 40px;}
.right{margin-left: 52px; width: 100%; }
img{width: 40px;}
.name{font-size: 14px;margin-bottom: 2px; color: #2b2b2b;}
.content{font-size: 12px;}

</style>
