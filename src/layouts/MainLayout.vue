<template>
  <q-layout
    view="lHh Lpr lFf"
    class="bg-dark"
  >
    <q-header
      elevated
      class="header text-white"
    >
      <q-toolbar>
        <img
          src="icons/favicon-32x32.png"
          alt="logo"
        />
        <q-toolbar-title> Sophosia </q-toolbar-title>

        <q-tabs
          v-model="tab"
          no-caps
          shrink
          stretch
        >
          <q-route-tab
            name="github"
            icon="mdi-github"
            href="https://github.com/ResearchHelper/research-helper"
            target="_blank"
          />
          <q-route-tab
            name="doc"
            :label="$t('documentation')"
            href="https://researchhelper.github.io/docs.research.helper/"
            target="_blank"
          />
        </q-tabs>
        <q-select
          outlined
          dark
          dense
          v-model="language"
          :options="languageOptions"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useQuasar } from "quasar";
const { locale } = useI18n({ useScope: "global" });
const $q = useQuasar();
$q.dark.set(true);

const tab = ref("");
const languageOptions = [
  { value: "en_US", label: "English" },
  { value: "zh_CN", label: "中文" },
];
const language = computed({
  get() {
    for (let option of languageOptions) {
      if (option.value === locale.value) return option;
    }
    return { value: "en_US", label: "English" };
  },
  set(option: { value: string; label: string }) {
    locale.value = option.value;
  },
});
</script>

<style scoped lang="scss">
.header {
  /* fuzzy glass */
  background: #0000001a;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
}
</style>
