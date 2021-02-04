<template>
  <div
    class="fixed bg-white border-t border-centra border-opacity-25 shadow-inner right-0 bottom-0 left-0"
  >
    <div class="flex">
      <div
        class="border-b-4 w-1/4 py-4"
        :class="menuActive === 'hotdrink' ? 'border-centra' : 'border-transparent'"
      >
        <router-link to="/hot-drink">
          <img
            class="w-1/4 m-auto"
            :src="
              menuActive === 'hotdrink'
                ? 'assets/hot-drink-active.svg'
                : 'assets/hot-drink-inactive.svg'
            "
          />
        </router-link>
      </div>
      <div
        class="border-b-4 w-1/4 py-4"
        :class="menuActive === 'colddrink' ? 'border-centra' : 'border-transparent'"
      >
        <router-link to="/cold-drink">
          <img
            class="w-1/4 m-auto"
            :src="
              menuActive === 'colddrink'
                ? 'assets/cold-drink-active.svg'
                : 'assets/cold-drink-inactive.svg'
            "
          />
        </router-link>
      </div>
      <div
        class="border-b-4 w-1/4 py-4"
        :class="menuActive === 'food' ? 'border-centra' : 'border-transparent'"
      >
        <router-link to="/food">
          <img
            class="w-1/4 m-auto"
            :src="
              menuActive === 'food'
                ? 'assets/food-active.svg'
                : 'assets/food-inactive.svg'
            "
          />
        </router-link>
      </div>
      <div
        class="border-b-4 w-1/4 py-4"
        :class="menuActive === 'snack' ? 'border-centra' : 'border-transparent'"
      >
        <router-link to="/snack">
          <img
            class="w-1/4 m-auto"
            :src="
              menuActive === 'snack'
                ? 'assets/snack-active.svg'
                : 'assets/snack-inactive.svg'
            "
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  props: {
    menuActive: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
.fixed {
  max-width: 425px;
  margin: auto;
}
</style>