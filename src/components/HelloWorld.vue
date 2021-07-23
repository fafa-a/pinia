<template>
  <h1>{{ msg }}</h1>

  <div flex="~ col md:row" justify="evenly lg:center">
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    <a href="https://windicss.org/" target="_blank">Windi CSS</a>
    <a href="https://windicss.org/posts/attributify.html" target="_blank"
      >Windi CSS Attributy Mode</a
    >
    <a href="https://github.com/antfu/vue-global-api" target="_blank"
      >Vue Composition API Globally</a
    >
  </div>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>

defineProps({
  msg: String,
})

ref: count = 0
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
