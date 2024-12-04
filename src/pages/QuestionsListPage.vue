<template>
  <q-page class="scrollable-container">
    <question-list-component/>
  </q-page>
</template>

<script setup lang="ts">

import QuestionListComponent from 'components/questionListComponent.vue';

defineOptions({
  name: 'QuestionsListPage'
});


</script>
