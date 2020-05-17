<template>
  <div style="background:#eee;padding-bottom:60px;">
    <table></table>
    <div>
      <mt-header title="订单详情" fixed class="head">
        <mt-button icon="back" slot="left" @click="back"></mt-button>
      </mt-header>
    </div>
    <div class="dizhi" @click="add">
      <div>
        <span>{{username}}</span>
        <span>{{phone}}</span>
      </div>
      <div>{{text}}</div>
    </div>
    <div>
      <div v-for="(element,index) in car" class="goods">
        <div>
          <img :src="element.image" alt />
        </div>
        <div>
          <div>
            <div>{{element.title}}</div>
            <div>
              <div>￥{{element.price.toFixed(2)}}</div>
              <div>{{element.unit}}x{{element.num}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mt-cell title="买家留言" style="margin-top:10px"></mt-cell>
    <mt-cell title="支付方式（必填）" is-link to value="在线支付"></mt-cell>
    <mt-cell title="配送方式（必填）" is-link to value="99米快递"></mt-cell>
    <mt-cell title="发票信息" is-link to></mt-cell>
    <mt-cell title="余额支付" is-link to></mt-cell>
    <mt-cell title="代金券支付" is-link to></mt-cell>
    <div class="foot">
      <div>
        <span>商品合计</span>
        <span>&yen;{{total_price.toFixed(2)}}元</span>
      </div>
      <mt-button type="danger">确认订单</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      car: [],
      address: [],
      username: "",
      phone: 0,
      text: "",
      total_price: 0
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    add() {
      this.$router.push("/address");
    }
  },
  watch: {},
  mounted() {
    if (sessionStorage.getItem("car")) {
      this.car = JSON.parse(sessionStorage.getItem("car"));
      //去除掉没有选中的的其他商品
      this.car.forEach((e, i) => {
        if (!e.state) {
          this.car.splice(i, 1);
        }
      });
      console.log(this.car);
      //把购物车所有商品的数量乘上单价得到商品需要支付的总价
      this.car.forEach((e, i) => {
        this.total_price += e.price * e.num;
      });
    }
    this.jsp("user")
      .then(res => {
        //用promiss方法保证先得到数据，在从data的变量中个其他变量赋值
        // var promise1 = () =>
        //   new Promise(open => {
        //     this.address = JSON.parse(res.results.location);
        //     open();
        //     console.log(this.address);
        //   });
        // var promise2 = () =>
        //   new Promise(open => {
        //     this.phone = this.address[0].phone;
        //     this.username = this.address[0].username;
        //     this.text = this.address[0].text;
        //     open();
        //   });
        // promise1().then(promise2);
        let f1 = () => {
          this.address = JSON.parse(res.results.location);
        };
        let f2 = () => {
          this.phone = this.address[0].phone;
          this.username = this.address[0].username;
          this.text = this.address[0].text;
        };
        //使用包装的promiss函数实现函数执行的先后顺序
        this.promiss(f1, f2);
      })
      .catch();
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  text-align: left;
}
.head {
  background: rgb(209, 15, 38);
  font-size: 1em;
}
.dizhi {
  margin-top: 55px;
  height: 75px;
  background: #fff;
  padding: 15px 10px;
  text-align: left;
  position: relative;
  margin-bottom: 10px;
}
.dizhi > div:first-child > span:last-child {
  margin-left: 10px;
}
.dizhi > div:nth-child(2) {
  position: absolute;
  left: 10px;
  bottom: 15px;
}
.dizhi::after {
  font-family: "iconfont" !important;
  font-size: 26px;
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -13px;
  content: "\e670";
  display: block;
}
.goods {
  margin-top: 3px;
  background-color: #fff;
  width: 100vw;
  height: 100px;
  padding: 10px;
  display: grid;
  grid-template-columns: 29% 71%;
  grid-template-rows: 100%;
  align-content: flex-start;
  align-items: flex-start;
  text-align: left;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  line-height: 1.2;
}
.goods > div:first-child {
  grid-area: 1/1/3/1;
}
.goods > div > img {
  width: 90%;
}
.goods > div:nth-child(2) > div > div:nth-child(2) {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 30px;
}
.goods > div:nth-child(2) > div > div:nth-child(2) > div:first-child {
  font-size: 1rem;
  font-weight: bold;
  color: #f33;
}
.foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 50px;
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #eee;
}
.foot > div:first-child > span:last-child {
  font-size: 1.1em;
  color: #f33;
}
.foot >>> button {
  height: 50px;
  position: absolute;
  right: 0;
  border-radius: 0;
}
</style>