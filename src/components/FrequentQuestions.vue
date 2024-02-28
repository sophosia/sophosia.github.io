<template>
  <div class="section-title">{{ $t("frequent-questions") }}</div>
  <div class="title-questions">
    <q-expansion-item
      v-for="(item, index) in faqItems"
      :key="index"
      :label="$t(item.question)"
      v-model:expanded="expandedStates[index]"
    >
      <div
        class="support-text answer-text"
        v-html="$t(item.answer)"
      ></div>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { QExpansionItem } from "quasar";
import { ref } from "vue";

const faqItems = [
  { question: "differ-from-zotero-q", answer: "differ-from-zotero-a" },
  { question: "how-to-sync-q", answer: "how-to-sync-a" },
  { question: "export-pdf-q", answer: "export-pdf-a" },
  { question: "edit-in-other-app-q", answer: "edit-in-other-app-a" },
  { question: "plugin-system-q", answer: "plugin-system-a" },
];

const expandedStates = ref(faqItems.map((item, index) => index === 0));
</script>
<style scoped>
.answer-text {
  padding-left: 20px; /* Adjust this value as needed */
}

.questions {
  font-size: 1.2rem;
  color: blue;
}
</style>
