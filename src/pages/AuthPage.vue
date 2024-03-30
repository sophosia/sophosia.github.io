<template>
  <h4
    v-if="code"
    class="app-description text-center"
  >
    {{ $t("auth-success") }}
  </h4>
  <h4
    v-else
    class="app-description text-center"
  >
    {{ $t("auth-fail") }}
  </h4>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
const props = defineProps({
  code: { type: String, required: true },
});
onMounted(() => {
  if (props.code) window.open(`sophosia://auth?code=${props.code}`, "_self");
});
</script>
