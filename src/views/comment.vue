<template>
  <div class="comments">
    <mt-header title="商品评论页" fixed class="head">
      <router-link to slot="left">
        <mt-button icon="back" @click="back"></mt-button>
      </router-link>
    </mt-header>
    <div v-for="(e,i) of list.comment" :key="i" class="comment" v-if="i<10*page&&i>10*page-10">
      <img src="http://m.99mi.com/images/touxiang/v1.jpg" />
      <span>{{e.phone}}</span>
      <div>{{e.comment}}</div>
    </div>
    <div>
      <mt-button size="normal" class="btn" @click="dec" v-if="page>1">上一页</mt-button>
    </div>
    <div>
      <mt-button size="normal" class="btn" @click="inc" v-if="page<page_total">下一页</mt-button>
    </div>
  </div>
</template>
<style scoped>
.btn {
  margin: 20px;
}
.head {
  background: rgb(209, 15, 38);
}
.comments {
  padding-top: 7vh;
}
.comment {
  color: #666;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 15px;
}
.comment > img {
  width: 1.8em;
  vertical-align: middle;
}
.comment > div {
  margin-top: 8px;
  font-size: 0.8em;
}
</style>
<script>
export default {
  data() {
    return {
      list: [],
      comment: [],
      page: 1,
      page_total: 1
    };
  },
  mounted() {
    this.axios.get("/list").then(res => {
      this.list = res.data.results[0];
      this.list.swipe = this.list.swipe.slice(1, -1).split(",");
      this.list.xiangqing = this.list.xiangqing.slice(1, -1).split(",");
      this.list.comment = eval(this.list.comment);
      this.comment = this.list.comment;
      this.page_total = Math.ceil(this.comment.length / 10);
      console.log(this.page_total);
    });
  },
  methods: {
    //页头点<返回
    back() {
      this.$router.back();
    },
    //按上一页或者下一页更新数据
    inc() {
      if (this.page < this.page_total) {
        this.page++;
        console.log(this.page);
      }
    },
    dec() {
      if (this.page > 1) {
        this.page--;
        console.log(this.page);
      }
    }
  }
};
</script>