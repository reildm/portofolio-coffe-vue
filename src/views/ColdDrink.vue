<template>
  <div class="coldDrink">
    <Menu />
    <div class="text-lg font-bold pt-4 px-4">Cold Drink</div>
    <div class="pb-24">
        <div
        class="w-1/2 inline-block p-4"
        v-for="(item, index) in dataColdDrink"
        :key="index"
        >
        <CardProduct :data="item" />
        </div>
    </div>
    <BottomNav :menuActive='"colddrink"' />
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
      dataColdDrink: null,
    };
  },
  components: {
    Menu,
    CardProduct,
    BottomNav,
  },
  mounted() {
    let payload = {
      url: "colddrink",
    };
    this.getItem(payload).then((response) => {
      this.dataColdDrink = response.data;
    });
  },
  methods: {
    ...mapActions(["getItem"]),
  },
};
</script>

<style>
</style>