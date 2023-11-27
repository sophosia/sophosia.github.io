<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class="header"
    >
      <q-toolbar>
        <img
          src="icons/favicon-32x32.png"
          alt="logo"
        />
        <q-toolbar-title> Sophosia </q-toolbar-title>

        <ToolBarBtns v-model="showDrawer" />
      </q-toolbar>
    </q-header>

    <ToolBarDrawer v-model="showDrawer" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import ToolBarBtns from "src/components/ToolBarBtns.vue";
import ToolBarDrawer from "src/components/ToolBarDrawer.vue";
import { ref } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
$q.dark.set(true);

const showDrawer = ref(false);
</script>

<style scoped lang="scss">
@import "src/css/responsive/index.scss";
</style>
