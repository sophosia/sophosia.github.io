<template>
  <div class="link-container">
    <q-btn
      no-caps
      class="button"
      :label="downloadLabel"
      :href="downloadLink"
      icon="mdi-download"
      target="_blank"
      :disable="!['Windows', 'Linux', 'Mac'].includes(os)"
      color="primary"
    />
    <a
      class="link"
      href="https://github.com/sophosia/sophosia/releases/latest"
      target="_blank"
    >
      {{ $t("more-platform") }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n({ useScope: "global" });

const os = ref("");
const downloadLabel = ref("");
const downloadLink = ref("");
const version = ref("");

watch(locale, () => {
  prepareLinks();
});

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
        Accept: "application/vnd.github+json"
      }
    }
  );
  const data = await response.json();
  version.value = data.tag_name.slice(1) as string; // use slice to get rid of "v"
}

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform =
      window.navigator.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ["Macintosh", "macOS", "MacIntel", "MacPPC", "Mac68K"],
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
      downloadLabel.value = t("get-sophosia-for", [`${os.value} (dmg)`]);
      downloadLink.value = `${prefix}/sophosia_${version.value}_x64.dmg`;
      break;
    case "Linux":
      downloadLabel.value = t("get-sophosia-for", [`${os.value} (appimage)`]);
      downloadLink.value = `${prefix}/sophosia_${version.value}_amd64.AppImage`;
      break;
    case "Windows":
      downloadLabel.value = t("get-sophosia-for", [`${os.value} (msi)`]);
      downloadLink.value = `${prefix}/sophosia_${version.value}_x64_en-US.msi`;
      break;
    default:
      downloadLabel.value = t("sophosia-is-coming", [os.value]);
      break;
  }
}
</script>
<style scoped>
.link-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button {
  border-radius: 20px; /* Adjust the value to make angles less harsh */
}

.link {
  margin-top: 10px; /* Adjust space between the button and the link */
  font-size: 1em; /* Smaller font size for the link */
}
</style>
