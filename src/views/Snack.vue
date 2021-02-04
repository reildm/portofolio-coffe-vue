<template>
  <div class="snack">
    <Menu />
    <div class="text-lg font-bold pt-4 px-4">Foods</div>
    <div class="pb-24">
        <div
        class="w-1/2 inline-block p-4"
        v-for="(item, index) in dataSnack"
        :key="index"
        >
        <CardProduct :data="item" />
        </div>
    </div>
    <BottomNav :menuActive='"snack"' />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Menu from "@/components/Menu.vue";
import CardProduct from "@/components/CardProduct.vue";
import BottomNav from "@/components/BottomNav.vue";
export default {
  name: "ColdDrink",
  data() {
    return {
      dataSnack: null,
    };
  },
  components: {
    Menu,
    CardProduct,
    BottomNav,
  },
  mounted() {
    let payload = {
      url: "snack",
    };
    this.getItem(payload).then((response) => {
      this.dataSnack = response.data;
    });
  },
  methods: {
    ...mapActions(["getItem"]),
  },
};
</script>

<style>
</style>