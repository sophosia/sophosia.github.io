<template>
  <div class="link-container">
    <div class="download-btns-container">
      <q-btn
        v-for="option in downloadOptions"
        :key="option.label"
        no-caps
        class="button"
        :href="option.link"
        target="_blank"
        :disable="!['Windows', 'Linux', 'Mac'].includes(os)"
        color="primary"
      >
        <div class="button-content">
          <q-icon name="mdi-download"></q-icon>
          <div class="column items-center">
            <div>{{ option.label }}</div>
            <div style="font-size: 0.8em">
              {{ option.type }}
            </div>
          </div>
        </div>
      </q-btn>
    </div>
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
const downloadOptions = ref(
  [] as { label: string; link: string; type: string }[]
);
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
  downloadOptions.value = [];
  const prefix = `https://github.com/sophosia/sophosia/releases/download/v${version.value}`;
  switch (os.value) {
    case "Mac":
      downloadOptions.value.push({
        label: t("get-sophosia-for", [os.value]),
        link: `${prefix}/sophosia_${version.value}_x64.dmg`,
        type: `${t("installer")} (dmg)`,
      });
      break;
    case "Linux":
      downloadOptions.value.push({
        label: t("get-sophosia-for", [os.value]),
        link: `${prefix}/sophosia_${version.value}_amd64.AppImage`,
        type: `${t("portable")} (appimage)`,
      });
      break;
    case "Windows":
      downloadOptions.value.push({
        label: t("get-sophosia-for", [os.value]),
        link: `${prefix}/sophosia_${version.value}_x64_en-US.msi`,
        type: `${t("installer")} (msi)`,
      });
      downloadOptions.value.push({
        label: t("get-sophosia-for", [os.value]),
        link: `${prefix}/sophosia_${version.value}_portable.exe`,
        type: `${t("portable")} (exe)`,
      });
      break;
    default:
      downloadOptions.value.push({
        label: t("sophosia-is-coming", [os.value]),
        link: "",
        type: "",
      });
      break;
  }
}
</script>
