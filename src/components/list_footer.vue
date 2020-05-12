<template>
  <div>
    <div class="list_footer">
      <div>
        <div class="iconfont iconicon-test35"></div>
        <div>客服</div>
      </div>
      <div>
        <div class="iconfont iconicon-test9"></div>
        <div>购物车</div>
      </div>
      <div @click="join">
        <div class="iconfont iconicon-test53" v-if="shoucang==0"></div>
        <div class="iconfont iconicon-test54" v-else></div>
        <div>收藏</div>
      </div>
      <div>
        <button class="car">加入购物车</button>
      </div>
      <div>
        <button class="buy">立即购买</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shoucang:0
    };
  },
  methods:{
    join(){
      if(this.shoucang==0){
        this.shoucang=1;
        this.$toast("收藏成功");
      }else{
        this.shoucang=0;
        this.$toast("已取消收藏");
      }
    }
  }
};
</script>
<style scoped>
.list_footer{
  height: 8vh;width: 100vw;
  border-top: 1px solid #ddd;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 2fr;
  grid-template-rows: 7vh;
  align-items: center;
  align-content: center;
  text-align: center;
}
.list_footer>div{
  color: #666;
  line-height: 1.4rem;
}
.list_footer>div>div:last-child{
  font-size: .8em;
  height: 1rem;
}
.list_footer>div>div:first-child{
  font-size: 1.3em;
}
.car{
  width: 100%;height: 8vh;
  line-height: 100%;
  font-weight: lighter;
  color: #fff;
  font-size: 1em;
  background: rgb(255, 155, 25);
  border: 0;
}
.buy{
  width: 100%;height: 8vh;
  line-height: 100%;
  font-weight: lighter;
  color: #fff;
  font-size: 1em;
  background: rgb(224, 18, 18);
  border: 0;
}
</style>
