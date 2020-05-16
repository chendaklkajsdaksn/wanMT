<template>
  <div>
    <mt-header title="新品上市" class="my_header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div v-for="(e,i) of xpsh" :key="i" v-if="i<=8">
      <router-link :to="`/list?id=${e.id}`">
        <img :src="e.image" class="w-100" />
      </router-link>
    </div>
    <div class="xpsh">
      <router-link :to="`/list?id=${e.id}`" v-for="(e,i) of xpsh" v-if="i>8">
        <img :src="e.image" class="img w-100" />
      </router-link>
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.my_header {
  color: #333;
  background: #dfdfdf;
}
.xpsh {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 25vh;
}
.img {
  width: 100%;
  height: 100%;
}
</style>
<script>
import Footer from "../components/footer";
export default {
  components: {
    Footer
  },
  data() {
    return {
      xpsh: []
    };
  },
  mounted() {
    this.axios.get("/xpsh").then(res => {
      this.xpsh = res.data.results;
    });
  }
};
</script>