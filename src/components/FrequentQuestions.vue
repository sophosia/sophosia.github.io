<template>
  <div class="section-title">{{ $t("frequent-questions") }}</div>
  <div class="items-start">
    <div class="title">
      {{ $t("differ-from-zotero-q") }}
    </div>
    <div class="text">
      {{ $t("differ-from-zotero-a") }}
    </div>
    <div class="title">{{ $t("how-to-sync-q") }}</div>
    <div class="text">
      {{ $t("how-to-sync-a") }}
    </div>
    <div class="title">{{ $t("cannot-verify-developer-q") }}</div>
    <div class="text">
      {{ $t("cannot-verify-developer-a") }}
    </div>
    <div class="title">{{ $t("export-pdf-q") }}</div>
    <div class="text">
      {{ $t("export-pdf-a") }}
    </div>
    <div class="title">
      {{ $t("edit-in-other-app-q") }}
    </div>
    <div class="text">
      {{ $t("edit-in-other-app-a") }}
    </div>
    <div class="title">{{ $t("plugin-system-q") }}</div>
    <div
      v-html="$t('plugin-system-a')"
      class="text"
    ></div>
  </div>
</template>
