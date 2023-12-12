<template>
  <div class="section-title">{{ $t("features") }}</div>
  <div class="feature-container">
    <img
      class="feature-img"
      :src="`library-page-${$q.dark.isActive ? 'dark' : 'light'}.png`"
      alt="library-page.png"
    />
    <div class="feature-desc column">
      <div class="title">{{ $t("reference-management-title") }}</div>
      <div class="text">
        {{ $t("reference-management-text") }}
      </div>
    </div>
  </div>

  <div class="feature-container-reversed">
    <div class="feature-desc column">
      <div class="title">{{ $t("pdf-reader-title") }}</div>
      <div class="text">
        {{ $t("pdf-reader-text") }}
      </div>
    </div>
    <img
      class="feature-img"
      :src="`reader-page-${$q.dark.isActive ? 'dark' : 'light'}.png`"
      alt="reader-page.png"
    />
  </div>

  <div class="feature-container">
    <img
      class="feature-img"
      :src="`note-page-${$q.dark.isActive ? 'dark' : 'light'}.png`"
      alt="note-page.png"
    />
    <div class="feature-desc column">
      <div class="title">{{ $t("markdown-editor-title") }}</div>
      <div class="text">
        {{ $t("markdown-editor-text") }}
      </div>
    </div>
  </div>

  <div class="feature-container-reversed">
    <div class="feature-desc column">
      <div class="title">{{ $t("excalidraw-title") }}</div>
      <div class="text">
        {{ $t("excalidraw-text") }}
      </div>
    </div>
    <img
      class="feature-img"
      :src="`excalidraw-page-${$q.dark.isActive ? 'dark' : 'light'}.png`"
      alt="excalidraw-page.png"
    />
  </div>
</template>
