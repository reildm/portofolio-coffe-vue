<template>
  <div class="border rounded-md shadow">
    <img :src="'assets/' + data.image" :alt="data.link" />
    <div class="p-4">
      <div class="text-lg font-bold">{{ data.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
</style>