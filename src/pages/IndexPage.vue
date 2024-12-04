<template>
  <q-page class="row items-center justify-evenly">
    <question-list-component/>
  </q-page>
</template>

<script setup lang="ts">

import QuestionListComponent from 'components/questionListComponent.vue';

defineOptions({
  name: 'IndexPage'
});


</script>
