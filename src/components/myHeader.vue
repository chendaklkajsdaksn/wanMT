<template>
  <div class="head">
    <div>
      <router-link to="/">
        <img src="http://m.99mi.com/img/img_new/logo.png" />
      </router-link>
    </div>
    <div>
      <mt-search v-model="search" placeholder="搜索" class="mysearch"></mt-search>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style>
.head {
  top: 0;
  height: 130px;
  width: 100%;
  background: #fff;
}
.mysearch {
  height: 52px;
  margin-left: 10px;
  margin-right: 10px;
}
.mint-searchbar-inner .mintui-search {
  padding: 2px;
  font-size: 20px;
}
</style>