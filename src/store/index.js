import { defineStore } from "pinia"

const useStore = defineStore({
  id: "main",
  // can also be defined with an arrow function if you prefer that syntax
  state: () => ({ counter: 0 }),
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Match.random())
    },
  },
})

export { useStore }
