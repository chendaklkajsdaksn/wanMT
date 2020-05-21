<template>
  <div class="manage">
    <mt-header title="收货地址管理" fixed class="head">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <div class="address">
      <div v-for="(e, i) of address">
        <div>
          <div>{{ e.username }}</div>
          <div>{{ e.phone }}</div>
        </div>
        <div>
          {{ e.province.split(",")[1] }} {{ e.city.split(",")[1] }}
          {{ e.area }} {{ e.text }}
        </div>
        <hr />
        <div>
          <div class="moren" @click="moren(i, $event)">
            <div v-if="index == i + 1">
              <span class="iconfont iconicon-test82 gou"></span>
            </div>
            <div v-else></div>
            <div>默认</div>
          </div>
          <div class="bianji">
            <span class="iconfont iconicon-test12">编辑</span>
            <span class="iconfont iconuniE803" @click="del(i)">删除</span>
          </div>
        </div>
      </div>
      <div class="btn">
        <mt-button type="danger" size="large" @click="newAddr">新增地址</mt-button>
      </div>
    </div>
    <Footer :active="active"></Footer>
  </div>
</template>
<script>
import Footer from "../components/footer";
export default {
  components: {
    Footer
  },
  data() {
    return {
      address: [],
      uid: sessionStorage.getItem("uid"),
      active: "我的",
      index: 1
    };
  },
  methods: {
    back() {
      this.jsp("updatelocation", { uid: this.uid, index: this.index - 1 })
        .then(res => {})
        .catch(res => {});
      this.$router.go(-1);
    },
    moren(i, e) {
      this.index = i + 1;
    },
    del(i) {
      var that = this;
      this.jsp("delete", { index: i, uid: this.uid })
        .then(res => {
          that.address.splice(i, 1);
        })
        .catch();
    },
    newAddr() {
      this.$router.push("/newaddress");
    }
  },
  mounted() {
    this.jsp("address", { uid: this.uid })
      .then(res => {
        this.address = res.address;
      })
      .catch();
  }
};
</script>
<style scoped>
.manage {
  background: #eee;
  height: 100vh;
}
* {
  box-sizing: border-box;
}
.head {
  background: rgb(209, 15, 38);
  font-size: 1em;
}
.address {
  padding-top: 40px;
  background: #eee;
  padding-bottom: 10vh;
}
.address > div {
  width: 100%;
  height: 135px;
  background: #fff;
  margin-top: 20px;
  padding: 5px 10px;
}
.address > div > div:first-child {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.address > div > div:first-child > div:last-child {
  font-size: 0.9rem;
  color: #666;
}
.address > div > div:nth-child(2) {
  height: 40px;
  line-height: 40px;
}
.address > div > div:nth-child(4) {
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
.address div.btn {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 40px;
  padding: 10px 10px;
  background: #eee;
}
.bianji > span {
  margin: 0 5px;
}
.moren {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.moren > div:first-child {
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #aaa;
}
.gou {
  background: crimson;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  position: relative;
  left: -1px;
  top: -1px;
}
</style>
