<template>
  <q-drawer
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value')"
    show-if-above
    side="right"
  >
    hello
  </q-drawer>
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
