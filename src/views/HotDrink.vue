<template>
  <div class="hotDrink">
    <Menu />
    <div class="text-lg font-bold pt-4 px-4">Hot Drink</div>
    <div class="pb-24">
        <div
        class="w-1/2 inline-block p-4"
        v-for="(item, index) in dataHotDrink"
        :key="index"
        >
        <CardProduct :data="item" />
        </div>
    </div>
    <BottomNav :menuActive='"hotdrink"' />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Menu from "@/components/Menu.vue";
import CardProduct from "@/components/CardProduct.vue";
import BottomNav from "@/components/BottomNav.vue";
export default {
  name: "HotDrink",
  data() {
    return {
      dataHotDrink: null,
    };
  },
  components: {
    Menu,
    CardProduct,
    BottomNav,
  },
  mounted() {
    let payload = {
      url: "hotdrink",
    };
    this.getItem(payload).then((response) => {
      this.dataHotDrink = response.data;
    });
  },
  methods: {
    ...mapActions(["getItem"]),
  },
};
</script>

<style>
</style>