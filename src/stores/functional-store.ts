import { defineStore } from 'pinia';

export const functionalStore = defineStore('functionalStore', {
  state: () => ({
    leftDrawerValue: false
  }),
  actions: {
    changeLeftDrawerValue() {
      this.leftDrawerValue = !this.leftDrawerValue
    }
  }
})

