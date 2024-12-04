<template>
  <q-layout view="hhh lpR lFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar rounded>
            <img src="src/assets/icon-logo.svg" alt="avatar is here">
          </q-avatar>
          Pool Maker
        </q-toolbar-title>
      </q-toolbar>
<!--  <q-tabs align="left">-->
<!--    <q-route-tab to="/page1" label="Page One" />-->
<!--    <q-route-tab to="/page2" label="Page Two" />-->
<!--    <q-route-tab to="/page3" label="Page Three" />-->
<!--  </q-tabs>-->
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" behavior="desktop" class="leftSideDrawer">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              Questions List
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
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
import { onMounted, ref } from 'vue';
import { questionListStore } from 'stores/store';

defineOptions({
  name: 'MainLayout'
});

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


const store = questionListStore();

onMounted(() => {
  store.getQuestionList();
  console.log(store.data);
})

</script>
