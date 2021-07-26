<template>
  <div container="~">
    <Card>
      <h4 text="xl" font="bold">Add new item</h4>
      <!-- Create new item -->
      <FormAddItem />
    </Card>
    <Card>
      <h4>Your items ({{ cart.itemsCount }})</h4>
      <ItemsList />
    </Card>
  </div>
</template>

<script setup>
import Card from "./components/Card.vue"
import FormAddItem from "./components/FormAdditem.vue"
import ItemsList from "./components/ItemsList.vue"
import { useCartStore } from "./store/index"
const cart = useCartStore()
</script>
