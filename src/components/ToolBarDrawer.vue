<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="(val: boolean) => $emit('update:model-value', val)"
    maximized
    transition-show="slide-left"
    transition-hide="slide-right"
  >
    <q-card>
      <q-toolbar>
        <img
          src="icons/favicon-32x32.png"
          alt="logo"
        />
        <q-toolbar-title> {{ $t("sophosia") }} </q-toolbar-title>
        <q-space />
        <q-btn
          dense
          flat
          icon="mdi-close"
          v-close-popup
        />
      </q-toolbar>
      <q-card-section>
        <q-list separator>
          <q-item
            clickable
            v-close-popup
          >
            <q-item-section>{{ $t("documentation") }}</q-item-section>
          </q-item>
          <q-expansion-item :label="$t('language')">
            <q-list>
              <q-item
                v-for="lang in languageOptions"
                :key="lang.value"
                clickable
                @click="language = lang"
              >
                <q-item-section>{{ lang.label }}</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-item>
            <q-item-section>
              <div class="row justify-between">
                {{ $t("light-dark-mode") }}
                <q-toggle
                  dense
                  style="font-weight: 500"
                  :model-value="$q.dark.isActive"
                  @update:model-value="(isDark: boolean) => $q.dark.set(isDark)"
                  unchecked-icon="mdi-white-balance-sunny"
                  checked-icon="mdi-brightness-4"
                />
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-section align="center">
        <q-btn
          name="github"
          icon="mdi-github"
          dense
          flat
          href="https://github.com/sophosia/sophosia"
          target="_blank"
        >
          <q-tooltip>GitHub</q-tooltip>
        </q-btn>
        <q-btn
          name="twitter"
          icon="mdi-twitter"
          dense
          flat
          href="https://twitter.com/sophosia_app"
          target="_blank"
        >
          <q-tooltip>Twitter</q-tooltip>
        </q-btn>
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
        >
          <q-tooltip>Discord</q-tooltip>
        </q-btn>
        <q-btn
          name="qq"
          icon="mdi-qqchat"
          dense
          flat
          href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ZquNNKQ3HhS-X3WOnrubOWrXOvz2HGlk&authKey=YWK8YwMt%2F7Za6Ljyu8WfCibfXTTaSQjI%2BzPApoTFf0O85buKz5mH9N8tsO4gdKkX&noverify=0&group_code=808198109"
          target="_blank"
        >
          <q-tooltip>QQ</q-tooltip>
        </q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n({ useScope: "global" });

const props = defineProps({
  modelValue: { type: Boolean, required: true },
});
const emit = defineEmits(["update:model-value"]);

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
</script>
