<template>
  <div v-for="item in cart.items" :key="item.name" class="row my-1">
    <div class="col">
      <a :href="item.url">
        <h5>{{ item.name }}</h5>
      </a>
    </div>
    <div class="cols col-auto">
      <button class="btn btn-danger" @click="cart.removeItem(item)">
        Remove
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../store/index"
const cart = useCartStore()
</script>

<style lang="scss" scoped></style>
