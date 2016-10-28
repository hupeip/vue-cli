<template>
    <div class="massage">
        <div class="left">
            <div class="img">
                <img src="../../assets/images/3.jpg" alt="" />
            </div>
            <div class="msg">
                <div class="triangle-left"></div>
                <div class="rectangle">
                  rectangle,rectangle,rectangle,rectangle,rectangle,rectangle,rectangle,rectangle,rectangle
                </div>
            </div>
        </div>
        <div class="right">
            <div class="img">
                <img src="../../assets/images/2.jpg" alt="" />
            </div>
            <div class="msg">
                <div class="triangle-right"></div>
                <div class="rectangle rectangle-right">
                  rectangle,rectangle,rectangle,rectangle,rectangle,rectangle,rectangle,rectangle,rectangle
                </div>
            </div>
        </div>
        <div class="left">
            <div class="img">
                <img src="../../assets/images/3.jpg" alt="" />
            </div>
            <div class="msg">
                <div class="triangle-left"></div>
                <div class="rectangle">
                  rectanglerectangle,rectangle,rectangle
                </div>
            </div>
        </div>
        <div class="right">
            <div class="img">
                <img src="../../assets/images/2.jpg" alt="" />
            </div>
            <div class="msg">
                <div class="triangle-right"></div>
                <div class="rectangle rectangle-right">
                  rectanglerectangle,rectangle,rectangle,rectangle,rectangle
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
        }
    },
    computed: {},
    methods: {},
    components: {}
}
</script>

<style scoped lang="less">
  .massage{padding: 0 18px 18px;}
  img{width: 35px;}
  .img{position: absolute; width: 35px;}
  .msg{margin-left: 40px; overflow: hidden;}
  .triangle-left {
      position: relative;
      top: 10px;
      float: left;
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-right: 5px solid #fff;
      border-bottom: 6px solid transparent;
  }
  .rectangle{
      float: left;
      padding: 6px;
      background-color: #fff;
      border-radius: 3px;
      margin-left: -1px;
      color: #2b2b2b;
      font-size: 14px;
      max-width: 350px;
      word-break: break-all;
      word-wrap:break-word;
  }
  .left, .right{margin-bottom: 20px;}
  .right {position: relative;}
  .right .img{right: 0;}
  .triangle-right{
    position: absolute;;
    top: 10px;
    right: 40px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 5px solid #9de555;
    border-bottom: 6px solid transparent;
  }
  .rectangle-right{
     float: right;
     margin-right: 45px;
     background-color: #9de555;
  }
</style>
