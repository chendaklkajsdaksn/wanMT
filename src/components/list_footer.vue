<template>
  <div>
    <div class="list_footer">
      <div>
        <div class="iconfont iconicon-test35"></div>
        <div>客服</div>
      </div>
      <div style="position:relative">
        <div class="iconfont iconicon-test9"></div>
        <div class="hongdian" v-if="this.$store.state.hasOrder"></div>
        <div @click="goToCar">购物车</div>
      </div>
      <div @click="join">
        <div class="iconfont iconicon-test53" v-if="shoucang==0"></div>
        <div class="iconfont iconicon-test54" v-else></div>
        <div>收藏</div>
      </div>
      <div>
        <button class="car" @click="insertCar">加入购物车</button>
      </div>
      <div>
<<<<<<< HEAD
        <button class="buy" @click="insertCar();goToCar()">立即购买</button>
=======
        <button class="buy">立即购买</button>
>>>>>>> a51d0be691c203cdeb3aea5bb992c9c365710e46
      </div>
    </div>
  </div>
</template>
<script>
export default {
<<<<<<< HEAD
  props: ["parentData"],
  data() {
    return {
      shoucang: 0,
      CarNum: 0
    };
  },
  methods: {
    join() {
      if (this.shoucang == 0) {
        this.shoucang = 1;
        this.$toast("收藏成功");
      } else {
        this.shoucang = 0;
        this.$toast("已取消收藏");
      }
    },
    insertCar() {
      if (!this.CarNum) {
        this.CarNum++;
        this.$store.commit("addNum", 1);
        this.$toast({
          message: "已添加入购物车",
          duration: 2000,
          iconClass: "iconfont iconicon-test82"
        });
        this.$store.commit("addCar", this.parentData);
        console.log(this.$store.state.car);
      }
    },
    goToCar() {
      this.$router.push("/car");
    }
  },
  mounted() {
    this.$store.state.car.forEach(element => {
      if (element.title == this.parentData.title) {
        this.CarNum = 1;
=======
  props:["parentData"],
  data() {
    return {
      shoucang:0,
      CarNum:0
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
    },
    insertCar(){
      if(!this.CarNum){
        this.CarNum++;
        this.$store.commit("addNum",1); 
        this.$toast({
          message:'已添加入购物车',
          duration:2000,
          iconClass:'iconfont iconicon-test82'
        });
        this.$store.commit("addCar",this.parentData)
         console.log(this.$store.state.car)
      
      }
    },
    goToCar(){
      this.$router.push('/car')
    }
  },
  mounted(){
    this.$store.state.car.forEach(element => {
      if(element.title==this.parentData.title){
        this.CarNum=1
>>>>>>> a51d0be691c203cdeb3aea5bb992c9c365710e46
      }
    });
  }
};
</script>
<style scoped>
<<<<<<< HEAD
.hongdian {
  background: #f00;
  width: 5px;
  height: 5px !important;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
}
.list_footer {
  height: 8vh;
  width: 100vw;
=======
.hongdian{
  background: #f00;
  width: 5px;height: 5px !important;
  border-radius: 50%;
  position: absolute;
  top: 0;right: 0;
}
.list_footer{
  height: 8vh;width: 100vw;
>>>>>>> a51d0be691c203cdeb3aea5bb992c9c365710e46
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
<<<<<<< HEAD
.list_footer > div {
  color: #666;
  line-height: 1.4rem;
}
.list_footer > div > div:last-child {
  font-size: 0.8em;
  height: 1rem;
}
.list_footer > div > div:first-child {
  font-size: 1.3em;
}
.car {
  width: 100%;
  height: 8vh;
=======
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
>>>>>>> a51d0be691c203cdeb3aea5bb992c9c365710e46
  line-height: 100%;
  font-weight: lighter;
  color: #fff;
  font-size: 1em;
  background: rgb(255, 155, 25);
  border: 0;
}
<<<<<<< HEAD
.buy {
  width: 100%;
  height: 8vh;
=======
.buy{
  width: 100%;height: 8vh;
>>>>>>> a51d0be691c203cdeb3aea5bb992c9c365710e46
  line-height: 100%;
  font-weight: lighter;
  color: #fff;
  font-size: 1em;
  background: rgb(224, 18, 18);
  border: 0;
}
</style>
