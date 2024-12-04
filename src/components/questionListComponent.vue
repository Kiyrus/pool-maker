<template>
  <q-table
    class="my-sticky-header-table"
    no-data-label="Нет данных для отображения"
    :rows='rows'
    :columns='columns'
    flat bordered
    row-key='id'
    table-header-class='table--header'
    dense
  >
    <template v-slot:body="props">
      <q-tr>
        <q-td :props='props' key="actionsLeft"/>
        <q-td  :props='props' key="questionOrder">
          {{ props.row.questionOrder}}
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
        <q-td :props='props' key="actionsRight"/>
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

type Align = 'left' | 'center' | 'right';

const columns = [
  { name: 'actionsLeft', label: '', field: 'actionsLeft', align: 'center' as Align },
  { name: 'questionOrder', label: '№ вопроса', field: 'questionOrder', align: 'center' as Align },
  { name: 'questionText', label: 'Текст вопроса', field: 'questionText', align: 'center' as Align },
  { name: 'answersCount', label: 'Количество ответов', field: 'answersCount', align: 'center' as Align },
  { name: 'answerType', label: 'Метод ответа', field: 'answerType', align: 'center' as Align },
  { name: 'fieldComment', label: 'Комментарий', field: 'fieldComment', align: 'center' as Align },
  { name: 'questionType', label: 'Опрос/Тест', field: 'questionType', align: 'center' as Align },
  { name: 'actionsRight', label: '', field: 'actionsRight', align: 'center' as Align },
];

</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 100%

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: white

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
