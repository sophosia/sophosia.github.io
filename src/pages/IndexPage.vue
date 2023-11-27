<template>
  <q-page class="page-container">
    <div class="column items-center">
      <h2 class="slogan">
        {{ "Sophosia: Your Research Helper" }}
      </h2>
      <div class="app-description">
        THE reference manager with features including PDF reading/annotating,
        Markdown/Excalidraw note-taking, project/note linking, and more...
      </div>

      <div class="link-container">
        <q-btn
          no-caps
          class="button"
          :label="downloadLabel"
          :href="downloadLink"
          icon="mdi-download"
          target="_blank"
          :disable="['Android', 'iOS'].includes(os)"
          color="primary"
        />
        <a
          class="link"
          href="https://github.com/sophosia/sophosia/releases/latest"
          target="_blank"
        >
          {{ `More platforms` }}
        </a>
      </div>

      <img
        class="screenshot"
        src="~assets/screenshot.png"
        alt="screenshot.png"
      />

      <div class="feature-container">
        <img
          class="feature-img"
          src="~assets/library-page.png"
          alt="library-page.png"
        />
        <div class="feature-desc column items-center">
          <div class="feature-title">Reference Management</div>
          <div class="feature-description">
            Manage your references and corresponding notes in one place
          </div>
        </div>
      </div>

      <div class="feature-container-reversed">
        <div class="feature-desc column items-center">
          <div class="feature-title">Built-in PDF Reader</div>
          <div class="feature-description">
            Read and annotate PDF. Moreover, LaTeX is supported in the
            annotaiton
          </div>
        </div>
        <img
          class="feature-img"
          src="~assets/reader-page.png"
          alt="reader-page.png"
        />
      </div>

      <div class="feature-container">
        <img
          class="feature-img"
          src="~assets/note-page.png"
          alt="note-page.png"
        />
        <div class="feature-desc column items-center">
          <div class="feature-title">WYSIWYG Markdown Editor</div>
          <div class="feature-description">An elegant way to write note</div>
        </div>
      </div>

      <div class="feature-container-reversed">
        <div class="feature-desc column items-center">
          <div class="feature-title">Excalidraw Integrated</div>
          <div class="feature-description">
            Free your mind using the canvas without border
          </div>
        </div>
        <img
          class="feature-img"
          src="~assets/note-page.png"
          alt="note-page.png"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const slide = ref("library");
const release = ref({});
const os = ref("");
const downloadLabel = ref("");
const downloadLink = ref("");
const version = ref("");

onMounted(async () => {
  await getVersion();
  getOS();
  prepareLinks();
});

async function getVersion() {
  const response = await fetch(
    "https://api.github.com/repos/sophosia/sophosia/releases/latest",
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );
  const data = await response.json();
  version.value = data.tag_name.slice(1) as string; // use slice to get rid of "v"
}

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform =
      window.navigator.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];

  if (macosPlatforms.indexOf(platform) !== -1) {
    os.value = "Mac";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os.value = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os.value = "Windows";
  } else if (/Android/.test(userAgent)) {
    os.value = "Android";
  } else if (/Linux/.test(platform)) {
    os.value = "Linux";
  }
}

function prepareLinks() {
  const prefix = `https://github.com/sophosia/sophosia/releases/download/v${version.value}`;
  switch (os.value) {
    case "Mac":
      downloadLabel.value = `Get Sophosia for ${os.value} (dmg)`;
      downloadLink.value = `${prefix}/sophosia_${version.value}_x64.dmg`;
      break;
    case "Linux":
      downloadLabel.value = `Get Sophosia for ${os.value} (AppImage)`;
      downloadLink.value = `${prefix}/sophosia_${version.value}_amd64.AppImage`;
      break;
    case "Windows":
      downloadLabel.value = `Get Sophosia for ${os.value} (msi)`;
      downloadLink.value = `${prefix}/sophosia_${version.value}_x64-setup.exe`;
      break;
    default:
      downloadLabel.value = `Sophosia for ${os.value} is coming`;
      break;
  }
}
</script>

<style scoped lang="scss">
@import "src/css/responsive/index.scss";
</style>
