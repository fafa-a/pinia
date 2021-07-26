<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>{{ store.counter }}</p>
  <p>{{ store.doubleCount }}</p>
  <p>{{ store.doublePlusOne }}</p>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue"
import { useStore } from "./store/index"

const store = useStore()
store.counter = 3
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
