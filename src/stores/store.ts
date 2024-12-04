import { defineStore } from 'pinia';
import axios from 'axios';

export const questionListStore = defineStore('questionListStore', {
  state: (): questionList => ({
    data: []
  }),
  actions: {
    getQuestionList() {
      axios.get('public/mockData/mockQuestionList.json').then((response) => {
        this.data = response.data.data;
      })
    },
  },
})
