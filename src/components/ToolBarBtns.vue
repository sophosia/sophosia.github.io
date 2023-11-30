<template>
  <div
    v-if="wideScreen"
    class="row"
  >
    <q-btn
      name="docs"
      :label="$t('docs')"
      flat
      dense
      no-caps
      :disable="true"
    >
      <q-tooltip>{{ $t("coming-soon") }}</q-tooltip>
    </q-btn>

    <!-- have to put height here otherwise it's invisible in a div tag  -->
    <q-separator
      style="height: 1rem"
      class="q-my-md q-mx-sm"
      vertical
    />
    <q-toggle
      dense
      style="font-weight: 500"
      :model-value="$q.dark.isActive"
      @update:model-value="(isDark: boolean) => $q.dark.set(isDark)"
      unchecked-icon="mdi-white-balance-sunny"
      checked-icon="mdi-brightness-4"
    />
    <q-btn
      flat
      dense
      icon="mdi-translate"
    >
      <q-popup-proxy>
        <q-list dense>
          <q-item
            v-for="option in languageOptions"
            :key="option.value"
            clickable
            v-close-popup
            @click="language = option"
          >
            <q-item-section>
              <q-item-label>
                {{ option.label }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-popup-proxy>
    </q-btn>

    <q-separator
      style="height: 1rem"
      class="q-my-md q-mx-sm"
      vertical
    />
    <q-btn
      name="github"
      icon="mdi-github"
      dense
      flat
      href="https://github.com/sophosia/sophosia"
      target="_blank"
    />
    <q-btn
      name="twitter"
      icon="mdi-twitter"
      dense
      flat
      href="https://twitter.com/sophosia_app"
      target="_blank"
    />
    <q-btn
      name="discord"
      :style="
        $q.dark.isActive
          ? '-webkit-filter: invert(100%); filter: invert(100%)'
          : ''
      "
      icon="img:discord.svg"
      dense
      flat
      href="https://discord.gg/m3QkadNJ"
      target="_blank"
    />
  </div>
  <div v-else>
    <q-btn
      name="menu"
      icon="mdi-menu"
      dense
      flat
      @click="$emit('update:model-value', true)"
    ></q-btn>
  </div>
</template>
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
const props = defineProps({
  modelValue: { type: Boolean, required: true },
});
const emit = defineEmits(["update:model-value"]);

const { locale } = useI18n({ useScope: "global" });

const languageOptions = [
  { value: "en_US", label: "English" },
  { value: "zh_CN", label: "中文" },
];
const language = computed({
  get() {
    for (let option of languageOptions) {
      if (option.value === locale.value) return option;
    }
    return { value: "en_US", label: "English" };
  },
  set(option: { value: string; label: string }) {
    locale.value = option.value;
  },
});

const wideScreen = ref(false);
onMounted(() => {
  wideScreen.value = window.innerWidth > 768;
  window.onresize = () => {
    wideScreen.value = window.innerWidth > 768;
  };
});

onBeforeUnmount(() => {
  window.onresize = null;
});
</script>
