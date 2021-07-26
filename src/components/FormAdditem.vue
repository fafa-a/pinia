<template>
  <form @submit.prevent="submit" border="dark-50 1px rounded-sm" flex="~ col">
    <div>
      <label> Name </label>
      <input v-model="inputs.name" type="text" class="form-control" />
    </div>
    <div>
      <label class="form-label"> URL </label>
      <input v-model="inputs.url" type="text" class="form-control" />
    </div>
    <button
      type="submit"
      border="1px rounded-sm"
      bg="red-500"
      class="text-light-50"
    >
      Add
    </button>
  </form>
</template>

<script setup>
import { useCartStore } from "../store/index"
const cart = useCartStore()
ref: inputs = { name: "", url: "" }
const submit = () => {
  cart.addItem({ ...inputs })
  inputs.name = ""
  inputs.url = ""
}
</script>

<style lang="scss" scoped></style>
