<template>
  <q-layout view="hhh lpR lFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round :icon="functionalStoreUse.leftDrawerValue ? 'menu_open' : 'menu'" @click="functionalStoreUse.changeLeftDrawerValue()" />

        <q-toolbar-title>
          <q-avatar rounded>
            <img src="src/assets/icon-logo.svg" alt="avatar is here">
          </q-avatar>
          Pool Maker
        </q-toolbar-title>
      </q-toolbar>
<!--      <q-tabs align="left">-->
<!--        <q-route-tab to="/page1" label="Page One" />-->
<!--        <q-route-tab to="/page2" label="Page Two" />-->
<!--        <q-route-tab to="/page3" label="Page Three" />-->
<!--      </q-tabs>-->
    </q-header>

    <q-drawer v-model="functionalStoreUse.leftDrawerValue" side="left" behavior="desktop" class="leftSideDrawer">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple to="/list">
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              List
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/edit">
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>

            <q-item-section>
              Edit
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="favorite" />
            </q-item-section>

            <q-item-section>
              Favorite
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { onMounted} from 'vue';
import { questionListStore } from 'stores/store';
import { functionalStore } from 'stores/functional-store';

const store = questionListStore();
const functionalStoreUse = functionalStore()

onMounted(() => {
  store.getQuestionList();
  console.log(store.data);
})

defineOptions({
  name: 'MainLayout'
});
</script>
