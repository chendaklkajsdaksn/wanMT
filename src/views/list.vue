<template>
  <div class="list" @click="head">
    <listHeader ref="head"></listHeader>
    <div v-if="list_id==0">
      <mt-swipe :auto="3000" class="list_swipe">
        <mt-swipe-item v-for="(e,i) of list.swipe" :key="i">
          <img :src="e" class="w-100" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="list_title px-10">{{list.title}}</div>
      <!-- <div class="list_price px-10">单瓶价：&yen;{{list.price}}</div>
      <div class="between">
        <div class="list_liulanliang px-10">浏览量： {{list.liulanliang}}</div>
        <div class="list_kucun px-10">库存： {{list.isOnSale==1?'有货':'无货'}}</div>
      </div>-->
      <div class="list_price px-10" v-html="`单瓶价：&yen;${list.price.toFixed(2)}`"></div>
      <div class="between">
        <div class="list_liulanliang px-10">浏览量： {{list.liulanliang}}</div>
        <div class="list_kucun px-10">库存： {{list.isOnSale==1?'有货':'无货'}}</div>
      </div>
      <div class="jiange"></div>
      <div class="content">
        <div class="between">
          <div>商品评价（{{list.comment.length}}）</div>
          <div class="chakan">
            <router-link :to="`/comment?id=${list.id}`">查看全部></router-link>
          </div>
        </div>
        <div v-for="(e,i) of list.comment" :key="i" v-if="i<2" class="comment">
          <img src="http://m.99mi.com/images/touxiang/v1.jpg" />
          <span>{{e.phone}}</span>
          <div>{{e.comment}}</div>
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
      <div class="jiange"></div>
      <div class="xiangqing">
        <img :src="e" v-for="(e,i) of list.xiangqing" :key="i" class="w-100" />
      </div>
    </div>
    <div v-else>
      <img :src="route.image" class="w-100" />
      <div class="list_title px-10">{{route.title}}</div>
      <div class="list_price px-10">单瓶价：&yen;{{route.price.toFixed(2)}}</div>
      <div class="between">
        <div class="list_liulanliang px-10">浏览量： 326</div>
        <div class="list_kucun px-10">库存： {{route.isOnSale==1?'有货':'无货'}}</div>
      </div>
      <div class="jiange"></div>
      <div class="content">
        <div class="between">
          <div>商品评价（{{list.comment.length}}）</div>
          <div class="chakan">
            <router-link :to="`/comment?id=${list.id}`">查看全部></router-link>
          </div>
        </div>
        <div v-for="(e,i) of list.comment" :key="i" v-if="i<2" class="comment">
          <img src="http://m.99mi.com/images/touxiang/v1.jpg" />
          <span>{{e.phone}}</span>
          <div>{{e.comment}}</div>
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
      <div class="jiange"></div>
      <div class="xiangqing">
        <img :src="e" v-for="(e,i) of list.xiangqing" :key="i" class="w-100" />
      </div>
    </div>
    <listFooter></listFooter>
  </div>
</template>

<script>
import listHeader from "../components/list_header";
import listFooter from "../components/list_footer";
export default {
  components: {
    listHeader,
    listFooter
  },
  data() {
    return {
      list: [],
      like: [],
      route: [],
      list_id: "",
      selected: ""
    };
  },
  mounted() {
    this.axios.get("/list").then(res => {
      this.list = res.data.results[0];
      this.list.swipe = this.list.swipe.slice(1, -1).split(",");
      this.list.xiangqing = this.list.xiangqing.slice(1, -1).split(",");
      this.list.comment = eval(this.list.comment);
    });
    this.axios.get("like").then(res => {
      this.like = res.data.results;
    });
    this.route = JSON.parse(this.$route.query.all);
    this.list_id = this.$route.query.id;
  },
  updated() {
    this.selected = this.$refs.head.selected;
  },
  watch: {
    selected() {
      if (this.selected == 1) {
        window.scrollTo(0, 0);
      } else if (this.selected == 2) {
        window.scrollTo(0, 1450);
      } else if (this.selected == 3) {
        window.scrollTo(0, 480);
      } else if (this.selected == 4) {
        window.scrollTo(0, 670);
      }
    }
  },
  methods: {
    //子头部组件点击时传入不同的值给父组件
    head() {
      this.selected = this.$refs.head.selected;
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.list .xiangqing {
  padding-top: 7vh;
  padding-bottom: 8vh;
}
.list .comment {
  color: #666;
  margin-top: 25px;
}
.list .comment > img {
  width: 1.5em;
  vertical-align: middle;
}
.list .comment > div {
  margin-top: 5px;
  font-size: 0.5em;
}
.list .chakan a {
  letter-spacing: 2px;
  color: #f22;
}
.jiange {
  background: #ddd;
  width: 100%;
  height: 10px;
}
.list .dianpu {
  padding-top: 10px;
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
.list {
  padding-top: 7vh;
  text-align: left;
}
.list .list_swipe {
  height: 100vw;
  width: 100%;
}
.list .list_title {
  font-size: 0.9rem;
  line-height: 1.3;
}
.list .list_price {
  font-size: 1.3em;
  color: #f22;
  margin-top: 20px;
  margin-bottom: 10px;
}
.list .list_liulanliang {
  font-size: 0.7em;
  color: #aaa;
}
.list .list_kucun {
  font-size: 0.7em;
  color: #aaa;
}
.list .content {
  width: 100%;
  height: auto;
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>