<template>
  <q-page>
    <div class="column items-center">
      <h2 class="text-white title">
        {{ "Accelerate Your Research" }}
      </h2>

      <div class="row items-center">
        <q-btn
          square
          no-caps
          class="bg-primary text-white button"
          size="xl"
          label="Try Sophosia"
          icon="bi-download"
          href="https://github.com/ResearchHelper/research-helper/releases"
          target="_blank"
        />
        <div class="q-ml-md text-h6 text-white">
          {{ `Version: ${release?.tag_name}` }}
        </div>
      </div>

      <q-carousel
        arrows
        animated
        infinite
        swipeable
        autoplay
        v-model="slide"
        class="q-ma-lg"
        style="width: 62vw; height: 70vh"
      >
        <q-carousel-slide
          name="library"
          img-src="~assets/library-page.png"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-primary text-h4">Reference Management</div>
            <ul>
              <li>
                Favorites, folders, tags, search, etc. All essential functions
                are there
              </li>
              <li>
                Able to one-click-retrieve meta information and related
                reference by providing identifier such as DOI
              </li>
            </ul>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="reader"
          img-src="~assets/reader-page.png"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-primary text-h4">Built-in PDF Reader</div>
            <ul>
              <li>Able to adjust page layout, light/dark mode and more</li>
              <li>Support markdown comment (also latex) in annotations</li>
              <li>Able to preview internal links in hover windows</li>
            </ul>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="note"
          img-src="~assets/note-page.png"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-primary text-h4">WYSIWYG Markdown Editor</div>
            <ul>
              <li>Support WYSIWYG markdown note and excalidraw note</li>
              <li>Able to cite other references/notes in markdown note</li>
              <li>
                Support math(latex), code block, mindmap and more in markdown
                down
              </li>
            </ul>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const slide = ref("library");
const release = ref({});

onMounted(() => {
  let os = getOS();
  console.log("system os", os);

  fetch(
    "https://api.github.com/repos/ResearchHelper/research-helper/releases/latest",
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      release.value = data;
      console.log(data);
    });
});

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform =
      window.navigator?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  console.log(os);
  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (/Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}
</script>

<style scoped lang="scss">
q-page {
  min-width: 320px;
  min-height: 480px;
}

.title {
  font-size: 3rem;
}

.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
}

@media (max-width: 1024px) {
  .title {
    font-size: 2.5rem;
  }

  .button {
    font-size: 1rem;
  }

  .image {
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
  }

  .button {
    font-size: 0.5rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1rem;
  }

  .button {
    font-size: 0.5rem;
  }
}

@media (max-height: 1024px) {
  .title {
    font-size: 2.5rem;
  }

  .button {
    font-size: 1rem;
  }

  .image {
    max-width: 100%;
    height: auto;
  }
}

@media (max-height: 768px) {
  .title {
    font-size: 2rem;
  }

  .button {
    font-size: 0.5rem;
  }
}

@media (max-height: 480px) {
  .title {
    font-size: 1.5rem;
  }

  .button {
    font-size: 0.5rem;
  }
}
</style>
