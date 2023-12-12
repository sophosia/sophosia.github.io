<template>
  <q-page class="page-container">
    <SloganSection />

    <DownloadButton />

    <img
      class="screenshot"
      :src="`screenshot-${$q.dark.isActive ? 'dark' : 'light'}.png`"
      alt="screenshot.png"
    />

    <hr style="width: 100%" />
    <FeatureContainer />

    <hr style="width: 100%" />
    <FrequentQuestions />

    <hr style="width: 100%" />
    <SupportMethods />
  </q-page>
</template>

<script setup lang="ts">
import SloganSection from "src/components/SloganSection.vue";
import DownloadButton from "src/components/DownloadButton.vue";
import FeatureContainer from "src/components/FeatureContainer.vue";
import FrequentQuestions from "src/components/FrequentQuestions.vue";
import SupportMethods from "src/components/SupportMethods.vue";
</script>

<style lang="scss">
@import "src/css/responsive/index.scss";
</style>
