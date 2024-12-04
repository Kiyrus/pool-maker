<template>
  <q-table
    no-data-label="Нет данных для отображения"
    :rows='rows'
    :columns='columns'
    flat bordered
    row-key='id'
    table-header-class='table--header'
    dense
    v-model:pagination="store.pagination"
  >
    <template v-slot:body="props">
      <q-tr>
        <q-td  :props='props' key="questionOrder">
          {{ props.row.questionOrder + 1}}
        </q-td>
        <q-td :props="props" key="questionText">
          {{props.row.questionText}}
        </q-td>
        <q-td :props="props" key="answersCount">
          {{props.row.answersCount}}
        </q-td>
        <q-td :props='props' key="answerType">
          <q-icon v-model='props.row.answerType' :name="props.row.answerType ? 'done' : 'radio_button_checked'"/>
        </q-td>
        <q-td :props='props' key="fieldComment">
          <q-icon v-model='props.row.fieldComment' :name="props.row.fieldComment ? 'done' : 'close'"/>
        </q-td>
        <q-td :props='props' key="questionType">
          {{ props.row.questionType ? "Опрос" : "Тест"}}
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script lang="ts" setup>

import { computed} from 'vue';
import { questionListStore } from 'stores/store';

const store = questionListStore();


const rows = computed(() => store.data.map((item) => {
  return {
    questionId: item.questionId,
    questionOrder: item.questionOrder,
    questionText: item.questionText,
    answersCount: item.answersCount,
    answerType: item.answerType,
    fieldComment: item.fieldComment,
    questionType: item.questionType,
    questionError: item.questionError,
  }
}))

const columns = [
  {name: 'questionOrder', label: '№ вопроса', field: 'questionOrder'},
  {name: 'questionText', label: 'Текст вопроса', field: 'questionText'},
  {name: 'answersCount', label: 'Количество ответов', field: 'answersCount'},
  {name: 'answerType', label: 'Метод ответа', field: 'answerType'},
  {name: 'fieldComment', label: 'Комментарий', field: 'fieldComment'},
  {name: 'questionType', label: 'Опрос/Тест', field: 'questionType'},
  {name: 'actions', label: '', field: 'actions'},
];

</script>
