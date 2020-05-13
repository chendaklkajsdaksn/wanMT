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
        <span>{{uname}}111</span>
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
    <div class="foot">123</div>
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
      active: "我的",
      uname: sessionStorage.getItem("uname")
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    zhuxiao() {
      //注销登录后取消掉仓库和浏览器的用户信息缓存
      sessionStorage.setItem("isLogined", false);
      this.$store.commit("logout");
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  font-family: '微软雅黑';
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
  height: 70vh;
  background: #eee;
  padding: 20px 10px;
}
</style>