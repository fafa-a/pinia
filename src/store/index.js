import { defineStore } from "pinia"

const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [],
  }),
  getters: {
    itemsCount() {
      return this.items.length
    },
  },
  actions: {
    addItem(item) {
      this.items.push(item)
    },
    removeItem(item) {
      const i = this.items.findIndex((s) => s.name === item.name)
      if (i > -1) this.items.splice(i, 1)
    },
  },
})

export { useCartStore }
