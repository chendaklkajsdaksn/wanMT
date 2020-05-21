<template>
  <div class="bg-light">
    <table></table>
    <mt-header title="订单提交成功" fixed class="head">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <div class="orderNum">
      <span>订单号:</span>
      <span>{{orderNum}}</span>
    </div>
    <div class="peisong">
      <div>配送方式: 99米速递</div>
      <div>支付方式: 在线支付</div>
      <div>支付金额: &yen;{{price}}元</div>
    </div>
    <div class="btn">
      <mt-button @click.native="index">返回首页</mt-button>
      <mt-button @click.native="goPay" type="danger">去支付</mt-button>
      <mt-button @click.native="user" type="danger">用户中心</mt-button>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.bg-light {
  background: #eee;
  height: 100vh;
  padding: 0 10px;
  text-align: left;
}
.head {
  background: rgb(209, 15, 38);
  font-size: 1em;
}
.orderNum {
  margin-top: 55px;
  width: 100%;
  height: 10vw;
  background: #fff;
  line-height: 10vw;
  padding-left: 10px;
  border-radius: 3px;
  margin-bottom: 15px;
}
.orderNum > span:nth-child(2) {
  font-size: 1.1rem;
  letter-spacing: 1px;
  font-weight: bold;
}
.peisong > div {
  width: 100%;
  height: 10vw;
  background: #fff;
  line-height: 10vw;
  padding-left: 10px;
  border-radius: 3px;
  border: 1px solid #eee;
}
.btn {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.btn >>> button {
  width: 25vw;
  height: 10vw;
  font-size: 0.9rem;
}
.btn >>> button:first-child {
  background: #222;
  color: #eee;
}
</style>
<script>
export default {
  data() {
    return {
      orderNum: sessionStorage.getItem("orderNum")
        ? sessionStorage.getItem("orderNum")
        : 0,
      price: 0
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    goPay() {},
    index() {
      this.$router.replace("/");
    },
    user() {
      this.$router.push("/me");
    }
  },
  mounted() {
    if (this.$route.params.price !== undefined) {
      this.price = this.$route.params.price;
      sessionStorage.setItem("price", this.$route.params.price);
    } else {
      this.price = sessionStorage.getItem("price");
    }
  }
};
</script>