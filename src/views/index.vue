<template>
  <div class="bg-lightdark" style="padding-bottom:55px">
    <Header></Header>
    <mt-swipe :auto="3000" class="mt-swipe" id="swipe">
      <mt-swipe-item v-for="(e,i) of swipe_image" :key="i">
        <router-link to="/">
          <img :src="e.image" class="swipe-image" />
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
    <div class="type1">
      <div class="type">
        <div v-for="(e,i) of type" :key="i">
          <router-link :to="`/${e.router}`">
            <img :src="e.image" class="type_image" />
            <div v-text="e.title"></div>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <img src="http://www.99mi.com/data/afficheimg/1584754833232738145.png" class="w-100" />
    </div>
    <div>
      <mt-swipe :auto="5000" class="xilie_height">
        <mt-swipe-item>
          <div class="xilie">
            <div v-for="(e,i) of xilie" :key="i" v-if="i<4">
              <router-link :to="`/xilie?order=${i}`">
                <img :src="e.image" class="w-50" />
              </router-link>
              <div>{{e.title}}</div>
            </div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="xilie">
            <div v-for="(e,i) of xilie" :key="i" v-if="i>=4">
              <router-link :to="`/xilie?order=${i}`">
                <img :src="e.image" class="w-50" />
              </router-link>
              <div>{{e.title}}</div>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="zhuda">
      <div>
        <p>本月主打</p>
        <p>MORE</p>
      </div>
      <div v-for="(e,i) of zhuda" :key="i">
        <router-link to="/">
          <img :src="e.image" class="w-100" />
          <p class="zhuda-title">{{e.title}}</p>
        </router-link>
        <div>
          <span>{{e.price.toFixed(2)}}</span>
          <span class="iconfont iconicon-test10"></span>
        </div>
      </div>
    </div>
    <div class="px-10 py-5">
      <img src="http://m.99mi.com/img/img_new/hot-01.png" class="w-100" />
    </div>
    <div class="mx-10">
      <div class="like">
        <div v-for="(e,i) of like" :key="i">
          <router-link to="/">
            <img :src="e.image" class="w-100" />
          </router-link>
          <router-link to="/">
            <p class="like-title">{{e.title}}</p>
          </router-link>
          <div>
            <span>&yen;{{e.price.toFixed(2)}}</span>
            <span class="iconfont iconicon-test10">
              <router-link to="/">购买</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer :active="active"></Footer>
  </div>
</template>
<script>
import Header from "../components/myHeader";
import Footer from "../components/footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      swipe_image: [],
      type: [],
      xilie: [],
      zhuda: [],
      like: [],
      active: "商城"
    };
  },
  mounted() {
    this.axios.get("/swipe").then(res => {
      this.swipe_image = res.data.results;
    });
    //设置轮播图的高度随宽度而变化
    swipe.style.height = swipe.clientWidth * 0.5 + "px";
    //获取不同种类的标题和图片链接
    this.axios.get("/type").then(res => {
      this.type = res.data.results;
    });
    //获取不同系列的图片和链接
    this.axios.get("/xilie").then(res => {
      this.xilie = res.data.results;
    });
    //获取主打的图片和链接，标题
    this.axios.get("/zhuda").then(res => {
      this.zhuda = res.data.results;
    });
    //获取猜你喜欢的图片和链接，标题
    this.axios.get("/like").then(res => {
      this.like = res.data.results;
    });
  }
};
</script>
<style>
.mx-10 {
  margin-left: 10px;
  margin-right: 10px;
}
.px-1 {
  padding-left: 1vw;
  padding-right: 1vw;
}
.py-1 {
  padding-top: 1vw;
  padding-bottom: 1vw;
}
.px-2 {
  padding-left: 2vw;
  padding-right: 2vw;
}
.py-2 {
  padding-top: 2vw;
  padding-bottom: 2vw;
}
.px-10 {
  padding-left: 10vw;
  padding-right: 10vw;
}
.py-5 {
  padding-top: 5vw;
  padding-bottom: 5vw;
}
.like {
  width: 100%;
  height: 200vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-bottom: 10vw;
}
.zhuda {
  height: 48vw;
  background-color: aqua;
  display: grid;
  grid-template-columns: repeat(3, 29%);
  grid-template-rows: 15% 85%;
  padding: 2vw;
  margin: 10px;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  justify-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
}
.zhuda > div:first-child {
  grid-area: 1/4/1/1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
}
.zhuda .zhuda-title {
  overflow: hidden;
  height: 12px;
  width: 26vw;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  color: #000;
}
.like .like-title {
  overflow: hidden;
  width: 100%;
  height: 36px;
  font-size: 15px;
  line-height: 18px;
  text-overflow: ellipsis;
  color: #000;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.like > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
}
.zhuda > div > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.zhuda > div > div > span:first-child {
  color: #f55;
}
.zhuda > div > div > span:last-child {
  color: #fff;
  background: #f55;
  padding: 2px;
  border-radius: 50%;
}
.like > div > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 18px;
}
.like > div > div > span:first-child {
  color: #f55;
}
.like > div > div > span:last-child {
  color: #fff;
  background: #f55;
  padding: 3px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 27px;
}
.zhuda > div:first-child > p:first-child {
  display: inline-block;
  padding: 5px;
  background: #f55;
  color: #fff;
  border-top-right-radius: 33px;
  border-bottom-right-radius: 33px;
  position: relative;
  left: -2vw;
}
.zhuda > div:first-child > p:last-child {
  display: inline-block;
  color: #f55;
}
.like > div > div > span:last-child a {
  color: #fff;
}
.mintui-search:before {
  font-size: 18px;
}
.w-100 {
  width: 100%;
}
.w-50 {
  width: 50%;
}
.bg-lightdark {
  background-color: #e8e8e8;
}
.type_image {
  width: 50%;
  border-radius: 50%;
}
.type1 {
  padding: 10px;
}
div.type {
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  height: 260px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  background-color: #fff;

  border-radius: 10px;
}
div.type > div {
  flex: 0 1 28%;
  height: 82px;
  background: #fff;
}
div.type > div > a > div {
  margin-top: 10px;
}
a {
  text-decoration: none;
  color: #000;
}
.mt-swipe {
  width: 100%;
}
.swipe-image {
  width: 100%;
}
div.xilie {
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  height: 160px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
}
div.xilie > div {
  flex: 0 1 25%;
}
div.xilie > div > div {
  margin-top: 15px;
}
.xilie_height {
  height: 160px !important;
}
</style>