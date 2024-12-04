import { defineStore } from 'pinia';
import axios from 'axios';

export const questionListStore = defineStore('questionListStore', {
  state: (): questionList => ({
    pagination: {
      page: 1,
      rowsPerPage: 10,
    },
    data: []
  }),
  actions: {
    getQuestionList() {
      axios.get('public/mockData/mockQuestionList.json').then((response) => {
        this.data = response.data;
      })
    },
  },
})
