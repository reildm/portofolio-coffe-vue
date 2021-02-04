<template>
  <div class="home">
    <Menu />
    <div class="flex justify-between p-4">
      <div>Hot Drink</div>
      <router-link to='/hot-drink'>View All</router-link>
    </div>
    <div
      class="w-1/2 inline-block p-4"
      v-for="(item, index) in dataMenu"
      :key="index"
    >
      <CardProduct :data=item />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Menu from "@/components/Menu.vue";
import CardProduct from "@/components/CardProduct.vue";
export default {
  name: "Home",
  data() {
    return {
      dataMenu: null,
    }
  },
  components: {
    Menu,
    CardProduct
  },
  mounted() {
    let payload = {
      url: "hotdrink",
      page: 1,
      limit: 4
    }
    this.getItem(payload).then((response) => {
      this.dataMenu = response.data
    })
  },
  methods: {
    ...mapActions(["getItem"])
  },
};
</script>
