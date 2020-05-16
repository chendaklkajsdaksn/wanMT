<template>
  <div>
    <Header></Header>
    <div class="section">
      <mt-navbar class="leftSection_xilie" v-model="selected">
        <mt-tab-item
          v-for="(e,i) of xilie"
          :id="i+1"
          :key="i"
          class="left-item"
          :class="{bg_white:selected==(i+1),text_red:selected==(i+1)}"
        >{{e.title}}系列</mt-tab-item>
      </mt-navbar>
      <!-- 显示选择的不同系列的商品 -->
      <div class="rightSection" v-if="selected==1" id="rightHeight">
        <div v-for="(e,i) in cxqd">
          <router-link :to="`/list?id=${i}&all=${JSON.stringify(e)}`">
            <img :src="e.image" class="w-100" />
          </router-link>
          <router-link :to="`/list?id=${i}&all=${JSON.stringify(e)}`">
            <div class="xilie_title">{{e.title}}</div>
          </router-link>
          <div class="price">
            <span>{{e.price.toFixed(2)}}/{{e.unit}}</span>
            <span class="iconfont iconicon-test10"></span>
          </div>
        </div>
      </div>
      <!-- 显示选择的不同系列的商品 -->
      <div class="rightSection" v-if="selected==2" id="rightHeight">
        <div v-for="(e,i) in zltz">
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <img :src="e.image" class="w-100" />
          </router-link>
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <div class="xilie_title">{{e.title}}</div>
          </router-link>
          <div class="price">
            <span>{{e.price.toFixed(2)}}/{{e.unit}}</span>
            <span class="iconfont iconicon-test10"></span>
          </div>
        </div>
      </div>
      <!-- 显示选择的不同系列的商品 -->
      <div class="rightSection" v-if="selected==3" id="rightHeight">
        <div v-for="(e,i) in ysry">
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <img :src="e.image" class="w-100" />
          </router-link>
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <div class="xilie_title">{{e.title}}</div>
          </router-link>
          <div class="price">
            <span>{{e.price.toFixed(2)}}/{{e.unit}}</span>
            <span class="iconfont iconicon-test10"></span>
          </div>
        </div>
      </div>
      <!-- 显示选择的不同系列的商品 -->
      <div class="rightSection" v-if="selected==4" id="rightHeight">
        <div v-for="(e,i) in mx">
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <img :src="e.image" class="w-100" />
          </router-link>
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <div class="xilie_title">{{e.title}}</div>
          </router-link>
          <div class="price">
            <span>{{e.price.toFixed(2)}}/{{e.unit}}</span>
            <span class="iconfont iconicon-test10"></span>
          </div>
        </div>
      </div>
      <!-- 显示选择的不同系列的商品 -->
      <div class="rightSection" v-if="selected==5" id="rightHeight">
        <div v-for="(e,i) in pj">
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <img :src="e.image" class="w-100" />
          </router-link>
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <div class="xilie_title">{{e.title}}</div>
          </router-link>
          <div class="price">
            <span>{{e.price.toFixed(2)}}/{{e.unit}}</span>
            <span class="iconfont iconicon-test10"></span>
          </div>
        </div>
      </div>
      <!-- 显示选择的不同系列的商品 -->
      <div class="rightSection" v-if="selected==6" id="rightHeight">
        <div v-for="(e,i) in dsf">
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <img :src="e.image" class="w-100" />
          </router-link>
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <div class="xilie_title">{{e.title}}</div>
          </router-link>
          <div class="price">
            <span>{{e.price.toFixed(2)}}/{{e.unit}}</span>
            <span class="iconfont iconicon-test10"></span>
          </div>
        </div>
      </div>
      <!-- 显示选择的不同系列的商品 -->
      <div class="rightSection" v-if="selected==7" id="rightHeight">
        <div v-for="(e,i) in hj">
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <img :src="e.image" class="w-100" />
          </router-link>
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <div class="xilie_title">{{e.title}}</div>
          </router-link>
          <div class="price">
            <span>{{e.price.toFixed(2)}}/{{e.unit}}</span>
            <span class="iconfont iconicon-test10"></span>
          </div>
        </div>
      </div>
      <!-- 显示选择的不同系列的商品 -->
      <div class="rightSection" v-if="selected==8" id="rightHeight">
        <div v-for="(e,i) in cf">
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <img :src="e.image" class="w-100" />
          </router-link>
          <router-link :to="`/list?id=${e.list_id}&all=${JSON.stringify(e)}`">
            <div class="xilie_title">{{e.title}}</div>
          </router-link>
          <div class="price">
            <span>{{e.price.toFixed(2)}}/{{e.unit}}</span>
            <span class="iconfont iconicon-test10"></span>
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
      active: "分类",
      xilie: [],
      selected: 1,
      cxqd: [],
      zltz: [],
      ysry: [],
      mx: [],
      pj: [],
      dsf: [],
      hj: [],
      cf: []
    };
  },
  mounted() {
    //获取系列产品的商品标题和主页图片
    this.axios.get("/xilie").then(res => {
      this.xilie = res.data.results;
    });
    //获取春夏秋冬产品信息
    this.axios.get("/cxqd").then(res => {
      this.cxqd = res.data.results;
    });
    this.axios.get("/zltz").then(res => {
      this.zltz = res.data.results;
    });
    this.axios.get("/ysry").then(res => {
      this.ysry = res.data.results;
    });
    this.axios.get("/mx").then(res => {
      this.mx = res.data.results;
    });
    this.axios.get("/pj").then(res => {
      this.pj = res.data.results;
    });
    this.axios.get("/dsf").then(res => {
      this.dsf = res.data.results;
    });
    this.axios.get("/hj").then(res => {
      this.hj = res.data.results;
    });
    this.axios.get("/cf").then(res => {
      this.cf = res.data.results;
    });
    this.selected = Number(this.$route.query.order) + 1;
    this.menu();
  },
  methods: {
    menu() {
      window.scrollTo(0, 0);
    }
  },
  watch: {
    xilie() {
      setTimeout(() => {
        rightHeight.style.height = 100 + "%";
      }, 100);
    },
    selected() {
      this.$router.push(`/xilie?order=${this.selected - 1}`);
      setTimeout(() => {
        rightHeight.style.height = 100 + "%";
      }, 100);
    }
  }
};
</script>
<style scoped>
.d_none {
  display: none;
}
.rightSection {
  width: 100%;
  background: #fff;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 45vw);
  gap: 2vh;
  padding: 10px;
  margin-bottom: 55px;
  box-sizing: border-box;
}
.rightSection > div {
  overflow: hidden;
}
.rightSection .xilie_title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-top: 5px;
  font-size: 0.8em;
  line-height: 1em;
}
.rightSection .price {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-top: 5px;
  align-items: center;
  color: #f33;
}
.rightSection .price > span:last-child {
  padding: 2px;
  border-radius: 50%;
  color: #fff;
  background-color: #f33;
}
.section {
  border-top: 1px solid #ddd;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  overflow: visible;
  box-sizing: border-box;
}
.leftSection_xilie {
  position: sticky;
  top: 0%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #eee;
  height: 100vh;
  width: 100%;
  line-height: 1.1em;
}
.left-item {
  flex: 0 0 6%;
  font-size: 1.1em;
  line-height: 1.3em;
  padding: 16px;
  letter-spacing: 1px;
  width: 100%;
  box-sizing: border-box;
  border: none !important;
}
.bg_white {
  background: #fff !important;
}
.text_red {
  color: #f33 !important;
}
</style>