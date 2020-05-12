<template>
  <div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="商城">
        <img slot="icon" src="http://m.99mi.com/img/img_new/5.png" v-if="selected=='商城'" />

        <img slot="icon" src="http://m.99mi.com/img/img_new/1.png" v-else />
        商城
      </mt-tab-item>
      <mt-tab-item id="分类">
        <img slot="icon" src="http://m.99mi.com/img/img_new/6.png" v-if="selected=='分类'" />
        <img slot="icon" src="http://m.99mi.com/img/img_new/2.png" v-else />
        分类
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="http://m.99mi.com/img/img_new/7.png" v-if="selected=='购物车'" />
        <img slot="icon" src="http://m.99mi.com/img/img_new/3.png" v-else />
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="http://m.99mi.com/img/img_new/8.png" v-if="selected=='我的'" />
        <img slot="icon" src="http://m.99mi.com/img/img_new/4.png" v-else />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "商城"
    };
  }
};
</script>
<style scoped>
</style>
<script>
export default {
  props: ["active"],
  data() {
    return {
      selected: this.active
    };
  },
  watch: {
    selected(value) {
      if (value == "商城") {
        this.$router.push("/");
      } else if (value == "分类") {
        this.$router.push("/xilie?order=0");
      } else if (value == "购物车") {
        this.$router.push("/car");
      } else {
        this.$router.push("/me");
      }
    }
  }
};
</script>