<template>
  <div>
    <mt-header fixed title="用户信息" class="head">
      <router-link to @click.native="back" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon slot="right" @click.native="zhuxiao">注销</mt-button>
    </mt-header>
    <div class="middle">
      <div>
        <span>{{ uname }}111</span>
        <span class="iconfont iconicon-test34"></span>
      </div>
    </div>
    <div class="shoucang">
      <div>
        <div>0</div>
        <div>我的评价</div>
      </div>
      <div>
        <div>0</div>
        <div>收藏</div>
      </div>
      <div>
        <img src="http://m.99mi.com/images/touxiang/v1.jpg" />
      </div>
      <div>
        <div>100</div>
        <div>积分</div>
      </div>
      <div>
        <div>0</div>
        <div>我的足迹</div>
      </div>
      <div class="userorder">
        <div>
          <div>
            <img src="http://m.99mi.com/img/img_new/99m_48.png" />
            <div>待付款</div>
          </div>
          <div>
            <img src="http://m.99mi.com/img/img_new/99m_50.png" />
            <div>待发货</div>
          </div>
          <div>
            <img src="http://m.99mi.com/img/img_new/99m_49.png" />
            <div>待收获</div>
          </div>
          <div>
            <img src="http://m.99mi.com/img/img_new/99m_51.png" />
            <div>历史订单</div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="personal">
        <div>
          <img src="http://m.99mi.com/img/img_new/01.png" />
          <div>我的酒店</div>
        </div>
        <div>
          <img src="http://m.99mi.com/img/img_new/02.png" />
          <div>我的积分</div>
        </div>
        <div>
          <img src="http://m.99mi.com/img/img_new/03.png" />
          <div>会员权益</div>
        </div>
        <div>
          <img src="http://m.99mi.com/img/img_new/04.png" />
          <div>个人资料</div>
        </div>
        <div>
          <img src="http://m.99mi.com/img/img_new/05.png" />
          <div>账户安全</div>
        </div>
        <div>
          <img @click="location" src="http://m.99mi.com/img/img_new/06.png" />
          <div @click="location">收货地址</div>
        </div>
        <div>
          <img src="http://m.99mi.com/img/img_new/07.png" />
          <div>我的预约</div>
        </div>
        <div>
          <img src="http://m.99mi.com/img/img_new/08.png" />
          <div>退货换货</div>
        </div>
      </div>
      <div class="dianpu">
        <div class="between px-10">
          <div>店铺推荐</div>
          <div class="chakan">
            <router-link to>查看全部></router-link>
          </div>
        </div>
        <div class="mx-10">
          <div class="like">
            <div v-for="(e, i) of like" :key="i">
              <router-link to="/">
                <img :src="e.image" class="w-100" />
              </router-link>
              <router-link to="/">
                <p class="like-title">{{ e.title }}</p>
              </router-link>
              <div>
                <span>&yen;{{ e.price.toFixed(2) }}</span>
                <span class="iconfont iconicon-test10">
                  <router-link to="/">购买</router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer :active="active"></Footer>
  </div>
</template>
<script>
import Header from "../components/myHeader"
import Footer from "../components/footer"
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      active: "我的",
      uname: sessionStorage.getItem("uname"),
      like: [],
      uid: 0
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    zhuxiao() {
      //注销登录后取消掉仓库和浏览器的用户信息缓存
      sessionStorage.setItem("isLogined", false)
      localStorage.setItem("isLogined", false)
      this.$store.commit("logout")
      this.$router.push("/")
    },
    location() {
      this.$router.push("/address")
    }
  },
  mounted() {
    this.axios.get("like").then((res) => {
      this.like = res.data.results
    })
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
  font-family: "微软雅黑";
}
.head {
  background: rgb(209, 15, 38);
  font-size: 1em;
}
.middle {
  margin-top: 39px;
  background: rgb(209, 15, 38);
  border-top: 2px solid rgb(209, 15, 38);
}
.middle > div:first-child {
  margin-top: 10px;
}
.middle > div:first-child > span {
  margin: 5px;
  color: #fff;
  font-size: 1.5rem;
}
.shoucang {
  padding: 0 10px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 3fr 1fr 1.5fr;
  grid-template-rows: 50px 100px;
  align-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  color: #fff;
  background: rgb(209, 15, 38);
  position: relative;
  top: -1px;
}
.shoucang > div > div {
  margin: 5px 0;
}
.shoucang > div > img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  top: 20px;
}
.shoucang .userorder {
  width: 100%;
  height: 110%;
  margin-top: 10px;
  grid-row: 2/3;
  grid-column: 1/6;
  background: #fff;
  color: #333;
  border-radius: 5px;
}
.shoucang .userorder > div {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  padding: 0px 10px 0px 10px;
  align-items: center;
}
.shoucang .userorder > div > div > div {
  margin-top: 15px;
  font-weight: 400;
  color: #2a2a2a;
}
.shoucang .userorder > div > div > img {
  width: 24px;
  height: 24px;
}
.foot {
  /* height: 70vh; */
  background: #eee;
  padding: 20px 10px;
}
.personal {
  width: 100%;
  height: 28vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-content: center;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  font-size: 0.9rem;
}
.personal > div > img {
  width: 40px;
  height: 40px;
}
.personal > div > div {
  margin-top: 10px;
}
.dianpu {
  margin-top: 10px;
  padding-top: 10px;
  border-radius: 5px;
  background: #fff;
}
.between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
.px-10 {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
