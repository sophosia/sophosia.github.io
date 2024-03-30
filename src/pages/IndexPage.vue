<template>
  <div class="main">
    <q-page class="page-container">
      <SloganSection />

      <DownloadButton />

      <img
        class="sopho-app"
        :src="`sopho-app.png`"
        alt="sopho-app.png"
      />

      <hr style="width: 100%" />
      <FeatureContainer />

      <hr style="width: 100%" />
      <FrequentQuestions />

      <hr style="width: 100%" />
      <SupportMethods />
      <DownloadButton
        style="
          font-size: 0.5em; /* Smaller font size for the link */
          border-radius: 20px;
          background-color: primary;
          color: var(--color-text);
        "
      />
    </q-page>
  </div>
</template>

<script setup lang="ts">
import DownloadButton from "src/components/DownloadButton.vue";
import FeatureContainer from "src/components/FeatureContainer.vue";
import FrequentQuestions from "src/components/FrequentQuestions.vue";
import SloganSection from "src/components/SloganSection.vue";
import SupportMethods from "src/components/SupportMethods.vue";
</script>

<style lang="scss">
@import "src/css/responsive/index.scss";
</style>
