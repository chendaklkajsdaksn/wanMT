<template>
  <div>
    <Header></Header>
    <div class="all">
      <!-- 用v-for把购物车的物件循环出来 -->
      <div v-if="this.$store.state.car.length>0">
        <div class="car" v-for="(e,i) of car" :key="i" v-if="car.length>0">
          <div class="gouxuan" @click="quxiao(i)">
            <div :class="e.state?'gou':'cha'">
              <span class="iconfont iconicon-test82"></span>
            </div>
          </div>
          <div>
            <img :src="e.image" class="w-100" />
          </div>
          <div class="canshu">
            <div>{{e.title}}</div>
            <div class="w-100">
              <div>商品参数:{{e.unit}}</div>
            </div>
            <div>
              <div>&yen; {{e.price.toFixed(2)}}</div>
              <div>
                <button @click="minu(i)">-</button>
                <input type="text" :value="e.num" @input="show(i,$event)" />
                <button @click="add(i)">+</button>
              </div>
              <div class="iconfont iconuniE803 lajitong" @click="reduce(i)" :id="`inpuitNum${i}`"></div>
            </div>
          </div>
          <div class="jiange1"></div>
        </div>
      </div>
      <div class="nocar" v-else>
        <img src="http://m.99mi.com/images/99m_56.png" />
        <div>亲,去选购一瓶美酒吧</div>
      </div>
    </div>
    <div class="jiange"></div>
    <div class="dianpu">
      <div class="between px-10">
        <div>店铺推荐</div>
        <div class="chakan">
          <router-link to>查看全部></router-link>
        </div>
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
    </div>
    <div class="totalPrice">
      <div class="gouxuan" @click="cancelAll">
        <div :class="car_num>0?'gou':'cha'">
          <span class="iconfont iconicon-test82"></span>
        </div>
      </div>
      <div>
        <span>共{{car_num}}件 &nbsp;&nbsp;合计:</span>
        <span class="total">&yen; {{price}}元</span>
      </div>
      <div>
        <button @click="goToSettle">去结算</button>
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
      active: "购物车",
      like: [],
      car: [],
      car_num: 0,
      price: 0,
      num: 0
    };
  },
  mounted() {
    this.axios.get("like").then(res => {
      this.like = res.data.results;
    });
    //把仓库里的购物车存进变量car中,用JSON解析成数组,添加是否选中和购买数量属性
    if (sessionStorage.getItem("car")) {
      this.car = JSON.parse(sessionStorage.getItem("car"));
    } else {
      this.car = JSON.parse(JSON.stringify(this.$store.state.car));
    }
    this.car.forEach((e, i) => {
      if (!e.num) {
        e.num = 1;
        e.state = true;
      }
      this.number();
    });
    this.priceTotal();
  },
  methods: {
    //点击按钮,改变当前对应的购物数量
    add(i) {
      this.car[i].num++;
      console.log(this.car);
      sessionStorage.setItem("car", JSON.stringify(this.car));
      this.priceTotal();
      this.number();
    },
    cancelAll() {
      //实现当点击合计处取消按钮时,数量和总价都显示位0,同时子商品处于为选中状态,当再次点击时,所有商品都处于选中状态并显示总价
      if (this.car_num) {
        this.car_num = 0;
        this.price = 0;
        this.car.forEach((e, i) => {
          e.state = false;
        });
      } else {
        this.number();
        this.car.forEach((e, i) => {
          e.state = true;
        });
        this.priceTotal();
      }
    },
    goToSettle() {
      if (this.car.length > 0) {
        this.$router.push("/settle");
      } else {
        this.$toast({
          message: "你还没有挑选商品哦，快去挑选吧",
          className: "line12"
        });
      }
    },
    priceTotal() {
      this.price = 0;
      this.car.forEach((e, i) => {
        if (e.state) {
          this.price += e.price * e.num;
        }
      });
    },
    number() {
      this.car_num = 0;
      this.car.forEach((e, i) => {
        if (e.num) {
          this.car_num += e.num;
        }
      });
    },
    minu(i) {
      if (this.car[i].num > 1) this.car[i].num--;
      sessionStorage.setItem("car", JSON.stringify(this.car));
      this.priceTotal();
      this.number();
    },
    show(i, e) {
      if (e.target.value > 0) {
        let num = Math.ceil(e.target.value);
        this.car[i].num = num;
        sessionStorage.setItem("car", JSON.stringify(this.car));
        this.priceTotal();
      } else {
        this.car[i].num = 1;
        sessionStorage.setItem("car", JSON.stringify(this.car));
        this.priceTotal();
      }
      this.number();
    },
    reduce(i) {
      this.$store.commit("minuCar", this.car[i]);
      this.car.splice(i, 1);
      sessionStorage.setItem("car", JSON.stringify(this.car));
      this.priceTotal();
      this.number();
    },
    quxiao(i) {
      if (this.car[i].state) {
        this.car[i].state = false;
        this.$set(this.car, i, this.car[i]);
        this.number();
        this.car_num -= this.car[i].num;
      } else {
        this.car[i].state = true;
        this.$set(this.car, i, this.car[i]);
        this.number();
        this.car_num += this.car[i].num;
      }
      this.priceTotal();
    }
  },
  watch: {}
};
</script>
<style>
.line12 {
  line-height: 1.5rem !important;
  letter-spacing: 1px !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
.all {
  text-align: left;
}

.dianpu {
  padding-top: 10px;
}
.jiange {
  width: 100%;
  height: 15vh;
  background-color: #eee;
}
.total {
  color: #f00;
  font-size: 1.2rem;
}
.jiange1 {
  grid-area: 2/1/2/4;
  width: 100vw;
  position: relative;
  left: -10px;
  height: 3vh;
  background-color: #eee;
}
.gouxuan {
  text-align: center;
  line-height: 15px;
}
.gou {
  width: 15px;
  height: 15px;
  background-color: rgb(235, 164, 11);
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
}
.cha {
  width: 15px;
  height: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
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
.lajitong {
  position: relative;
  top: 0vw;
  right: 2vw;
  font-size: 1.5rem;
  color: #666;
}
.totalPrice {
  position: fixed;
  width: 100%;
  height: 40px;
  background: #fff;
  bottom: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.totalPrice .gouxuan {
  margin-left: 10px;
}
.totalPrice button {
  height: 40px;
  width: 80px;
  color: #fff;
  background-color: #f00;
  border: 0;
}
.car {
  display: grid;
  grid-template-columns: 8% 35% 57%;
  box-sizing: border-box;
  padding: 10px;
  grid-template-rows: 35vw;
  align-content: center;
  align-items: center;
  padding-bottom: 0;
  border-top: 1px solid #dddddd;
}
.nocar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100%;
  background-color: #eee;
  flex-direction: column;
  color: #888;
  letter-spacing: 1px;
}
.canshu {
  width: 100%;
  box-sizing: border-box;
  align-self: flex-start;
  padding-left: 10px;
}
.canshu > div:first-child {
  width: 100%;
  box-sizing: border-box;
  display: block;
  height: 40px;
  line-height: 20px;
  overflow: hidden;
  font-size: 12px;
}
.canshu > div:last-child {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #f00;
  text-align: left;
}
.canshu > div:nth-child(2) {
  text-align: left;
  border: none;
  outline: none;
  color: #666;
  font-size: 12px;
  margin: 2.5vh 0;
}
.canshu > div:nth-child(2) > div {
  background: #ddd;
  width: 6em;
  padding: 3px;
  border-radius: 2px;
}
.canshu > div:last-child > div:first-child {
  flex: 0 0 40%;
}
.canshu > div:last-child > div:nth-child(2) {
  flex: 0 0 50%;
}
.canshu > div:last-child input {
  width: 30px;
  height: 25px;
  padding: 2px;
  font-size: 1rem;
  padding: 5px;
  float: left;
  text-align: center;
  line-height: 25px;
  border: 1px solid #999;
}
.canshu > div:last-child button {
  width: 25px;
  height: 25px;
  float: left;
}
.canshu > div:last-child::after {
  content: "";
  display: table;
  clear: both;
}
</style>