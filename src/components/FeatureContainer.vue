<template>
  <!-- <div class="section-title">{{ $t("features") }}</div> -->
  <div class="feature-container">
    <div class="feature-desc column">
      <div class="title">{{ $t("reference-management-title") }}</div>
      <div class="text">
        {{ $t("reference-management-text") }}
      </div>
    </div>
    <video
      class="feature-img"
      :src="`reference-page.mp4`"
      alt="reference-page.mp4"
      autoplay
      muted
      loop
    />
  </div>

  <div class="feature-container-reversed">
    <div class="feature-desc column">
      <div class="title">{{ $t("pdf-reader-title") }}</div>
      <div class="text">
        {{ $t("pdf-reader-text") }}
      </div>
    </div>
    <video
      class="feature-img"
      :src="`reader-page.mp4`"
      alt="reader-page.mp4"
      autoplay
      muted
      loop
    />
  </div>

  <div class="feature-container">
    <div class="feature-desc column">
      <div class="title">{{ $t("markdown-editor-title") }}</div>
      <div class="text">
        {{ $t("markdown-editor-text") }}
      </div>
    </div>

    <video
      class="feature-img"
      :src="`note-page.mp4`"
      alt="note-page.mp4"
      autoplay
      muted
      loop
    />
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
      :src="`excalidraw-page-dark.png`"
      alt="excalidraw-page.png"
    />
  </div>
</template>
